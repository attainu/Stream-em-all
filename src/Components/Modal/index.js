import React, { Fragment } from 'react';
import Backdrop from '../Backdrop';
import MovieDetail from '../MovieDetails';

import { IMAGE_BASE_URL, POSTER_SIZE } from '../../Config';
import './index.scss';

export default function Modal(props) {
  const { modalClosed, show, movie } = props;
  const backgroundStyle = {
    backgroundSize: 'cover',
    maxHeight: '55vh',
    backgroundImage: `url(${IMAGE_BASE_URL}${POSTER_SIZE}${
      movie.backdrop_path || movie.poster_path
    })`,
  };

  return (
    <Fragment>
      <Backdrop show={show} toggleBackdrop={modalClosed} />
      <div
        style={backgroundStyle}
        className={show ? 'modal show' : 'modal hide'}
      >
        <MovieDetail movie={movie} />
      </div>
    </Fragment>
  );
}
