import { setTvShowData } from './tvshowActionTypes';

const INITIAL_STATE = {
  tvShowItems: [],
};

const TvShowReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case setTvShowData: {
      return { ...state, tvShowItems: payload };
    }
    default:
      return state;
  }
};

export default TvShowReducer;
