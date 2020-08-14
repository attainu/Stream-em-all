import SearchActionTypes from './searchActionTypes';
import fetchSearchData from '../../Api/Search';
const { makeRequest, setSearchData, error } = SearchActionTypes;

const MakeRequest = () => ({
  type: makeRequest,
});

const Error = (payload) => ({
  type: error,
  payload,
});

const getSearchData = (value) => {
  return (dispatch) => {
    dispatch(MakeRequest);
    fetchSearchData(value)
      .then((data) => {
        dispatch({
          type: setSearchData,
          payload: data.results,
        });
      })
      .catch((err) => dispatch(Error(err)));
  };
};
export default getSearchData;
