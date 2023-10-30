import styled from "styled-components";
export const CareerStyle = styled.div`
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
    & .main {
      & h5 {
        color: #02324a;
        text-align: center;
        font-family: Geologica-Light, sans-serif;
        font-size: 46px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
      & p {
        color: #7c8b9f;
        font-family: Geologica-Light, sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 300;
        line-height: 150%;
        display: flex;
        justify-content: center;
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
