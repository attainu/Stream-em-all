import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../Firebase';
import Movie from '../../Components/Movies';
import TvShow from '../../Components/TvShows';
import Search from '../../Components/Search';
import MyList from '../MyList';

const Home = () => {
  return (
    <div>
      Home
      <div>
        <button>
          <Link to='/sdfsdf'>Not found</Link>
        </button>
      </div>
      <div>
        <button>
          <Link to='/signin'>signin</Link>
        </button>
      </div>
      <div>
        <button>
          <Link to='/signup'>signup</Link>
        </button>
      </div>
      <div>
        <button onClick={() => auth.signOut()}>Sign Out</button>
      </div>
      <Movie />
      <TvShow />
      <Search />
      <MyList />
    </div>
  );
};

export default Home;
