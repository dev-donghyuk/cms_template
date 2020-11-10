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
  /* 픽커 메인색 */
  & .MuiPickersToolbar-toolbar{
    background:${(props) => props.theme.main}!important;
  }
  /* 픽커 선택색 */
  & .MuiPickersDay-daySelected{
    background:${(props) => props.theme.main}!important;
  }
  /* 픽커 선택 년도색 */
  & .MuiPickersYear-yearSelected{
    color:${(props) => props.theme.main}!important;
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
