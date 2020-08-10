import userActions from './userActionTypes';
const { logIn, userProfile } = userActions;

export const setUser = (user) => ({
  type: logIn,
  payload: user,
});
export const setUserProfile = (Profile) => ({
  type: userProfile,
  payload: Profile,
});
