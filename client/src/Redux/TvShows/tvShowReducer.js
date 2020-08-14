import TvShowActionTypes from './tvshowActionTypes';

const INITIAL_STATE = {
  tvShowItems: [],
};
const { makeRequest, setTvShowData, error } = TvShowActionTypes;
const TvShowReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case makeRequest: {
      return { ...state, loading: true };
    }
    case setTvShowData: {
      return { ...state, tvShowItems: payload, loading: false };
    }
    case error: {
      return { ...state, error: payload, loading: false };
    }
    default:
      return state;
  }
};

export default TvShowReducer;
