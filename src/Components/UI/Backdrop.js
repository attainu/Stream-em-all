import React from 'react';

const backdrop = ({ show, toggleBackdrop }) =>
  show ? (
    <div onClick={() => toggleBackdrop()} className='backdrop'></div>
  ) : null;

export default backdrop;
