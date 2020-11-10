import styled from 'styled-components';

const Wrapper = styled.div`
  & > div {
    width: 80px;
    height: 40px;
    line-height: 38px;
    text-align: center;
    color: #666;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
    &.blue {
      margin-left: 10px;
      color: #fff;
      border: 1px solid ${(props) => props.theme.main};
      background: ${(props) => props.theme.main};
      &.add {
        margin-left: 0;
        margin-right: auto;
      }
    }
  }
`;

export default Wrapper;
