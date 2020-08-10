import React from 'react';
import Search from '../Search';
import Logo from '../Logo';
import Navigation from '../Navigation';
import UserProfile from '../UserProfile';
import './index.scss';

const Header = () => {
  return (
    <header className='Header'>
      <Logo />
      <Navigation />
      <Search />
      <UserProfile />
    </header>
  );
};

export default Header;
