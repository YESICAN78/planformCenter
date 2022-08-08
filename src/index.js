/*
 * @Author: sunFulin
 * @Date: 2022-08-04 13:14:53
 * @LastEditTime: 2022-08-08 17:48:44
 */
import React from "react";
import "antd/dist/antd.css";
import ReactDOM from "react-dom/client";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
/**
 * React.StrictMode 严格模式下 useEffect 回执行两次
 * */
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
