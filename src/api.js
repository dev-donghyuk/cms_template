import axios from "axios";
import { store } from "./redux/redux";

// 통신관련

let token = localStorage.getItem("token");

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.headers.common.Authorization = token;
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
// axios.defaults.timeout = 5000;
// axios.defaults.withCredentials = true;

// api base

axios.interceptors.request.use(
  function (config) {
    // 요청 바로 직전
    store.dispatch({
      type: "SET_IS_LOADING",
      payload: true,
    });
    return config;
  },
  function (error) {
    // 요청 에러 처리를 작성합니다.
    store.dispatch({
      type: "SET_IS_LOADING",
      payload: false,
    });
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    /* 200처리 */
    store.dispatch({
      type: "SET_IS_LOADING",
      payload: false,
    });
    return response;
  },

  function (error) {
    /*200 외 처리*/
    store.dispatch({
      type: "SET_IS_LOADING",
      payload: false,
    });
    return Promise.reject(error);
  }
);

export const apiObject = {
  // 로그인
  loginApi: ({ user_email, user_pass }) =>
    axios.post("/", {
      user_email: user_email,
      user_pass: user_pass,
    }),
  // 회원정보
  memberListApi: ({ page, range, search_st_date, search_end_date }) =>
    axios.get("/", {
      params: {
        page: page,
        range: range,
        search_st_date: search_st_date,
        search_end_date: search_end_date,
      },
    }),
};
