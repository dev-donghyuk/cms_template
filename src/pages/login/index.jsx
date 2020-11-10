import React from "react";

import { Grid, Checkbox } from "@material-ui/core";
import Wrapper from "./styles";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const LoginComponent = () => {
  const reducer = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Wrapper>
      <Grid
        container
        justify="center"
        alignItems="center"
        className="login_wrap"
      >
        <Grid item className="login">
          {/*  */}
          <h2>로고</h2>
          {/*  */}
          <h3>Welcome, Admin</h3>
          {/*  */}
          <Grid className="input_wrap">
            <input type="text" placeholder="아이디" className="id" />
          </Grid>
          <Grid className="input_wrap">
            <input type="text" placeholder="이메일 주소" className="email" />
          </Grid>
          {/*  */}
          <Grid
            className="btn_login"
            onClick={() => {
              dispatch({
                type: "SET_IS_LOGIN",
                payload: true,
              });
              history.push("/member-management");
            }}
          >
            <button>다음</button>
          </Grid>
          {/*  */}
        </Grid>
      </Grid>
    </Wrapper>
  );
};

const Login = () => {
  return (
    <>
      <LoginComponent />
    </>
  );
};

export default Login;
