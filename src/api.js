import axios from "axios";

// 통신관련

let loginToken = localStorage.getItem("token");
axios.defaults.withCredentials = true;

let api = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? "" : "",
  // process.env.NODE_ENV === "production" ? "http://3.34.133.28:3001" : "",
  headers: {
    Authorization: loginToken,
    // "Access-Control-Allow-Origin": "*",
  },
});

// ===========post

export const playjokerApi = {
  // login
  loginApi: (email, user_pass, pushtoken) =>
    api.post("/playjokerforweb/PLAYJOKERAPI_GET_TOKEN2", {
      email: email,
      user_pass: user_pass,
      pushtoken: pushtoken,
    }),
};
