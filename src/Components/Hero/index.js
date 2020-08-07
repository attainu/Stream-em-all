import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import Add from '../../Assets/image/add.svg';
import Play from '../../Assets/image/play-button.svg';

const Hero = ({ url, url2, title, desc }) => {
  return (
    <div
      id='hero'
      className='Hero'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(
          ${url}
        )`,
        backgroundPosition: 'center center',
      }}
    >
      <div className='content'>
        {url2 ? (
          <img className='logo' src={url2} alt='' />
        ) : (
          <h1 style={{ fontSize: '6rem' }}>Stranger Things</h1>
        )}

        <p>{desc}</p>
        <div className='button-wrapper'>
          <Link to='/' className='Button primary'>
            <img src={Play} alt='' />
            Play
          </Link>
          <Link to='/' className='Button'>
            <img src={Add} alt='' />
            Add To List
          </Link>
        </div>
      </div>
      <div className='overlay'></div>
    </div>
  );
};

export default Hero;
