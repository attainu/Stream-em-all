import { SearchActionTypes } from './searchActionTypes';
import fetchSearchData from '../../Api/Search';

const getSearchData = (value) => {
  return (dispatch) => {
    fetchSearchData(value).then((data) => {
      dispatch({
        type: SearchActionTypes,
        payload: data.results,
      });
    });
  };
};
export default getSearchData;
