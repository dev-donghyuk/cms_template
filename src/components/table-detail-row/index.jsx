import React, { useState } from "react";

import Wrapper from "./styles";
import { Grid } from "@material-ui/core";

export const TableDetailRowImg = (props) => {
  const { title_1, children } = props;
  return (
    <Wrapper>
      <Grid container direction="row" className="table">
        <Grid container item xs={12} className="tr">
          <Grid item xs={2} className="td_1 img">
            <Grid container alignItems="center">
              <Grid item>{title_1}</Grid>
            </Grid>
          </Grid>
          <Grid item xs={10} className="td_2 img">
            <Grid container alignItems="center">
              <Grid item>{children}</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export const TableDetailRowHalf = (props) => {
  const { title_1, title_2, text_1, text_2 } = props;
  return (
    <Wrapper>
      <Grid container direction="row" className="table">
        <Grid container item xs={6} className="tr">
          <Grid item xs={4} className="td_1">
            <Grid container alignItems="center">
              <Grid item>{title_1}</Grid>
            </Grid>
          </Grid>
          <Grid item xs={8} className="td_2">
            <Grid container alignItems="center">
              <Grid item>{text_1}</Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={6} className="tr">
          <Grid item xs={4} className="td_1">
            <Grid container alignItems="center">
              <Grid item>{title_2}</Grid>
            </Grid>
          </Grid>
          <Grid item xs={8} className="td_2">
            <Grid container alignItems="center">
              <Grid item>{text_2}</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export const TableDetailRow = (props) => {
  const { title_1, text_1 } = props;
  return (
    <Wrapper>
      <Grid container direction="row" className="table">
        <Grid container item xs={12} className="tr">
          <Grid item xs={2} className="td_1">
            <Grid container alignItems="center">
              <Grid item>{title_1}</Grid>
            </Grid>
          </Grid>
          <Grid item xs={10} className="td_2">
            <Grid container alignItems="center">
              <Grid item>{text_1}</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Wrapper>
  );
};
