/*
 * @Author: sunFulin
 * @Date: 2022-08-04 17:24:03
 * @LastEditTime: 2022-08-18 18:10:52
 */
import React, { memo, useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import EventBus from "../../utils/eventBus";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import "./index.scss";
import { filterRouter, getThirdLevelMenu3 } from "./utils";
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
      EventBus.emit(
        "getThirdLeve3Fn",
        getThirdLevelMenu3(pathList[pathList.length - 1])
      );
      setActivePath(pathList[pathList.length - 1]);
      BreadcrumbFn(pathAnNameList);
    }
  }, [location]);
  return (
    <div className="SidebarBox">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="system_logo">
          {collapsed ? (
            <MenuUnfoldOutlined className="collapsed" />
          ) : (
            <div>PLANFORMCENTER</div>
          )}
        </div>
        {activePath && (
          <Menu
            mode="inline"
            defaultOpenKeys={[filterRouter()[0].key]}
            defaultSelectedKeys={activePath}
            items={filterRouter()}
            onSelect={onSelect}
          ></Menu>
        )}
      </Sider>
    </div>
  );
});
