/*
 * @Author: sunFulin
 * @Date: 2022-08-04 17:23:59
 * @LastEditTime: 2022-08-23 11:14:27
 */
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import React, { memo, useState, useEffect } from "react";
import { setCollapsed } from "../../store/actionCreators";
import store from "../../store";
import { Layout } from "antd";
import "./index.scss";
const { Header } = Layout;
export default memo(() => {
  const [open, setOpen] = useState(false);
  const collapsedChange = () => {
    setOpen(!open);
  };
  useEffect(() => {
    const action = setCollapsed(open);
    store.dispatch(action)
  }, [open]);
  return (
    <Header
      className="site-layout-background"
      style={{
        padding: "0 10px",
      }}
    >
      <div>
        <div className="collapsedBox" onClick={collapsedChange}>
          {open ? (
            <MenuUnfoldOutlined className="collapsed" />
          ) : (
            <MenuFoldOutlined className="collapsed" />
          )}
        </div>
      </div>
    </Header>
  );
});
