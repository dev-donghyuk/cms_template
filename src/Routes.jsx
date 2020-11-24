import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  useHistory,
} from "react-router-dom";

import Layout from "./layout";
import { useSelector, useDispatch } from "react-redux";
// 로그인
import Login from "./pages/login/";
// 회원관리
import Temp from "./pages/temp/temp/index";
import TempanagementDetail from "./pages/temp/temp/detail";

const Routes = () => {
  const reducer = useSelector((state) => state.reducer);
  const history = useHistory();
  const dispatch = useDispatch();

  let token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      dispatch({
        type: "SET_IS_LOGIN",
        payload: true,
      });
    } else {
    }
  }, [reducer.isLogin]);

  useEffect(() => {
    if (token === null) {
      dispatch({
        type: "SET_IS_LOGIN",
        payload: false,
      });
    }
  }, []);
  return (
    <>
      {reducer.isLogin ? (
        <BrowserRouter>
          <Layout>
            <Switch>
              {/* temp */}
              <Route path="/temp" exact component={Temp} />
              <Route path="/temp/detail/:id" component={TempanagementDetail} />
              {/* temp1 */}
              <Route path="/temp1/page1" component={Temp} />
              <Route path="/temp1/page2" component={Temp} />
              <Redirect path="/temp1" exact to="/temp1/page1" />
              {/* temp2 */}
              <Route path="/temp2/page1" component={Temp} />
              <Route path="/temp2/page2" component={Temp} />
              <Redirect path="/temp2" exact to="/temp2/page1" />
              {/* temp3 */}
              <Route path="/temp3/page1" component={Temp} />
              <Route path="/temp3/page2" component={Temp} />
              <Redirect path="/temp3" exact to="/temp3/page1" />
              {/* temp4 */}
              <Route path="/temp4/page1" component={Temp} />
              <Route path="/temp4/page2" component={Temp} />
              <Redirect path="/temp4" exact to="/temp4/page1" />
              {/* temp5 */}
              <Route path="/temp5/page1" component={Temp} />
              <Route path="/temp5/page2" component={Temp} />
              <Redirect path="/temp5" exact to="/temp5/page1" />
              {/* temp6 */}
              <Route path="/temp6/page1" component={Temp} />
              <Route path="/temp6/page2" component={Temp} />
              <Redirect path="/temp6" exact to="/temp6/page1" />
              {/* temp7 */}
              <Route path="/temp7/page1" component={Temp} />
              <Route path="/temp7/page2" component={Temp} />
              <Redirect path="/temp7" exact to="/temp7/page1" />
              {/*  */}
              <Redirect path="/" exact to="/temp" />
            </Switch>
          </Layout>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Switch>
            {/* 로그인 */}
            <Route path="/" exact component={Login} />
            <Redirect exact to="/" />
          </Switch>
        </BrowserRouter>
      )}
    </>
  );
};

export default Routes;
