import userActions from './userActionTypes';
const { logIn, userProfile, status } = userActions;

const INITIAL_STATE = {
  currentUser: null,
  userProfile: null,
  subscriptionStatus: false,
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
    case status:
      return {
        ...state,
        subscriptionStatus: true,
      };
    default:
      return state;
  }
};

export default userReducer;
