import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import {
  authorizationValidationMiddleware,
  errorHandlerMiddleware,
  notificationHandlerMiddleware,
} from 'server/middlewares';
import { videoPlayerValidationSchema } from 'validationSchema/video-players';
import { convertQueryToPrismaUtil, getOrderByOptions, parseQueryParams } from 'server/utils';
import { getServerSession } from '@roq/nextjs';
import { GetManyQueryOptions } from 'interfaces';
import omit from 'lodash/omit';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req);
  if (!session) {
    if (req.method === 'GET') {
      return getVideoPlayersPublic();
    }
    return res.status(403).json({ message: `Forbidden` });
  }
  const { roqUserId, user } = session;
  switch (req.method) {
    case 'GET':
      return getVideoPlayers();
    case 'POST':
      return createVideoPlayer();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getVideoPlayersPublic() {
    const {
      limit: _limit,
      offset: _offset,
      order,
      ...query
    } = parseQueryParams(req.query) as Partial<GetManyQueryOptions>;
    const limit = parseInt(_limit as string, 10) || 20;
    const offset = parseInt(_offset as string, 10) || 0;
    const findOptions = convertQueryToPrismaUtil(query, 'video_player');
    const countOptions = omit(findOptions, 'include');
    const [totalCount, data] = await prisma.$transaction([
      prisma.video_player.count(countOptions as unknown),
      prisma.video_player.findMany({
        take: limit,
        skip: offset,
        ...(order?.length && {
          orderBy: getOrderByOptions(order),
        }),
        ...findOptions,
      }),
    ]);
    return res.status(200).json({ totalCount, data });
  }

  async function getVideoPlayers() {
    const {
      limit: _limit,
      offset: _offset,
      order,
      ...query
    } = parseQueryParams(req.query) as Partial<GetManyQueryOptions>;
    const limit = parseInt(_limit as string, 10) || 20;
    const offset = parseInt(_offset as string, 10) || 0;
    const response = await prisma.video_player
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findManyPaginated({
        ...convertQueryToPrismaUtil(query, 'video_player'),
        take: limit,
        skip: offset,
        ...(order?.length && {
          orderBy: getOrderByOptions(order),
        }),
      });
    return res.status(200).json(response);
  }

  async function createVideoPlayer() {
    await videoPlayerValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.action?.length > 0) {
      const create_action = body.action;
      body.action = {
        create: create_action,
      };
    } else {
      delete body.action;
    }
    if (body?.click?.length > 0) {
      const create_click = body.click;
      body.click = {
        create: create_click,
      };
    } else {
      delete body.click;
    }
    if (body?.design?.length > 0) {
      const create_design = body.design;
      body.design = {
        create: create_design,
      };
    } else {
      delete body.design;
    }
    const data = await prisma.video_player.create({
      data: body,
    });
    await notificationHandlerMiddleware(req, data.id);
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
