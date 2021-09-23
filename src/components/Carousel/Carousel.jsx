import React from 'react';
import { ImageCard } from '../index';

import * as S from './styled';

export default ({ restaurants, handleOpenModal }) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
    arrows: false,
  };

  return (
    <>
      <S.CarouselTitle>Na sua área</S.CarouselTitle>
      <S.Carousel {...settings}>
        {restaurants.map((restaurant) => (
          <ImageCard
            key={restaurant.place_id}
            onClick={() => handleOpenModal(restaurant.place_id)}
            restaurant={restaurant}
          />
        ))}
      </S.Carousel>
    </>
  );
};
