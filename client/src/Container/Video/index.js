import React, { Fragment } from 'react';
import ReactPlayer from 'react-player';
import Logo from '../../Components/Logo';

const Video = () => {
  return (
    <Fragment>
      <Logo />
      <ReactPlayer
        url={'https://youtu.be/6ZfuNTqbHE8'}
        controls={true}
        width={'100vw'}
        height={'90vh'}
        playing={true}
        style={{ marginTop: '7vh' }}
      />
    </Fragment>
  );
};

export default Video;
