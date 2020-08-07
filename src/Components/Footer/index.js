import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import tmdb from '../../Assets/tmdb.png';
import github from '../../Assets/github.png';
import './index.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <div className='footer__start'>
          <h1
            className='footer__text footer__text--1'
            onClick={() => window.open(`https://theamargupta.tech/`, '_blank')}
          >
            By <span className='footer__link'>Amar Gupta & Akash Dutta</span>
          </h1>
        </div>

        <div className='footer__center'>
          <img
            src={tmdb}
            alt='tmdb'
            className='footer__logo-tmdb'
            onClick={() =>
              window.open(` https://www.themoviedb.org/en`, '_blank')
            }
          />

          <h1 className='footer__text footer__text--2'>
            Copyright©2020,{' '}
            <span className='react'>
              {' '}
              ReactJS is
              <FavoriteIcon className='footer__icon-heart-o footer__icon-heart-off' />
            </span>
          </h1>
        </div>

        <div
          className='footer__end'
          onClick={() =>
            window.open(`https://github.com/attainu/Stream-em-all`, '_blank')
          }
        >
          <img src={github} alt='github' className='footer__logo-github' />

          <h1 className='footer__text footer__link'>View on Github</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
