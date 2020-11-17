import React, { useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Routes from "./Routes";
import { useDispatch, useSelector } from "react-redux";

const GlobalStyle = createGlobalStyle`
  body {
    overflow:${(props) => `${props.overflow}`};
  }
`;

let token = localStorage.getItem("token");

const App = () => {
  const reducer = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle overflow={reducer.modalOverflow ? "hidden" : "visible"} />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
