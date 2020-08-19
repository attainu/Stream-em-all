import React from 'react';
import './index.scss';
const backdrop = ({ show, toggleBackdrop }) =>
  show ? (
    <div onClick={() => toggleBackdrop()} className='backdrop'></div>
  ) : null;

export default backdrop;
