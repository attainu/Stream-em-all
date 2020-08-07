import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { getTvShow } from '../../Redux/TvShows/tvshowActionGenerator';
import TitleList from '../../Components/TitleList';

const TvShows = ({ TvShows, getTvShow }) => {
  const TvShowData1_10 = TvShows.slice(0, 10);
  const TvShowData11_20 = TvShows.slice(10, 20);
  const TvShowData21_30 = TvShows.slice(20, 30);
  const TvShowData31_40 = TvShows.slice(30, 40);
  const TvShowData41_50 = TvShows.slice(40, 50);
  const TvShowData51_60 = TvShows.slice(50, 60);

  useEffect(() => {
    getTvShow();
  }, [getTvShow]);
  return (
    <Fragment>
      <TitleList title='Popular' slide={TvShowData1_10} />
      <TitleList title='Top Rated' slide={TvShowData11_20} />
      <TitleList title='Highest Grosing' slide={TvShowData21_30} />
      <TitleList title='New Releases' slide={TvShowData31_40} />
      <TitleList title='Most Liked' slide={TvShowData41_50} />
      <TitleList title='Trending Now' slide={TvShowData51_60} />
    </Fragment>
  );
};
const mapDispatchToProps = (dispatch) => ({
  getTvShow: () => dispatch(getTvShow()),
});
const mapStateToProps = ({ tvShow }) => ({
  TvShows: tvShow.tvShowItems,
});
export default connect(mapStateToProps, mapDispatchToProps)(TvShows);
