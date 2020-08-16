import React from 'react';
import Search from '../Search';
import Logo from '../Logo';
import Navigation from '../Navigation';
import UserProfile from '../UserProfile';
import MobileHeader from '../MobileNavbar';
import './index.scss';

const Header = () => {
  return <MobileHeader />;
  {
    /* <header className='Header'>
      <div style={{ display: 'none' }}>
        <Logo />
        <Navigation />
        <Search />
        <UserProfile />
      </div>
    </header> */
  }
};

export default Header;
