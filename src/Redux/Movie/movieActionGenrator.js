import movieActionTypes from './movieActionTypes';
import fetchData from '../../Api/Movie';
const { makeRequest, setMovieData, error } = movieActionTypes;

const MakeRequest = () => ({
  type: makeRequest,
});

const Error = (payload) => ({
  type: error,
  payload,
});
const setMovie = (payload) => ({
  type: setMovieData,
  payload,
});
export function getMovies() {
  return (dispatch) => {
    dispatch(MakeRequest);
    fetchData()
      .then((data) => {
        const movieData = data.map(({ results }) => results);
        var newArray = Array.prototype.concat.apply([], movieData);
        dispatch(setMovie(newArray));
      })
      .catch((err) => dispatch(Error(err)));
  };
}
