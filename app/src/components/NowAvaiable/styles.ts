import styled from 'styled-components';

export const NowAvaiableStyles = styled.div`
  &::after {
    content: '';
    width: 365px;
    height: 365px;
    background-color: #a855f7;
    position: absolute;
    bottom: -180px;
    left: -180px;
    border-radius: 100%;

    @media (min-width: 1024px) {
      width: 780px;
      height: 780px;
      left: auto;
      top: -390px;
      right: -100px;
    }
  }
`;
