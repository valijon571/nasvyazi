import styled from "styled-components";
export const RectangleStyle = styled.div`
  & .carusel {
    display: inline-block;
    position: relative;
    border-radius: 24px;
    /* border: 1px solid rgb(202, 211, 223); */
    margin-left: 15px;
    z-index: 1;
    width: calc(100% - 30px) !important;
    & div {
      & img {
        position: relative;
        width: 99%;
        height: 420px;
        object-fit: cover;
        border-radius: 24px;
        z-index: 1;
      }
    }
  }
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & .accordion__button {
    display: flex;
    align-items: center;
  }
`;
