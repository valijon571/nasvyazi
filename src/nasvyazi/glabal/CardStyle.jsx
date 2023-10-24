import styled from "styled-components";
export const CardStyle = styled.div`
  & .cardd {
    & h5 {
      color: #02324a;
      text-align: center;
      font-family: Geologica-Light, sans-serif;
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      @media (max-width: 570px) {
        font-size: 25px;
      }
    }
    & .card_on {
      & .on {
        display: flex;
        @media (max-width: 980px) {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        & .card {
          padding: 36px;
          border-radius: 24px;
          background: #f7fbfe;
          margin: 15px 15px 24px;
          width: calc(50% - 31px);
          @media (max-width: 980px) {
            width: 88%;
          }
          & img {
            width: 36px;
          }
          & .card-body {
            padding: 0px;
            padding-top: 24px;
            & h4 {
              color: #02324a;
              font-family: Geologica-Light, sans-serif;
              font-size: 22px;
              font-style: normal;
              font-weight: 600;
              line-height: normal;
            }
            & p {
              color: #7c8b9f;
              font-family: Geologica-Light, sans-serif;
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              line-height: 150%;
            }
          }
        }
      }
    }
  }
`;
