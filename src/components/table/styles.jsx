import styled from "styled-components";

const Wrapper = styled.div`
  & .table {
    /* 체크박스 */
    & .MuiCheckbox-root {
      width: 24px;
      height: 24px;
    }
    & .MuiIconButton-root {
      color: #ddd;
      &.Mui-checked {
        color: #000;
      }
      &:hover {
        background: none;
      }
    }
    & > div {
      box-shadow: none;
      /* 테이블 바디 */
      & > div {
        border: 1px solid #e1e1e1;
        & tr {
          border-top: 1px solid #e1e1e1;
          &:first-child {
            border-top: none;
          }
          & th {
            height: 50px;
            padding: 0;
            font-family: "Noto Sans KR", sans-serif;
            font-size: 14px;
            font-weight: bold;
            color: #333333;
            text-align: center;
            background: #dddddd;
            & > span {
              position: relative;
            }
          }
          & td {
            height: 50px;
            padding: 0;
            font-family: "Noto Sans KR", sans-serif;
            font-size: 14px !important;
            color: #707070;
            text-align: center;
            border-color: #ddd;
            & span {
            }
          }
        }
      }
    }
  }
`;

export default Wrapper;
