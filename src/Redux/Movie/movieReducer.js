import { setMovieData } from './movieActionTypes';

const INITIAL_STATE = {
  movieItems: [],
};

const movieReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case setMovieData: {
      return { ...state, movieItems: payload };
    }
    default:
      return state;
  }
};

export default movieReducer;
