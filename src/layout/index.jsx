import React, { useEffect } from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import Footer from "./footer";

import Wrapper from "./styles";
import { Grid } from "@material-ui/core";
const Layout = (props) => {
  const { children } = props;
  useEffect(() => {}, []);
  return (
    <Wrapper>
      <Grid className="sidebar">
        <Sidebar />
      </Grid>
      <Grid className="contents">
        <Grid className="header">
          <Header />
        </Grid>
        <main className="pages">{children}</main>
      </Grid>
    </Wrapper>
  );
};

export default Layout;
