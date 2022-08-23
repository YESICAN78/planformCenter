/*
 * @Author: sunFulin
 * @Date: 2022-08-18 16:02:30
 * @LastEditTime: 2022-08-23 16:46:03
 */
import React, { useState, memo, useEffect } from "react";
import { DoubleRightOutlined, DoubleLeftOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { getFathersByPathAndName, getMenuLeve3 } from "../Sidebar/utils";
import store from "../../store";
import { setClickAllPath } from "../../store/actionCreators";
import { Menu } from "antd";
import "./index.scss";
export default memo((props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [collapsed, setcollapsed] = useState(false);
  let [activePath, setActivePath] = useState("");
  const handleIocnClick = () => {
    setcollapsed(!collapsed);
  };
  const onSelect = ({ keyPath }) => {
    let list = getFathersByPathAndName(keyPath[0]);
    let path = "";
    (list || []).map((item, index) => {
      path += index > 0 ? "/" + item.path : "" + item.path;
    });
    const action = setClickAllPath(list);
    store.dispatch(action);
    navigate(path);
  };
  useEffect(() => {
    if (location) {
      let pathList = location.pathname.split("/").slice(1);
      pathList[0] = `/${pathList[0]}`;
      let list = getFathersByPathAndName(pathList[pathList.length - 1]);
      const action = setClickAllPath(list);
      store.dispatch(action);
      // let leve3Nav = getMenuLeve3(pathList[pathList.length - 1]);
      // console.log(leve3Nav)
      // let path = activeOpenList.reduce((prve, item, index) => {
      //   return (prve += (index > 0 ? "" : "/") + item.path);
      // }, "");
      // console.log(path);
    }
  }, [location]);

  return (
    <div
      className={`thirdLevelMenuBox ${
        collapsed ? "slide-left" : "slide-right"
      }`}
    >
      <Menu
        mode="inline"
        style={{
          width: collapsed ? 0 : 150,
          overflow: "hidden",
          transition: "all 0.5s",
        }}
        onSelect={onSelect}
        defaultSelectedKeys={activePath}
        items={store.getState().routerModule.menLeve3}
      />
      <div className="thirdLevelMenuBoxIcon">
        {collapsed ? (
          <DoubleRightOutlined onClick={handleIocnClick} />
        ) : (
          <DoubleLeftOutlined onClick={handleIocnClick} />
        )}
      </div>
    </div>
  );
});
