import React, { Fragment } from 'react';
import Search from '../Search';
import Logo from '../Logo';
import Navigation from '../Navigation';
import UserProfile from '../UserProfile';
// import MobileHeader from '../MobileNavbar';
import './index.scss';

const Header = () => {
  return (
    <header className='Header'>
      {window.screen.width <= 500 ? (
        <div>
          <UserProfile />
          <Logo />
          <Navigation />
          <Search />
        </div>
      ) : (
        <Fragment>
          <Logo />
          <Navigation />
          <Search />
          <UserProfile />
        </Fragment>
      )}
    </header>
  );
  // <MobileHeader />
};

export default Header;
