/*
 * @Author: sunFulin
 * @Date: 2022-08-04 17:24:03
 * @LastEditTime: 2022-08-23 14:31:22
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
  const location = useLocation();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [openKey, setOpenKey] = useState([]);
  let [menu, setMenu] = useState([]);
  let [activePath, setActivePath] = useState("org");
  // 查找被点击菜单路径
  const navClickPath = (path) => {
    return getFathersByPathAndName(path);
  };
  const onSelect = ({ keyPath }) => {
    let pathList = keyPath.reverse();
    let path = pathList.join("/");
    let leve3Nav = getMenuLeve3(pathList[pathList.length - 1]);
    let action = setMenLeve3(leve3Nav);
    if (leve3Nav.length > 0) {
      store.dispatch(action);
    } else {
      store.dispatch(action);
    }
    let clickAllPath = navClickPath(pathList[pathList.length - 1]);
    const action1 = setClickAllPath(clickAllPath);
    store.dispatch(action1);
    navigate(path);
    setOpenKey([clickAllPath[0].path]);
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
    let pathLIst = location.pathname.split("/");
    const action = setSildBar();
    store.dispatch(action);
    const { sidebarRouters } = store.getState().routerModule;
    setMenu(filterRouter(sidebarRouters));
    setActivePath(pathLIst[pathLIst.length - 1]);
    let activeOpenList = navClickPath(pathLIst[pathLIst.length - 1]);
    setOpenKey([activeOpenList[0].path]);
    // let leve3Nav = getMenuLeve3(pathLIst[pathLIst.length - 1]);
    onSelect({
      keyPath: [pathLIst[pathLIst.length - 1]],
    });
  }, []);
  useEffect(() => {
    store.subscribe(() => {
      setCollapsed(store.getState().routerModule.collapsed);
    });
  }, [collapsed]);
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
            defaultOpenKeys={openKey}
            defaultSelectedKeys={activePath}
            items={menu}
            onSelect={onSelect}
          ></Menu>
        )}
      </Sider>
    </div>
  );
});
