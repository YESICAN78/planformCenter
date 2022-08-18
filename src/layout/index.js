/*
 * @Author: sunFulin
 * @Date: 2022-08-04 13:45:52
 * @LastEditTime: 2022-08-18 18:15:36
 */
import React, { memo, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import AppMain from "./AppMain";
import Breadcrumb from "./Breadcrumb";
import Level3Nav from "./Level_3_nav";
import { Layout } from "antd";
import { useLocation } from "react-router-dom";
import EventBus from "../utils/eventBus";
import "./index.scss";
export default memo(() => {
  const location = useLocation();
  let [showLeve3, setshowLeve3] = useState(false);
  EventBus.on("getThirdLeve3Fn", (data) => {
    console.log(location.pathname);
    if (location.pathname.split("/").length < 4) {
      setshowLeve3(false);
    }
    if (data.length > 0) {
      setshowLeve3(true);
    }
  });
  const leve3Change = (val) => {};
  return (
    <div className="flow_layout">
      <Layout className="app-main">
        <Sidebar />
        <Layout className="site-layout">
          <Header />
          <Breadcrumb />
          <div style={{ display: "flex", height: "100%" }}>
            {showLeve3 && <Level3Nav onChange={leve3Change} />}
            <AppMain />
          </div>
        </Layout>
      </Layout>
    </div>
  );
});
