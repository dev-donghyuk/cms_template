import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";

import Wrapper from "./styles";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const reducer = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <Wrapper>
      <Grid container justify="flex-end" className="header">
        <Grid item className="util">
          <span>관리자</span>
          <button
            type="button"
            className="btn_logout"
            onClick={() => {
              dispatch({
                type: "SET_IS_LOGIN",
                payload: false,
              });
              history.push("/");
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
