import queryString from 'query-string';
import { ActionInterface, ActionGetQueryInterface } from 'interfaces/action';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getActions = async (query?: ActionGetQueryInterface): Promise<PaginatedInterface<ActionInterface>> => {
  return fetcher('/api/actions', {}, query);
};

export const createAction = async (action: ActionInterface) => {
  return fetcher('/api/actions', { method: 'POST', body: JSON.stringify(action) });
};

export const updateActionById = async (id: string, action: ActionInterface) => {
  return fetcher(`/api/actions/${id}`, { method: 'PUT', body: JSON.stringify(action) });
};

export const getActionById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/actions/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteActionById = async (id: string) => {
  return fetcher(`/api/actions/${id}`, { method: 'DELETE' });
};
