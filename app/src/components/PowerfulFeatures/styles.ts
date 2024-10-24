import styled from 'styled-components';

export const PowerfulFeaturesStyle = styled.div`
  position: relative;
  padding-bottom: 550px;
  overflow: hidden;

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
    z-index: -1;

    @media (min-width: 1620px) {
      width: 850px;
      height: 800px;
      right: -450px;
    }
  }

  @media (min-width: 1024px) {
    margin-top: 160px;
    padding-bottom: 38px;
  }
  @media (min-width: 1620px) {
    height: 90vh;
    margin-top: 0;
  }
  @media (min-width: 2090px) {
    justify-content: center;
  }
`;
