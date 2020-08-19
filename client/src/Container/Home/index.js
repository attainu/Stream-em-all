import React, { useEffect } from 'react';
import Movie from '../../Components/Movies';
import Header from '../../Components/Header';
import Hero from '../../Components/Hero';
import Footer from '../../Components/Footer';
import { connect, useDispatch } from 'react-redux';
import { getMyList } from '../../Redux/User/userActionGenerator';
import { Redirect } from 'react-router-dom';

const Home = ({ currentUser, userProfile, myList }) => {
  const dispatch = useDispatch();
  const person = userProfile.profile;

  useEffect(() => {
    dispatch(getMyList(person));
  }, [dispatch, person]);
  if (!currentUser) {
    return <Redirect to='/signin' />;
  }
  return (
    <div>
      <Header />
      <Hero
        url={
          'https://image.tmdb.org/t/p/original//yJPI9e3H5fGNTWNzW2p4iSG5qdc.jpg'
        }
        title={'Narcos'}
        desc={
          'A gritty chronicle of the war against Colombia"s infamously violent and powerful drug cartels.'
        }
        url2={'http://www.returndates.com/backgrounds/narcos.logo.png'}
      />
      <Movie />
      <Footer />
    </div>
  );
};
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
  userProfile: user.userProfile,
  myList: user.myList,
});
export default connect(mapStateToProps)(Home);
