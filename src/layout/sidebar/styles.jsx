import styled from "styled-components";

const Wrapper = styled.div`
  & .sidebar {
    width: 350px;
    height: 100%;
    background: #fff;
    & .logo {
      width: 100%;
      height: 100px;
      color: #fff;
      font-size: 24px;
      background: ${(props) => props.theme.main};
      cursor: pointer;
      & > div {
        & > div {
          display: inline-block;
          &.text_box {
            padding: 6px 0 0 20px;
            color: #fff;
          }
        }
      }
    }
    & .gnb {
      & > ul {
        & > li {
          & > a {
            position: relative;
            display: block;
            width: 100%;
            height: 80px;
            line-height: 80px;
            padding: 0 30px 0 40px;
            font-size: 20px;
            color: #363636;
            cursor: pointer;
            &::before {
              content: "";
              position: absolute;
              right: 20px;
              top: 34px;
              width: 18px;
              height: 12px;
              background: url("/images/sidebar_arrow.png");
              transition: transform 0.4s;
            }
            &.on {
              background: ${(props) => props.theme.main};
              color: #fff;
              & + ul {
                max-height: 500px;
              }
              &::before {
                background: url("/images/sidebar_arrow_on.png") no-repeat;
              }
            }
            &.no_depth {
              &::before {
                display: none;
              }
            }
          }
          & .depth2 {
            overflow: hidden;
            max-height: 0;
            border-bottom: 1px solid#ddd;
            transition: max-height 0.4s ease;
            & li {
              & a {
                display: block;
                height: 60px;
                line-height: 60px;
                padding-left: 40px;
                font-size: 20px;
                color: #ddd;
                background: #fff;
                &.on {
                  color: ${(props) => props.theme.main};
                  font-weight: bold;
                }
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 960px) {
    & .sidebar {
      /* display: none; */
    }
  }
`;

export default Wrapper;
