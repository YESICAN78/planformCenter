/*
 * @Author: sunFulin
 * @Date: 2022-08-04 13:14:53
 * @LastEditTime: 2022-08-07 00:08:19
 */
import { Layout } from "antd";
import React, { memo } from "react";
import { Breadcrumb, Header, Sidebar, AppMain } from "./layout";
import "./App.scss";

export default memo(() => {
  return (
    <div className="App">
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
