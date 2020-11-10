import React from "react";

import Wrapper from "./styles";
import { Grid } from "@material-ui/core";

const PageTitle = (props) => {
  const { title, children, type, className } = props;
  return (
    <Wrapper>
      <Grid
        container
        justify="space-between"
        className={type === "nth" ? "page_title on" : "page_title"}
      >
        <Grid item className={`title ${className}`}>
          {title}
        </Grid>
        {children}
      </Grid>
    </Wrapper>
  );
};

export default PageTitle;
