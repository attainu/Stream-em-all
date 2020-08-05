import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTvShow } from '../../Redux/TvShows/tvshowActionGenerator';

const TvShows = ({ getTvShow }) => {
  useEffect(() => {
    getTvShow();
  }, [getTvShow]);
  return <div>TvShow</div>;
};
const mapDispatchToProps = (dispatch) => ({
  getTvShow: () => dispatch(getTvShow()),
});
const mapStateToProps = ({ tvShow }) => ({
  TvShows: tvShow.tvShowItems,
});
export default connect(mapStateToProps, mapDispatchToProps)(TvShows);
