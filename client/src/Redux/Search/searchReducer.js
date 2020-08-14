import SearchActionTypes from './searchActionTypes';

const INITIAL_STATE = {
  searchItems: [],
};
const { makeRequest, setSearchData, error } = SearchActionTypes;
const searchReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case makeRequest: {
      return { ...state, loading: true };
    }
    case setSearchData: {
      return { ...state, searchItems: payload, loading: false };
    }
    case error: {
      return { ...state, error: payload, loading: false };
    }
    default:
      return state;
  }
};

export default searchReducer;
