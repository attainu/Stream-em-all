import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';

const Navigation = () => {
  return (
    <div id='navigation' className='Navigation'>
      <nav>
        <ul>
          <NavLink activeClassName='active' to='/movie'>
            <li>Home</li>
          </NavLink>
          <NavLink activeClassName='active' to='/tvshow'>
            <li>Series</li>
          </NavLink>
          <NavLink activeClassName='active' to='/mylist'>
            <li>My List</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
