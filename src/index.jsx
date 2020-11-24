import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import { store } from "./redux/redux";

// IE11의 경우
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
// css
import "./css/reset.css";
import "./css/global.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
