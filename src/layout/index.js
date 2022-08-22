/*
 * @Author: sunFulin
 * @Date: 2022-08-04 13:45:52
 * @LastEditTime: 2022-08-22 17:13:25
 */
import React, { memo, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import AppMain from "./AppMain";
import Breadcrumb from "./Breadcrumb";
import Level3Nav from "./Level_3_nav";
import { Layout } from "antd";
import { useLocation } from "react-router-dom";
import store from "../store";
import "./index.scss";
export default memo(() => {
  let [menuLeve3, setMenuLeve3] = useState([]);
  useEffect(() => {
    setMenuLeve3(store.getState().routerModule.menLeve3);
    // 监听redux state 数据的变化回调
    store.subscribe(() => {
      setMenuLeve3(store.getState().routerModule.menLeve3);
    });
  }, []);
  return (
    <div className="flow_layout">
      <Layout className="app-main">
        <Sidebar />
        <Layout className="site-layout">
          <Header />
          <Breadcrumb />
          <div style={{ display: "flex", height: "100%" }}>
            {menuLeve3.length > 0 && <Level3Nav menu={menuLeve3} />}
            <AppMain />
          </div>
        </Layout>
      </Layout>
    </div>
  );
});
