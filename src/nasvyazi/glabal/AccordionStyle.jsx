import styled from "styled-components";
export const AccordionStyle = styled.div`
  & .faq_on {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 40px;
    align-items: center;
    padding-bottom: 25px;
    & .accordion_on {
      width: 58%;
      @media (max-width: 760px) {
        width: 100%;
        margin: 0px 20px;
      }

      & .accordion {
        padding: 18px;
        width: 100%;
        min-height: 60px;
        background: #ffffff;
        border: 1px solid rgb(202, 211, 223);
        border-radius: 12px;
        align-items: center;
        justify-content: space-between;

        & .accordion-btn__items {
          display: flex;
          justify-content: space-between;
          align-items: center;
          & h4 {
            flex-shrink: 0;
            color: #02324a;
            padding-left: 8px;
            font-family: Geologica-Light, sans-serif;
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            @media (max-width: 900px) {
              width: calc(100% - 150px);
            }
          }
          & img {
            width: 28px;
            height: 28px;
            padding-right: 7px;
            transform: rotate(0deg);
            transition: transform 150ms ease;
          }
        }
        & .active {
          & img {
            transform: rotate(180deg);
            transition: transform 150ms ease;
          }
        }
      }
    }
  }
`;
