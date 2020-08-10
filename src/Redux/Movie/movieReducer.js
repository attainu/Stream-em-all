import movieActionTypes from './movieActionTypes';
const { makeRequest, setMovieData, error } = movieActionTypes;

const INITIAL_STATE = {
  movieItems: [],
};

const movieReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case makeRequest: {
      return { ...state, loading: true };
    }
    case setMovieData: {
      return { ...state, movieItems: payload, loading: false };
    }
    case error: {
      return { ...state, error: payload, loading: false };
    }
    default:
      return state;
  }
};

export default movieReducer;
