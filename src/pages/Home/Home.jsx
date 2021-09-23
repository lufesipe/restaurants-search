import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Carousel, RestaurantCard, Modal, Map, Loader, InputField } from '../../components';

import * as S from './styled';
import logo from '../../assets/logo.svg';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState(null);

  const [placeId, setPlaceId] = useState(null);

  const [modalOpened, setModalOpened] = useState(false);

  const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);

  const handleOpenModal = (placeId) => {
    setPlaceId(placeId);
    setModalOpened(true);
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Search>
          <S.Logo src={logo} alt="Logo do restaurante" />
          <InputField setQuery={setQuery} inputValue={inputValue} setInputValue={setInputValue} />
          {restaurants.length > 0 ? (
            <Carousel restaurants={restaurants} handleOpenModal={handleOpenModal} />
          ) : (
            <Loader />
          )}
        </S.Search>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            onClick={() => handleOpenModal(restaurant.place_id)}
            restaurant={restaurant}
          />
        ))}
      </S.Container>
      <Map
        query={query}
        placeId={placeId}
        callbackMarkerPress={(placeId) => handleOpenModal(placeId)}
      />
      <Modal
        open={modalOpened}
        onClose={() => setModalOpened(!modalOpened)}
        restaurantSelected={restaurantSelected}
      />
    </S.Wrapper>
  );
};

export default Home;
