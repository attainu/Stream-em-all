import { setMovieData } from './movieActionTypes';
import fetchData from '../../Api/Movie';

const setMovie = (payload) => ({
  type: setMovieData,
  payload,
});
export function getMovies() {
  return (dispatch) => {
    fetchData().then((data) => {
      const movieData = data.map(({ results }) => results);
      var newArray = Array.prototype.concat.apply([], movieData);
      dispatch(setMovie(newArray));
    });
  };
}
