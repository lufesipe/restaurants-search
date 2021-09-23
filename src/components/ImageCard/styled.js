import styled from 'styled-components';

export const Wrapper = styled.div`
  :hover {
    cursor: pointer;
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  width: 90px;
  height: 90px;
  border-radius: 6px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
`;

export const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  margin-top: 3px;
  display: block;
  height: 16px;
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
