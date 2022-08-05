/*
 * @Author: sunFulin
 * @Date: 2022-08-04 13:14:53
 * @LastEditTime: 2022-08-05 11:21:07
 */
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState, memo } from "react";
import { Breadcrumb, Header } from "./layout";
import "./App.scss";

const { Sider, Content } = Layout;
export default memo(() => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="App">
      <Layout className="app-main">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">
            {collapsed ? (
              <MenuUnfoldOutlined className="collapsed" />
            ) : (
              <div>PLANFORMCENTER</div>
            )}
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "nav 1",
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: "nav 2",
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: "nav 3",
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: "0 10px",
            }}
          >
            <div onClick={() => setCollapsed(!collapsed)}>
              {collapsed ? (
                <MenuUnfoldOutlined className="collapsed" />
              ) : (
                <MenuFoldOutlined className="collapsed" />
              )}
            </div>
          </Header>
          <Breadcrumb />
          <Content className="content">Content</Content>
        </Layout>
      </Layout>
    </div>
  );
});
