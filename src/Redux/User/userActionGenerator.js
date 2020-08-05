import { userAction } from './userActionTypes';
export const setUser = (payload) => ({
  type: userAction,
  payload,
});
