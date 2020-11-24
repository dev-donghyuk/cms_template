import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";

import Wrapper from "./styles";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const reducer = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  const history = useHistory();

  const LogoutFunction = async () => {
    try {
      // let data = await apiObject.logoutApi();
      // console.log(data);
      dispatch({
        type: "SET_IS_LOGIN",
        payload: false,
      });
      localStorage.removeItem("token");
      history.push("/");
    } catch (e) {
      console.log({ e });
    }
  };

  return (
    <Wrapper>
      <Grid container justify="flex-end" className="header">
        <Grid item className="util">
          <span>관리자</span>
          <button
            type="button"
            className="btn_logout"
            onClick={() => {
              LogoutFunction();
            }}
          >
            Logout
          </button>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Header;
