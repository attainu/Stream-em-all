import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../Firebase';

const Home = () => {
  return (
    <div>
      Home Loader alredy installed
      <div>
        <Link to='/sdfsdf'>Not found</Link>
      </div>
      <div>
        <button onClick={() => auth.signOut()}>Sign Out</button>
      </div>
    </div>
  );
};

export default Home;
