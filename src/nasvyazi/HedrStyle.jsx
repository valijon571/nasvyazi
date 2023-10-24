import styled from "styled-components";
export const HedrStyle = styled.div`
  & .image {
    position: relative;
    height: 784px;
    overflow: hidden;
    user-select: none;
    & .img1 {
      position: absolute;
      top: 60px;
      left: 0px;
      width: 100%;
      z-index: -1;
    }
  }
  & .contenir {
    margin: 0px 30px 0px 50px;
    padding-left: 50px;
    padding-right: 40px;
    @media only screen and (max-width: 700px) and (min-width: 320px) {
      margin-left: 0px;
    }

    & .body {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 60px;
      & .body_on {
        margin-top: 100px;
        margin-left: 55px;
        @media only screen and (max-width: 700px) and (min-width: 320px) {
          margin-left: 0px;
        }

        & h2 {
          color: rgb(2, 50, 74);
          font-family: Geologica-Bold, sans-serif;
          font-size: 46px;
          line-height: normal;
          @media only screen and (max-width: 700px) and (min-width: 320px) {
            font-size: 27px;
          }
        }
        & p {
          margin-top: 16px;
          color: rgb(124, 139, 159);
          font-family: Geologica-Light, sans-serif;
          font-size: 16px;
          line-height: 150%;
        }
        & .button {
          margin-top: 40px;
          & a {
            margin-top: 36px;
            padding: 16px 24px;
            border-radius: 16px;
            background: rgb(1, 147, 222);
            border: none;
            color: rgb(255, 255, 255);
            font-family: Geologica-SemiBold, sans-serif;
            font-size: 16px;
            line-height: normal;
            text-decoration: none;
          }
        }
      }
    }

    & .friQwB {
      position: relative;
      user-select: none;
      overflow: hidden;
      & .sub {
        position: fixed;
        top: 0px;
        right: -42px;
        z-index: 4;
        display: flex;
        align-items: center;
        height: 100%;
        & .menuss {
          margin-right: 16px;
          display: flex;
          flex-direction: column;
          transition: all 200ms ease 0s;
          & a {
            color: rgb(2, 50, 74);
            font-family: Geologica-SemiBold, sans-serif;
            font-size: 16px;
            line-height: normal;
            border-radius: 16px;
            border: 1px solid rgb(187, 200, 210);
            background: rgb(255, 255, 255);
            padding: 16px 24px;
            margin-bottom: 12px;
            text-align: center;
            text-decoration: none;
          }
        }

        & .block {
          cursor: pointer;
          display: flex;
          align-items: center;
          width: 86px;
          height: 86px;
          border-radius: 50%;
          transition: all 200ms ease 0s;
          & img {
            margin-left: 15px;
          }
        }
      }
    }
  }
`;
