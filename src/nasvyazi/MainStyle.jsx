import styled from "styled-components";
export const MainStyle = styled.div`
  & .contaner {
    margin: 0 auto;
    max-width: 1210px;
    & .fott_on {
      height: 60px;
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
        display: flex;
        font-family: Geologica-Light, sans-serif;
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

    & .but {
      display: flex;
      justify-content: center;
      margin-top: 60px;
      & a {
        display: flex;
        width: 364px;
        padding: 16px 24px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 16px;
        background: #0193de;
        color: #fff;
        font-family: Geologica-Light, sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        border: none;
        text-decoration: none;
      }
    }

    & .serviceBtns {
      & .serviceBtns_on {
        height: 60px;
      }
      & h4 {
        color: #02324a;
        text-align: center;
        font-family: Geologica-Light, sans-serif;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
      & .btns {
        display: flex;
        flex-wrap: nowrap;
        margin: 32px 0px;
        overflow: scroll;
        width: 100%;

        & button {
          min-width: 215px;
          margin-right: 16px;
          background: transparent;
          color: rgb(124, 139, 159);
          font-family: Geologica-Regular, sans-serif;
          font-size: 15px;
          line-height: normal;
          padding: 16px 24px;
          transition: all 300ms ease 0s;
          border-radius: 16px;
        }
        & button {
          border: none;
          box-shadow: none !important;
          outline: none !important;
        }
      }
      & .btns::-webkit-scrollbar {
        display: none;
      }

      & .columnBok {
        margin: 36px 0px 0px -16px;
        width: calc(100% + 31px);
        display: flex;
        flex-flow: wrap;
        & .columnBokSub {
          position: relative;
          margin: 15px 15px 24px;
          width: calc(33.3333% - 31px);
          border-radius: 24px;
          background: rgb(247, 251, 254);
          @media (max-width: 992px) and (min-width: 765px) {
            width: calc(50% - 32px);
          }
          @media only screen and (max-width: 765px) {
            width: calc(100% - 30px);
          }

          & .cardService {
            border-radius: 24px;
            border: 1px solid rgb(202, 211, 223);
            background: rgb(255, 255, 255);
            padding: 36px 28px;
            & .t1 {
              color: #02324a;
              font-family: Geologica-Light, sans-serif;
              font-size: 22px;
              font-style: normal;
              font-weight: 600;
              line-height: normal;
            }
            & .aLink {
              color: #0193de;
              font-family: Geologica-Light, sans-serif;
              font-size: 18px;
              font-style: normal;
              font-weight: 600;
              line-height: normal;
            }
          }
        }
      }
    }

    & .brand_on {
      height: 60px;
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

  & .contaner {
    margin: 0 auto;
    max-width: 1210px;
    & .formm_on {
      height: 60px;
    }
    & .question_on {
      height: 60px;
    }
    & h5 {
      color: #02324a;
      text-align: center;
      font-family: Geologica-Light, sans-serif;
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      /* padding-top: 35px; */
    }
  }
`;
