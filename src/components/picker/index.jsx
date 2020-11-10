import React, { useState } from "react";

import Wrapper from "./styles";
import { Grid } from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export const Picker = (props) => {
  const { value, onChange } = props;
  return (
    <Wrapper>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          variant="inline"
          value={value}
          format="yyyy년 MM월 dd일"
          onChange={onChange}
          animateYearScrolling
        />
      </MuiPickersUtilsProvider>
    </Wrapper>
  );
};
