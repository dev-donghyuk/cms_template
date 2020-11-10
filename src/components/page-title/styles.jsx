import styled from "styled-components";

const Wrapper = styled.div`
  padding-bottom: 40px;
  & .page_title {
    &.on {
      padding-top: 60px;
    }
    & .title {
      font-size: 22px;
      font-weight: 500;
      &.btn {
        line-height: 40px;
      }
    }
  }
`;

export default Wrapper;
