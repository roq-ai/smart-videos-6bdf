import queryString from 'query-string';
import { VideoPlayerInterface, VideoPlayerGetQueryInterface } from 'interfaces/video-player';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getVideoPlayers = async (
  query?: VideoPlayerGetQueryInterface,
): Promise<PaginatedInterface<VideoPlayerInterface>> => {
  return fetcher('/api/video-players', {}, query);
};

export const createVideoPlayer = async (videoPlayer: VideoPlayerInterface) => {
  return fetcher('/api/video-players', { method: 'POST', body: JSON.stringify(videoPlayer) });
};

export const updateVideoPlayerById = async (id: string, videoPlayer: VideoPlayerInterface) => {
  return fetcher(`/api/video-players/${id}`, { method: 'PUT', body: JSON.stringify(videoPlayer) });
};

export const getVideoPlayerById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/video-players/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteVideoPlayerById = async (id: string) => {
  return fetcher(`/api/video-players/${id}`, { method: 'DELETE' });
};
