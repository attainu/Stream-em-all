import userActions from './userActionTypes';
const { logIn, userProfile } = userActions;

const INITIAL_STATE = {
  currentUser: null,
  userProfile: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case logIn:
      return {
        ...state,
        currentUser: payload,
      };
    case userProfile:
      return {
        ...state,
        userProfile: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
