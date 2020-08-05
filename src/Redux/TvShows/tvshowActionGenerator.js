import { setTvShowData } from './tvshowActionTypes';
import fetchData from '../../Api/tvShow';

const setTvShow = (payload) => ({
  type: setTvShowData,
  payload,
});
export const getTvShow = () => {
  return (dispatch) => {
    fetchData().then((data) => {
      const TvShowData = data.map(({ results }) => results);
      var newArray = Array.prototype.concat.apply([], TvShowData);
      dispatch(setTvShow(newArray));
    });
  };
};
