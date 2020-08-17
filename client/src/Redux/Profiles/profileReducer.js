import profileActionTypes from './profileActionTypes';
const { getProfileActionType } = profileActionTypes;

const INITIAL_STATE = {
  Profiles: [],
};

const profilesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case getProfileActionType: {
      return { Profiles: payload };
    }
    default:
      return state;
  }
};

export default profilesReducer;
