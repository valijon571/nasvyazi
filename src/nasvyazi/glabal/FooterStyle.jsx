import styled from "styled-components";
export const FooterStyle = styled.div`
  & .foter {
    background: #02324a;
    & .fot {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 32px 0px 24px;
      padding-left: 50px;
      padding-right: 40px;
      width: 90%;
      height: 100%;
      margin: 0 auto;
      max-width: 1210px;

      & .hedar_to {
        & img {
          padding-right: 24px;
        }
      }
    }
    & hr {
      color: #5b6c74;
      margin: 0 auto;
      max-width: 1210px;
    }
    & .fot_on {
      display: flex;
      justify-content: space-between;
      padding: 5px 0px 10px;
      padding-left: 50px;
      padding-right: 40px;
      margin: 0 auto;
      max-width: 1210px;
      & p {
        color: #cad3df;
        font-family: Geologica-Light, sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
      }
    }
  }
`;
