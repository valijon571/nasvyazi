import styled from "styled-components";
export const RowStyle = styled.div`
  section.slide-option {
    margin: 0 0 50px 0;
    .no-marg {
      margin: 0 0 0 0;
    }
  }

  div.highway-slider {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 150px;
    div.highway-barrier {
      position: relative;
    }
    ul.highway-lane {
      display: flex;
      height: 100%;
      li.highway-car {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        color: #343434;
      }
    }
  }

  @keyframes translatestf {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-500%);
    }
  }
  #stffull div.highway-barrier {
    ul.highway-lane {
      width: 500%;
      li.highway-car {
        animation: translatestf 30s linear infinite;
        h4 {
          font-size: 28px;
        }
        & img {
          margin: 12px;
          width: 250px;
          overflow: hidden;
          border-radius: 24px;
        }
      }
    }
  }

  @keyframes translateinfinite {
    100% {
      transform: translateX(calc(-180px * 12));
    }
  }
  #infinite div.highway-barrier {
    background: #fff;
    overflow: hidden;

    &::before,
    &::after {
      content: " ";
      position: absolute;
      z-index: 9;
      width: 180px;
      height: 100%;
    }
    &::before {
      top: 0;
      left: 0;
    }
    &::after {
      top: 0;
      right: 0;
    }
    ul.highway-lane {
      width: calc(180px * 24);
      li.highway-car {
        animation: translateinfinite 25s linear infinite;
        span.fab {
          font-size: 65px;
        }
        & img {
          margin: 12px;
          width: 250px;
          border-radius: 24px;
        }
      }
    }
  }

  #red {
    background: #cb5454;
  }
  #orange {
    background: #cb8054;
  }
  #yellow {
    background: #cbba54;
  }
  #green {
    background: #69b46e;
  }
  #blue {
    background: #6091b0;
  }
`;
