import React from 'react';

import * as S from './styled';

const ModalContent = ({ restaurantSelected, onClose }) => {
  return (
    <>
      <S.Close onClick={onClose}>×</S.Close>
      <S.ModalTitle>{restaurantSelected?.name}</S.ModalTitle>
      <S.ModalContent>{restaurantSelected?.formatted_phone_number}</S.ModalContent>
      <S.ModalContent>{restaurantSelected?.formatted_address}</S.ModalContent>
      <S.ModalContent>
        {restaurantSelected?.opening_hours?.open_now ? 'Aberto agora' : 'Fechado no momento'}
      </S.ModalContent>
    </>
  );
};

export default ModalContent;
