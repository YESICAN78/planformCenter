/*
 * @Author: sunFulin
 * @Date: 2022-08-04 13:45:52
 * @LastEditTime: 2022-08-15 17:37:43
 */
import Sidebar from "./Sidebar";
import Header from "./Header";
import AppMain from "./AppMain";
import Breadcrumb from "./Breadcrumb";
import { Layout, Menu, Breadcrumb } from "antd";
import React, { memo } from "react";
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
