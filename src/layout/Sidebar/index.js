/*
 * @Author: sunFulin
 * @Date: 2022-08-04 17:24:03
 * @LastEditTime: 2022-08-08 17:15:41
 */
import React, { memo, useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import EventBus from "../../utils/eventBus";
import { MenuUnfoldOutlined, ClockCircleOutlined } from "@ant-design/icons";
import slideMenu from "./slideMenu";
import { menus as menusConfig } from "../../router/index";
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
        items={slideMenu(menusConfig)}
      ></Menu>
    </Sider>
  );
});
