import styled from 'styled-components';

export const PowerfulFeaturesStyle = styled.div`
  margin-top: 450px;

  &::after {
    content: '';
    background-image: url('/assets/backgrounds/right.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 523px;
    width: 600px;
    position: absolute;
    right: -300px;

    @media (min-width: 1620px) {
      width: 1146px;
      height: 1000px;
      right: -650px;
    }
  }

  @media (min-width: 1024px) {
    margin-top: 160px;
  }
  @media (min-width: 1620px) {
    height: 100vh;
    margin-top: 0;
  }
  @media (min-width: 2090px) {
    justify-content: center;
  }
`;
