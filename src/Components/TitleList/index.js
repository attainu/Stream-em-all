import React from 'react'; //, { Fragment }
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { IMAGE_BASE_URL, GRID_IMAGE_SIZE } from '../../Config';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import './index.scss';

SwiperCore.use(Navigation);
const TitleList = ({ slide, title = 'popularonNetflix' }) => {
  const output = slide.map(
    (data, index) =>
      data.backdrop_path && (
        <SwiperSlide key={data.id}>
          <img
            src={`${IMAGE_BASE_URL}${GRID_IMAGE_SIZE}${data.backdrop_path}`}
            style={{ maxWidth: '100%', height: 'auto' }}
            alt=''
          />
        </SwiperSlide>
      )
  );
  console.log(output);
  return (
    <div>
      <h1>{title}</h1>
      <Swiper
        id='main'
        loop={true}
        slidesPerView={5}
        spaceBetween={10}
        navigation
      >
        {output}
      </Swiper>
    </div>
  );
};

export default TitleList;
