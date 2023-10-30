import styled from "styled-components";
export const AboutStyle = styled.div`
  & .contaner {
    margin: 0 auto;
    max-width: 1210px;
    padding-top: 93px;
    & .link {
      padding-left: 10px;
      & a {
        color: #7c8b9f;
        font-family: Geologica-Light, sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration: none;
      }
    }
    & .fott {
      & h4 {
        color: #02324a;
        text-align: center;
        font-family: Geologica-Light, sans-serif;
        font-size: 46px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        @media (max-width: 570px) {
          font-size: 30px;
        }
      }
      & p {
        color: #7c8b9f;
        font-family: Geologica-Light, sans-serif;
        display: flex;
        font-size: 15px;
        font-style: normal;
        font-weight: 300;
        line-height: 150%;
        justify-content: center;
        padding-bottom: 50px;
        @media (max-width: 570px) {
          font-size: 12px;
        }
      }
    }

    & .brand {
      color: #02324a;
      text-align: center;
      font-family: Geologica-Light, sans-serif;
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
`;
