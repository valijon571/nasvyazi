import styled from "styled-components";
export const FormsStyle = styled.div`
  & .columnBox {
    display: flex;
    justify-content: space-between;
    padding: 15px 11px;
    padding-top: 45px;
    @media (max-width: 1140px) {
      display: flex;
      justify-content: space-between;
      padding: 15px 11px;
      padding-top: 45px;
      align-items: center;
      flex-direction: column;
    }

    & .columnBox_on {
      width: 554px;
      height: 562px;
      border-radius: 24px;
      background: #f7fbfe;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: wrap;
      align-content: space-around;
      @media (max-width: 1185px) {
        width: 520px;
        height: 562px;
        @media (max-width: 1180px) {
          width: 500px;
          height: 562px;
          @media (max-width: 1140px) {
            width: 550px;
            height: 562px;
            @media (max-width: 610px) {
              width: 125%;
              height: 562px;
            }
          }
        }
      }
      & .t1 {
        & h5 {
          color: #02324a;
          font-family: Geologica-Light, sans-serif;
          font-size: 31px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          @media (max-width: 500px) {
            font-size: 25px;
          }
        }
        & p {
          color: #7c8b9f;
          font-family: Geologica-Light, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 300;
          line-height: 150%;
          @media (max-width: 500px) {
            font-size: 13px;
          }
        }
      }
      & .t2 {
        padding-bottom: 50px;
        & span {
          font-family: Geologica-Regular, sans-serif;
          font-size: 16px;
          line-height: normal;
          & a {
            margin-bottom: 19px;
            color: rgb(2, 50, 74);
            display: flex;
            align-items: center;
            text-decoration: none;
            & img {
              margin-right: 12px;
            }
          }
        }
      }
    }
    & .columnBox_to {
      width: 554px;
      height: 562px;
      flex-shrink: 0;
      border-radius: 24px;
      border: 1px solid #cad3df;
      background: #fff;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-content: space-around;
      justify-content: space-evenly;
      @media (max-width: 1185px) {
        width: 520px;
        height: 562px;
        @media (max-width: 1180px) {
          width: 500px;
          height: 562px;
          @media (max-width: 1140px) {
            width: 550px;
            height: 562px;
            margin-top: 20px;
            @media (max-width: 610px) {
              width: 125%;
              height: 562px;
            }
          }
        }
      }

      & .a1 {
        color: #02324a;
        font-family: Geologica-Light, sans-serif;
        font-size: 25px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        @media (max-width: 610px) {
          text-align: center;
        }
      }

      & form {
        @media (max-width: 610px) {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        & .a2 {
          & input {
            display: flex;
            width: 446px;
            padding: 20px 20px;
            margin-bottom: 25px;
            align-items: center;
            gap: 10px;
            border-radius: 16px;
            border: 1px solid #cad3df;
            background: #fff;
            color: #7c8b9f;
            font-family: Geologica-Light, sans-serif;
            font-size: 16px;
            font-style: normal;
            font-weight: 300;
            line-height: normal;
            @media (max-width: 610px) {
              width: 245px;
              @media (max-width: 370px) {
                width: 200px;
              }
            }
          }
          & textarea {
            display: flex;
            width: 446px;
            height: 90px;
            padding: 16px 20px;
            margin-bottom: 25px;
            align-items: center;
            gap: 10px;
            border-radius: 16px;
            border: 1px solid rgb(202, 211, 223);
            background: rgb(255, 255, 255);
            color: #7c8b9f;
            font-size: 16px;
            font-style: normal;
            font-weight: 200;
            line-height: normal;
            resize: none !important;
            @media (max-width: 610px) {
              width: 245px;
              @media (max-width: 370px) {
                width: 200px;
              }
            }
          }
        }
        & .btnmain {
          @media (max-width: 610px) {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          & .sc {
            padding-bottom: 20px;
            @media (max-width: 610px) {
              text-align: center;
            }
            & .container_checkbox {
              color: #7c8b9f;
              font-family: Geologica-Light, sans-serif;
              font-size: 19px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
              & input {
                width: 20px;
                height: 20px;
              }
            }
          }
          & button {
            display: flex;
            width: 486px;
            padding: 16px 24px;
            justify-content: center;
            align-items: center;
            gap: 10px;
            border-radius: 16px;
            background: #0193de;
            border: none;
            color: #fff;
            font-family: Geologica-Light, sans-serif;
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            @media (max-width: 610px) {
              width: 245px;
              @media (max-width: 370px) {
                width: 200px;
              }
            }
          }
        }
      }
    }
  }
`;
