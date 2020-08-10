import TvShowActionTypes from './tvshowActionTypes';
import fetchData from '../../Api/tvShow';

const { makeRequest, setTvShowData, error } = TvShowActionTypes;
const MakeRequest = () => ({
  type: makeRequest,
});

const Error = (payload) => ({
  type: error,
  payload,
});
const setTvShow = (payload) => ({
  type: setTvShowData,
  payload,
});
export const getTvShow = () => {
  return (dispatch) => {
    dispatch(MakeRequest);
    fetchData()
      .then((data) => {
        const TvShowData = data.map(({ results }) => results);
        var newArray = Array.prototype.concat.apply([], TvShowData);
        dispatch(setTvShow(newArray));
      })
      .catch((err) => dispatch(Error(err)));
  };
};
