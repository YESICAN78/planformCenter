/*
 * @Author: sunFulin
 * @Date: 2022-08-04 17:24:03
 * @LastEditTime: 2022-08-05 15:18:44
 */
import React, { memo, useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router";
import EventBus from "../../utils/eventBus";
import {
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import routers from "../../router/index";
import { useNavigate } from "react-router-dom";
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;
export default memo(() => {
  const [collapsed, setCollapsed] = useState(false);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  /**
   * 将菜单项配置转换为对应的MenuItem组件
   *
   * @param obj sidebar菜单配置项
   * @param paths 父级目录, array
   * @returns {XML}
   */
  const transFormMenuItem = (obj, paths, isLevel1) => {
    const parentPath = paths.join("/"); // 将各级父目录组合成完整的路径
  };
  const routerHandlClick = (params) => {
    const { key } = params;
    navigate.push(key);
  };
  useEffect(() => {
    if (routers) {
      let list = routers.map((item) => {
        return {
          key: item.path,
          icon: item.icon,
          label: item.title,
        };
      });
      setItems(list);
    }
  }, [routers]);
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
        defaultSelectedKeys={["2"]}
        items={items}
        onClick={routerHandlClick}
      />
    </Sider>
  );
});
