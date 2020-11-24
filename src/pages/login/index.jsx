import React, { useEffect, useState } from "react";

import { Grid, Checkbox } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import Wrapper from "./styles";
import { apiObject } from "./../../api";
import { SHA256 } from "./../../common";

const LoginComponent = () => {
  const { register, setValue, handleSubmit, errors } = useForm();

  const reducer = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  const history = useHistory();

  // let user_email = localStorage.getItem("user_email");
  // let user_email_save = localStorage.getItem("user_email_save");

  // const [idSaveSw, setIdSaveSw] = useState(user_email_save ? true : false);

  const LoginFunction = async (result) => {
    console.log(result);
    try {
      // let data = await apiObject.loginApi({
      //   admin_pass: SHA256(result.user_password),
      //   admin_email: result.user_email,
      // });
      // // 아이디 저장 체크
      // if (idSaveSw) {
      //   localStorage.setItem("user_email", result.user_email);
      //   localStorage.setItem("user_email_save", true);
      // } else {
      //   localStorage.removeItem("user_email");
      //   localStorage.removeItem("user_email_save");
      // }
      //
      // 로그인 성공처리
      // localStorage.setItem("token", data.data.token);
      localStorage.setItem("token", "testToken");
      dispatch({
        type: "SET_IS_LOGIN",
        payload: true,
      });
    } catch (e) {
      if (e.response.status === 406) {
        alert("관리자 정보가 일치하지않습니다.");
      }
    }
  };

  useEffect(() => {
    // if (user_email) {
    // setValue("user_email", user_email);
    // }
  }, []);

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
            <input
              type="text"
              name="user_email"
              placeholder="이메일"
              ref={register({
                required: true,
                minLength: 1,
              })}
              className="id"
            />
            {errors.user_email && (
              <p className="errors_msg">아이디를 확인해주세요.</p>
            )}
          </Grid>
          <Grid className="input_wrap">
            <input
              type="password"
              name="user_password"
              placeholder="비밀번호"
              ref={register({
                required: true,
                minLength: 1,
              })}
              className="email"
            />
            {errors.user_password && (
              <p className="errors_msg">비밀번호를 확인해주세요.</p>
            )}
          </Grid>
          {/*  */}
          <Grid className="btn_login" onClick={handleSubmit(LoginFunction)}>
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
