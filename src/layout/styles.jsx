import styled from "styled-components";

const Wrapper = styled.div`
  min-width: 1500px;
  position: relative;
  & .sidebar {
    float: left;
  }
  & .contents {
    float: left;
    width: calc(100% - 350px);
    & .pages {
      padding: 40px;
      min-height: 1000px;
      border-left: 1px solid #ccc;
    }
  }
  @media (max-width: 960px) {
    & .contents {
      /* width: calc(100%); */
    }
  }
`;

export default Wrapper;
