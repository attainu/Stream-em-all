import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTvShow } from '../../Redux/TvShows/tvshowActionGenerator';

const TvShows = ({ TvShows, getTvShow }) => {
  const TvShowData1_10 = TvShows.slice(1, 11);
  const TvShowData11_20 = TvShows.slice(11, 21);
  const TvShowData21_30 = TvShows.slice(21, 31);
  const TvShowData31_40 = TvShows.slice(31, 41);
  const TvShowData41_50 = TvShows.slice(41, 51);
  const TvShowData51_60 = TvShows.slice(51, 60);
  console.log(TvShowData1_10);
  console.log(TvShowData11_20);
  console.log(TvShowData21_30);
  console.log(TvShowData31_40);
  console.log(TvShowData41_50);
  console.log(TvShowData51_60);
  useEffect(() => {
    getTvShow();
  }, [getTvShow]);
  return TvShowData1_10.map((data, index) => (
    <h1 key={index}>
      {index + 1} {data.name}
    </h1>
  ));
};
const mapDispatchToProps = (dispatch) => ({
  getTvShow: () => dispatch(getTvShow()),
});
const mapStateToProps = ({ tvShow }) => ({
  TvShows: tvShow.tvShowItems,
});
export default connect(mapStateToProps, mapDispatchToProps)(TvShows);
