import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Layout from "./layout";
import { useSelector } from "react-redux";

// 로그인
import Login from "./pages/login/";
// 회원관리
import Temp from "./pages/temp/temp/index";
import TempanagementDetail from "./pages/temp/temp/detail";

const Routes = () => {
  const reducer = useSelector((state) => state.reducer);
  return (
    <>
      {reducer.isLogin ? (
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route path="/temp" exact component={Temp} />
              <Route
                path="/temp/detail/:id"
                exact
                component={TempanagementDetail}
              />
              <Route path="/temp1" exact component={Temp} />
              <Route path="/temp1/page" exact component={Temp} />
              <Route path="/temp2" exact component={Temp} />
              <Route path="/temp2/page" exact component={Temp} />
              <Route path="/temp3" exact component={Temp} />
              <Route path="/temp3/page" exact component={Temp} />
              <Route path="/temp4" exact component={Temp} />
              <Route path="/temp4/page" exact component={Temp} />
              <Route path="/temp5" exact component={Temp} />
              <Route path="/temp5/page" exact component={Temp} />
              <Route path="/temp6" exact component={Temp} />
              <Route path="/temp6/page" exact component={Temp} />
              <Route path="/temp7" exact component={Temp} />
              <Route path="/temp7/page" exact component={Temp} />

              <Redirect exact to="/temp" />
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
