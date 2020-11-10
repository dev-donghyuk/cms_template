import styled from "styled-components";

const Wrapper = styled.div`
  & .tab {
    display: inline-block;
    margin-left: 30px;
    color: #979797;
    font-weight: 500;
    transition: all 0.2s;
    cursor: pointer;
    &:first-child {
      margin-left: 0;
    }
    &.on {
      color: #363636;
      font-weight: bold;
    }
  }
`;

export default Wrapper;
