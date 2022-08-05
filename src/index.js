/*
 * @Author: sunFulin
 * @Date: 2022-08-04 13:14:53
 * @LastEditTime: 2022-08-05 15:30:52
 */
import React from "react";
import "antd/dist/antd.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inbox from "./view/user";
const routes = (
  <Router>
    <Routes>
      <Route path="/inbox" component={Inbox} />
    </Routes>
  </Router>
);
const root = ReactDOM.createRoot(routes, document.getElementById("root"));
/**
 * React.StrictMode 严格模式下 useEffect 回执行两次
 * */
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
