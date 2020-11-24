import React, { useState } from "react";

import Wrapper from "./styles";
import { Grid } from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DayJsUtils from "@date-io/dayjs";

export const Picker = (props) => {
  const { value, onChange } = props;
  return (
    <Wrapper>
      <MuiPickersUtilsProvider utils={DayJsUtils}>
        <DatePicker
          variant="inline"
          value={value}
          onChange={onChange}
          animateYearScrolling
          format="YYYY.MM.DD"
        />
      </MuiPickersUtilsProvider>
    </Wrapper>
  );
};
