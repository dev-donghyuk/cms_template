import styled from "styled-components";

const Wrapper = styled.div`
  & .login_wrap {
    width: 100%;
    height: 100vh;
    background: ${(props) => props.theme.main} no-repeat center center;
    & .login {
      max-width: 600px;
      width: 100%;
      padding: 60px 80px;
      margin: 0 20px;
      text-align: center;
      border-radius: 16px;
      box-shadow: 0 20px 60px 0 rgba(0, 0, 0, 0.4);
      background: #1a1a1a;
      & h2 {
        font-size: 24px;
        color: #fff;
      }
      & h3 {
        padding: 60px 0 40px;
        font-size: 32px;
        font-weight: bold;
        color: #fff;
      }
      & .input_wrap {
        padding-bottom: 10px;
        & input {
          width: 100%;
          height: 60px;
          line-height: 56px;
          padding: 0 20px;
          font-size: 20px;
          color: #fff;
          background: #484848;
          border: 2px solid #484848;
          border-radius: 12px;
          &::placeholder {
            font-weight: normal;
            color: #fff;
            opacity: 0.5;
          }
        }
        & .errors_msg {
          padding-top: 10px;
          color: #ec5990;
          font-size: 18px;
          font-weight: 500;
          text-align: left;
        }
      }
      & .btn_login {
        margin-top: 40px;
        & > button {
          width: 100%;
          height: 60px;
          line-height: 56px;
          color: #fff;
          font-size: 20px;
          border-radius: 12px;
          border: 2px solid #8d8d8d;
        }
      }
    }
  }
`;

export default Wrapper;
