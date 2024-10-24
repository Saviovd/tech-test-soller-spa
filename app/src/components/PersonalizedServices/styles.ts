import styled from 'styled-components';

export const PersonalizedServicesStyle = styled.div`
  padding-bottom: 550px;

  &::after {
    content: '';
    background-image: url('/assets/backgrounds/left.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 523px;
    width: 600px;
    position: absolute;
    left: -300px;
    z-index: -1;

    @media (min-width: 1620px) {
      width: 850px;
      height: 800px;
      left: -450px;
    }
  }

  @media (min-width: 1024px) {
    padding-bottom: 0;
  }
  @media (min-width: 1620px) {
    height: 90vh;
    padding-left: 2rem;
  }
  @media (min-width: 2090px) {
    padding-left: 0;
  }
`;
