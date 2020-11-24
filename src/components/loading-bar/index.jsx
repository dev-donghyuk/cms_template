import React from "react";

import Wrapper from "./styles";

import LinearProgress from "@material-ui/core/LinearProgress";

const LoadingBar = () => {
  return (
    <Wrapper>
      <LinearProgress className="progress_bar" />
    </Wrapper>
  );
};

export default LoadingBar;
