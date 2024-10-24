import styled from 'styled-components';

export const TestimonialsStyles = styled.div`
  width: 100%;
  .swiper {
    width: 100%;
    max-width: 1900px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    position: relative;
    height: 480px;

    .swiper-wrapper {
      align-items: center;
    }

    .swiper-slide {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: fit-content;
      .card {
        transition: 0.5s;
        height: 70%;
        width: 340px;
      }

      @media (min-width: 1024px) {
        justify-content: flex-start;

        .card {
          width: 365px;
        }
      }
    }

    .swiper-slide-active {
      .card {
        height: 85%;
      }
    }

    @media (min-width: 1024px) {
      height: 550px;
      margin: 0;
      width: 100%;
    }
  }
  .navigation {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 24px;
    margin: 60px auto 0;

    .custom-prev,
    .custom-next {
      width: 48px;
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: initial;

      &::after {
        content: none;
      }
    }
    @media (min-width: 1024px) {
      margin: 60px 0 0;
    }
  }
`;
