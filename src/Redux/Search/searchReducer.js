import { SearchActionTypes } from './searchActionTypes';

const INITIAL_STATE = {
  searchItems: [],
};

const searchReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SearchActionTypes: {
      return { ...state, searchItems: payload };
    }
    default:
      return state;
  }
};

export default searchReducer;
