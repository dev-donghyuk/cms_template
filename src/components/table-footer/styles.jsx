import styled from "styled-components";

const Wrapper = styled.div`
  & .table_footer {
    margin-top: 30px;
    position: relative;
    width: 100%;
    height: 32px;
    & .table_pagination {
      position: absolute;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
      & > nav {
        & ul {
          & li {
            & button {
              color: rgba(0, 0, 0, 0.65);
              border-radius: 4px;
              font-weight: bold;

              /* 선택된 페이지 */
              &.Mui-selected {
                color: ${(props) => props.theme.main};
                background: none;
                border-radius: 4px;
              }
              & span {
              }
              &:hover {
                background: none;
              }
            }
          }
        }
      }
    }
    & .search_box {
      position: relative;
      width: 200px;
      & .search_icon {
        position: absolute;
        left: 4px;
        top: 4px;
      }
      & input {
        width: 100%;
        height: 32px;
        line-height: 32px;
        border: 1px solid #d9d9d9;
        padding-left: 28px;
      }
    }
    & .content {
      position: absolute;
      left: 0;
      top: 0;
      & .btn_delete {
        padding: 10px 36px;
        color: #fff;
        font-weight: 500;
        border-radius: 4px;
        background: ${(props) => props.theme.main};
      }
    }
  }
`;

export default Wrapper;
