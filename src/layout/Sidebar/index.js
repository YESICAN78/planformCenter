/*
 * @Author: sunFulin
 * @Date: 2022-08-04 17:24:03
 * @LastEditTime: 2022-08-17 17:48:45
 */
import React, { memo, useState } from "react";
import { Layout, Menu } from "antd";
import EventBus from "../../utils/eventBus";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import { filterRouter } from "./utils";
const { Sider } = Layout;
export default memo(() => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const onSelect = ({ keyPath }) => {
    console.log();
    let path = keyPath.reverse().join("/");

    let pathAnNameList = keyPath.map((path) => {
      return getFathersByPathAndName(path, filterRouter());
    });
    console.log(pathAnNameList);
    navigate(path);
  };
  const getFathersByPathAndName = (path, data) => {
    const arr = [];
    const back = () => {
      for (let i = 0, length = data.length; i < length; i++) {
        const node = data[i];
        if (node.key === path) {
          arr.unshift({
            path: node.key,
            name: node.label,
          });
          return true;
        } else {
          if (node.children && node.children.length) {
            if (back(path, node.children)) {
              arr.unshift({
                path: node.key,
                name: node.label,
              });
              return true;
            }
          }
        }
      }
      return false;
    };
    back();
    console.log(arr)
    return arr;
  };
  EventBus.on("handleCollapsed", (val) => {
    setCollapsed(val);
  });
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="system_logo">
        {collapsed ? (
          <MenuUnfoldOutlined className="collapsed" />
        ) : (
          <div>PLANFORMCENTER</div>
        )}
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultOpenKeys={[filterRouter()[0].key]}
        defaultSelectedKeys={filterRouter()[0].children[0].key}
        items={filterRouter()}
        onSelect={onSelect}
      ></Menu>
    </Sider>
  );
});
