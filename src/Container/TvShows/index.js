import React from 'react';
import TvShow from '../../Components/TvShows';
import Header from '../../Components/Header';
import Hero from '../../Components/Hero';
import Footer from '../../Components/Footer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const TvShows = ({ currentUser }) => {
  if (!currentUser) {
    return <Redirect to='/signin' />;
  }
  return (
    <div>
      <Header />
      <Hero
        url={'http://image.tmdb.org/t/p/w1280/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg'}
        title={'Breaking Bad'}
        desc={
          'When Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. '
        }
      />
      <TvShow />
      <Footer />
    </div>
  );
};
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});
export default connect(mapStateToProps)(TvShows);
