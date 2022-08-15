/*
 * @Author: sunFulin
 * @Date: 2022-08-04 13:14:53
 * @LastEditTime: 2022-08-15 16:52:56
 */
import React from "react";
import "antd/dist/antd.min.css";
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
