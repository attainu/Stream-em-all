import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import Modal from '../Modal';
import { IMAGE_BASE_URL, GRID_IMAGE_SIZE } from '../../Config';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import './index.scss';
import Logo from '../Logo2';
import play from '../../Assets/image/play.png';

SwiperCore.use(Navigation);
const TitleList = ({ slide, title, height }) => {
  const [movie, setMovie] = useState('');
  const [isToggle, settoggle] = useState(false);
  const handleClick = (value) => {
    setMovie(value);
    settoggle(true);
  };
  const output = slide.map(
    (data) =>
      data.backdrop_path && (
        <SwiperSlide key={data.id}>
          <div className='movieList' onClick={() => handleClick(data)}>
            <Logo />
            <img className='playLogo' src={play} alt='' />
            <img
              src={`${IMAGE_BASE_URL}${GRID_IMAGE_SIZE}${data.backdrop_path}`}
              style={{ maxWidth: '100%', minHeight: '100%' }}
              alt=''
            />
            <h4 className='playText'>{data.title || data.name}</h4>
            <div className='overlay'></div>
          </div>
        </SwiperSlide>
      )
  );
  return (
    <div>
      {movie && <Modal show={isToggle} modalClosed={settoggle} movie={movie} />}
      <h1>{title}</h1>
      <Swiper
        id='main'
        loop={true}
        slidesPerView={4}
        spaceBetween={7}
        navigation
      >
        {output}
      </Swiper>
    </div>
  );
};

export default TitleList;
