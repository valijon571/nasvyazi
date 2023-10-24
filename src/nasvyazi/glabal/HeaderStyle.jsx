import styled from "styled-components";
export const HeaderStyle = styled.div`
  & .hedar {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 15px 0px;
    position: fixed;
    justify-content: space-evenly;
    background: rgb(255, 255, 255);
    border-bottom: 0.5px solid rgb(242, 247, 251);
    position: fixed;
    z-index: 999;
    @media (max-width: 970px) {
      display: flex;
      justify-content: space-around;
    }
    & .hedar_on {
      display: flex;
      & .links {
        display: flex;
        list-style-type: none;
        text-decoration: none;

        & li {
          margin-right: 24px;
          & a {
            color: rgb(2, 50, 74);
            font-family: Geologica-Medium, sans-serif;
            font-size: 15px;
            line-height: normal;
            text-decoration: none;
          }
          & .careerlink {
            border: 1.5px solid rgb(1, 147, 222);
            padding: 4px 8px;
            border-radius: 8px;
            text-decoration: none;
          }
          @media (max-width: 970px) {
            display: none;
          }
        }
      }
    }
    & .hedar_to {
      display: flex;
      & a {
        color: rgb(1, 147, 222);
        text-align: right;
        font-family: Geologica-Medium, sans-serif;
        font-size: 16px;
        display: flex;
        align-items: center;
        text-decoration: none;

        & span {
          margin-right: 10px;
        }
      }
      @media only screen and (max-width: 576px) and (min-width: 320px) {
        display: none;
      }
    }
    & .hedar_to1 {
      display: none;
      @media only screen and (max-width: 576px) and (min-width: 320px) {
        display: block;
        color: rgb(2, 50, 74);
        font-family: Geologica-Medium, sans-serif;
        font-size: 24px;
        line-height: normal;
        transition: all 300ms ease 0s;
      }
    }
  }
`;
