import userActions from './userActionTypes';
const { logIn, userProfile, status, getList } = userActions;

const INITIAL_STATE = {
  currentUser: null,
  userProfile: null,
  subscriptionStatus: false,
  paymentReciept: null,
  myList: [],
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
        paymentReciept: payload,
      };
    case getList:
      return {
        ...state,
        myList: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
