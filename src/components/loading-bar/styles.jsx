import styled from "styled-components";

const Wrapper = styled.div`
  & .progress_bar {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background: #fff;
    z-index: 400;
    & > div {
      background: ${(props) => props.theme.main};
    }
  }
`;

export default Wrapper;
