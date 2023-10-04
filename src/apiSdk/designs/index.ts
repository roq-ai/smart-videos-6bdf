import queryString from 'query-string';
import { DesignInterface, DesignGetQueryInterface } from 'interfaces/design';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getDesigns = async (query?: DesignGetQueryInterface): Promise<PaginatedInterface<DesignInterface>> => {
  return fetcher('/api/designs', {}, query);
};

export const createDesign = async (design: DesignInterface) => {
  return fetcher('/api/designs', { method: 'POST', body: JSON.stringify(design) });
};

export const updateDesignById = async (id: string, design: DesignInterface) => {
  return fetcher(`/api/designs/${id}`, { method: 'PUT', body: JSON.stringify(design) });
};

export const getDesignById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/designs/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteDesignById = async (id: string) => {
  return fetcher(`/api/designs/${id}`, { method: 'DELETE' });
};
