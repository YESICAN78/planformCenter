/*
 * @Author: sunFulin
 * @Date: 2022-08-04 17:23:59
 * @LastEditTime: 2022-08-05 11:19:51
 */
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import React, { memo, useState } from "react";
import { Layout } from "antd";
import "./index.scss";
const { Header } = Layout;
export default memo(() => {
  const [collapsed, setCollapsed] = useState(false);
  return (
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
  );
});
