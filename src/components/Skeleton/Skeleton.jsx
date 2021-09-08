import React from 'react';
import styled, { keyframes } from 'styled-components';

const KeyFrameLoading = keyframes`
  0% {
    oppacity: 0.5;
  }
  100% {
    oppacity: 1;
  }
`;

const LoadingSkeleton = styled.div`
  background-color: gray;
  border-radius: 6px;
  margin-bottom: 10px;
  min-width: ${(props) => props.width};
  min-height: ${(props) => props.height};
  animation: ${KeyFrameLoading} 500ms infinite alternate;
`;

export default ({ width, height }) => <LoadingSkeleton width={width} height={height} />;
