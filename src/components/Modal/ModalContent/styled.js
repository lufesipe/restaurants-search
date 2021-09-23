import styled from 'styled-components';

export const Close = styled.span`
  text-align: right;
  font-weight: bold;
  font-size: 23px;

  :hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.text};
  }
`;

export const ModalTitle = styled.p`
  margin-bottom: 10px;
  letter-spacing: 0.11px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  text-transform: none;
  line-height: 29px;
  font-size: 24px;
  font-weight: bold;
`;

export const ModalContent = styled.p`
  margin-bottom: 10px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  line-height: 19px;
  font-size: 16px;
  font-weight: normal;
`;
