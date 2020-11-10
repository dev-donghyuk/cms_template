import React, { useState } from "react";

import Wrapper from "./styles";
import { Grid } from "@material-ui/core";

const useTabs = (TabValue, Content) => {
  const [currentIndex, setCurrentIndex] = useState(TabValue);
  return {
    currentItem: Content[currentIndex],
    changeItem: setCurrentIndex,
  };
};

const Tabs = (props) => {
  const { data, setTabValue } = props;
  const { currentItem, changeItem } = useTabs(0, data);

  return (
    <Wrapper>
      {data.map((x, index) => {
        return (
          <Grid
            className={currentItem.value === x.value ? "tab on" : "tab"}
            key={index}
            onClick={() => {
              changeItem(index);
              setTabValue(x.value);
            }}
          >
            {x.value}
          </Grid>
        );
      })}
    </Wrapper>
  );
};

export default Tabs;
