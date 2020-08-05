import React from 'react';
import { connect } from 'react-redux';
import getSearchData from '../../Redux/Search/searchActionGenerator';

const Search = ({ getSearchData }) => {
  const handleChange = (event) => {
    const { value } = event.target;
    return value ? getSearchData(value) : null;
  };
  return <input type='text' onChange={handleChange} />;
};
const mapDispatchToProps = (dispatch) => ({
  getSearchData: (value) => dispatch(getSearchData(value)),
});
// const mapStateToProps = ({ search }) => ({
//   search: search.searchItems,
// });
export default connect(null, mapDispatchToProps)(Search);
