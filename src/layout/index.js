/*
 * @Author: sunFulin
 * @Date: 2022-08-04 13:45:52
 * @LastEditTime: 2022-08-17 09:12:21
 */
import Sidebar from "./Sidebar";
import Header from "./Header";
import AppMain from "./AppMain";
import Breadcrumb from "./Breadcrumb";
import { Layout } from "antd";
import React, { memo } from "react";
import "./index.scss";
export default memo(() => {
  return (
    <div className="flow_layout">
      <Layout className="app-main">
        <Sidebar />
        <Layout className="site-layout">
          <Header />
          <Breadcrumb />
          <AppMain />
        </Layout>
      </Layout>
    </div>
  );
});
