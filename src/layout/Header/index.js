/*
 * @Author: sunFulin
 * @Date: 2022-08-04 17:23:59
 * @LastEditTime: 2022-08-05 13:48:53
 */
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import React, { memo, useState, useEffect } from "react";
import { Layout } from "antd";
import "./index.scss";
import EventBus from "../../utils/eventBus";
const { Header } = Layout;
export default memo(() => {
  const [collapsed, setCollapsed] = useState(false);
  const collapsedChange = () => {
    setCollapsed(!collapsed);
  };
  useEffect(() => {
    EventBus.emit("handleCollapsed", collapsed);
  }, [collapsed]);
  return (
    <Header
      className="site-layout-background"
      style={{
        padding: "0 10px",
      }}
    >
      <div>
        <div className="collapsedBox" onClick={collapsedChange}>
          {collapsed ? (
            <MenuUnfoldOutlined className="collapsed" />
          ) : (
            <MenuFoldOutlined className="collapsed" />
          )}
        </div>
      </div>
    </Header>
  );
});
