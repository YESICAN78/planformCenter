/*
 * @Author: sunFulin
 * @Date: 2022-08-04 17:24:03
 * @LastEditTime: 2022-08-15 17:32:32
 */
import React, { memo, useState } from "react";
import { Layout, Menu } from "antd";
import EventBus from "../../utils/eventBus";
import { MenuUnfoldOutlined, ClockCircleOutlined } from "@ant-design/icons";
import slideMenu from "./slideMenu";
const { Sider } = Layout;
export default memo(() => {
  const [collapsed, setCollapsed] = useState(false);
  EventBus.on("handleCollapsed", (val) => {
    setCollapsed(val);
  });
  return (
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
        defaultOpenKeys={["systemMgment"]}
        defaultSelectedKeys={["index"]}
        items={[]}
      ></Menu>
    </Sider>
  );
});
