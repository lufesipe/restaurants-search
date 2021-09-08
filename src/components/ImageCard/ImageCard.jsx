import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Skeleton from '../Skeleton/Skeleton';

const Card = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  width: 90px;
  height: 90px;
  border-radius: 6px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
`;

const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: #ffffff;
  font-size: 16px;
`;

const ImageCard = ({ restaurant }) => {
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
        <Card photo={image}>
          <Title>{restaurant.name}</Title>
        </Card>
      ) : (
        <Skeleton width="90px" heigth="90px" />
      )}
    </>
  );
};

export default ImageCard;
