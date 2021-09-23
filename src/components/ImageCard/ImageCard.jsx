import React, { useEffect, useState } from 'react';
import * as S from './styled';

import Skeleton from '../Skeleton/Skeleton';

const ImageCard = ({ onClick, restaurant }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const image = restaurant.photos ? restaurant.photos[0].getUrl() : restaurant.icon;

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = image;
    imageLoader.onload = () => setImageLoaded(true);
  }, [image]);

  return (
    <>
      {imageLoaded ? (
        <S.Wrapper onClick={onClick}>
          <S.Card photo={image} />
          <S.Title>{restaurant.name}</S.Title>
        </S.Wrapper>
      ) : (
        <Skeleton width="90px" heigth="90px" />
      )}
    </>
  );
};

export default ImageCard;
