import React, { useEffect } from 'react';

import { Portal } from './Portal';
import { ModalContent } from './ModalContent';
import { ModalSkeleton } from './ModalSkeleton';

import * as S from './styled';

const Modal = ({ open, onClose, restaurantSelected }) => {
  useEffect(() => {
    const onEsc = (e) => {
      if (e.keyCode === 27) onClose();
    };

    window.addEventListener('keydown', onEsc);

    return () => {
      window.removeEventListener('keydown', onEsc);
    };
  }, [onClose]);

  if (!open) return null;

  const onOverlayClick = () => {
    onClose();
  };

  const onDialogClick = (e) => {
    e.stopPropagation();
  };

  return (
    <Portal>
      <S.Overlay onClick={onOverlayClick}>
        <S.Dialog onClick={onDialogClick}>
          {restaurantSelected ? (
            <ModalContent restaurantSelected={restaurantSelected} onClose={onClose} />
          ) : (
            <ModalSkeleton />
          )}
        </S.Dialog>
      </S.Overlay>
    </Portal>
  );
};

export default Modal;
