import { userAction } from './userActionTypes';
export const setUser = (user) => ({
  type: userAction,
  payload: user,
});
