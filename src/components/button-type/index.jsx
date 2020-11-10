import React from "react";

import Wrapper from "./styles";

import { Grid } from "@material-ui/core";

const ButtonType = (props) => {
  const { onClick, className, title } = props;
  return (
    <Wrapper>
      <Grid item className={className} onClick={onClick}>
        {title}
      </Grid>
    </Wrapper>
  );
};

export default ButtonType;
