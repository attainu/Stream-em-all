import React from 'react';
import Aux from '../../hoc/Aux';
import Backdrop from './Backdrop';
import './backdrop.scss';
import './modal.scss';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../Config';

export default function Modal(props) {
  const { modalClosed, show, movie } = props;
  console.log(movie);
  const backgroundStyle = {
    backgroundSize: 'cover',
    height: '54vh',
    backgroundImage: `url(${IMAGE_BASE_URL}${POSTER_SIZE}${
      movie.backdrop_path || movie.poster_path
    })`,
  };

  return (
    <Aux>
      <Backdrop show={show} toggleBackdrop={modalClosed} />
      <div
        style={backgroundStyle}
        className={show ? 'modal show' : 'modal hide'}
      >
        {props.children}
      </div>
    </Aux>
  );
}
