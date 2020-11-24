import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  * {
    line-height: 1.3;
  }
  & .tr {
    & > div {
      padding: 20px;
      border-bottom: 1px solid #fff;
      &.td_1 {
        background: #ebebeb;
        & > div {
          height: 100%;
          & > div {
            color: #363636;
          }
        }
      }
      &.td_2 {
        background: #fff;
        & > div {
          height: 100%;
          & > div {
            width: 100%;
          }
        }
      }
    }
  }
`;

export default Wrapper;
