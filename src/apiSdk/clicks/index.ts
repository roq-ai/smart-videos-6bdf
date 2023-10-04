import queryString from 'query-string';
import { ClickInterface, ClickGetQueryInterface } from 'interfaces/click';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getClicks = async (query?: ClickGetQueryInterface): Promise<PaginatedInterface<ClickInterface>> => {
  return fetcher('/api/clicks', {}, query);
};

export const createClick = async (click: ClickInterface) => {
  return fetcher('/api/clicks', { method: 'POST', body: JSON.stringify(click) });
};

export const updateClickById = async (id: string, click: ClickInterface) => {
  return fetcher(`/api/clicks/${id}`, { method: 'PUT', body: JSON.stringify(click) });
};

export const getClickById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/clicks/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteClickById = async (id: string) => {
  return fetcher(`/api/clicks/${id}`, { method: 'DELETE' });
};
