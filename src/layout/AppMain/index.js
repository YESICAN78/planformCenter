/*
 * @Author: sunFulin
 * @Date: 2022-08-05 09:33:56
 * @LastEditTime: 2022-08-17 14:22:01
 */
import React, { memo } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import "./index.scss";
const { Content } = Layout;
export default memo(() => {
  return (
    <Content className="sun-list-main">
      <Outlet />
    </Content>
  );
});
