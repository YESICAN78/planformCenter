/*
 * @Author: sunFulin
 * @Date: 2022-08-04 17:24:03
 * @LastEditTime: 2022-08-22 17:42:53
 */
import React, { memo, useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import {
  setSildBar,
  setMenLeve3,
  setClickAllPath,
} from "../../store/actionCreators";
import store from "../../store";
import "./index.scss";
import { getMenuLeve3, getFathersByPathAndName } from "./utils";
const { Sider } = Layout;
export default memo(() => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  let [menu, setMenu] = useState([]);
  let [activePath, setActivePath] = useState("");
  const onSelect = ({ keyPath }) => {
    let pathList = keyPath.reverse();
    let path = pathList.join("/");
    let leve3Nav = getMenuLeve3(pathList[pathList.length - 1]);
    console.log(leve3Nav);
    let action = setMenLeve3(leve3Nav);
    if (leve3Nav.length > 0) {
      store.dispatch(action);
    } else {
      store.dispatch(action);
    }
    let clickAllPath = getFathersByPathAndName(pathList[pathList.length - 1]);
    const action1 = setClickAllPath(clickAllPath);
    store.dispatch(action1);
    navigate(path);
  };
  const filterRouter = (routers) => {
    return routers.map((rt) => {
      return {
        label: rt.name,
        key: rt.path,
        icon: rt.icon || "",
        children: rt.children.map((child) => {
          return {
            label: child.name,
            key: child.path,
            icon: child.icon || "",
          };
        }),
      };
    });
  };
  useEffect(() => {
    const action = setSildBar();
    store.dispatch(action);
    const { sidebarRouters } = store.getState().routerModule;
    setMenu(filterRouter(sidebarRouters));
  }, []);
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
        {menu.length > 0 && (
          <Menu
            mode="inline"
            defaultOpenKeys={[menu[0].key]}
            defaultSelectedKeys={activePath}
            items={menu}
            onSelect={onSelect}
          ></Menu>
        )}
      </Sider>
    </div>
  );
});
