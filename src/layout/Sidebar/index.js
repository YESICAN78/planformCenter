/*
 * @Author: sunFulin
 * @Date: 2022-08-04 17:24:03
 * @LastEditTime: 2022-08-17 22:45:19
 */
import React, { memo, useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import EventBus from "../../utils/eventBus";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import "./index.scss";
import { filterRouter } from "./utils";
const { Sider } = Layout;
export default memo(() => {
  const location = useLocation();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  let [activePath, setActivePath] = useState("");
  const onSelect = ({ keyPath }) => {
    let pathList = keyPath.reverse();
    let path = pathList.join("/");
    navigate(path);
  };
  const BreadcrumbFn = (list) => {
    EventBus.emit("BreadcrumbFn", list);
  };
  const getFathersByPathAndName = (path, data) => {
    const arr = [];
    const back = (path, data) => {
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
    back(path, data);
    return arr;
  };
  EventBus.on("handleCollapsed", (val) => {
    setCollapsed(val);
  });
  useEffect(() => {
    if (location) {
      let pathList = location.pathname.split("/").slice(1);
      pathList[0] = `/${pathList[0]}`;
      let pathAnNameList = getFathersByPathAndName(
        pathList[pathList.length - 1],
        filterRouter()
      );
      setActivePath(pathList[pathList.length - 1]);
      BreadcrumbFn(pathAnNameList);
    }
  }, [location]);
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{ backgroundColor: "#3b83e4" }}
    >
      <div className="system_logo">
        {collapsed ? (
          <MenuUnfoldOutlined className="collapsed" />
        ) : (
          <div>PLANFORMCENTER</div>
        )}
      </div>
      {activePath && (
        <Menu
          theme="dark"
          mode="inline"
          defaultOpenKeys={[filterRouter()[0].key]}
          defaultSelectedKeys={activePath}
          items={filterRouter()}
          onSelect={onSelect}
        ></Menu>
      )}
    </Sider>
  );
});
