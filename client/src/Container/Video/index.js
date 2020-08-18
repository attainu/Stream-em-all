import React, { Fragment } from 'react';
import ReactPlayer from 'react-player';
import Logo from '../../Components/Logo';

const Video = () => {
  return (
    <Fragment>
      <Logo />
      <ReactPlayer
        url={'https://youtu.be/zTitoHKsyJg'}
        controls={true}
        width={'100vh'}
        height={'100vh'}
      />
    </Fragment>
  );
};

export default Video;
