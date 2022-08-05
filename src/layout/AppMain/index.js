/*
 * @Author: sunFulin
 * @Date: 2022-08-05 09:33:56
 * @LastEditTime: 2022-08-05 13:26:35
 */
import React, { memo } from "react";
import { Layout } from "antd";
import "./index.scss";
const { Content } = Layout;
export default memo(() => {
  return <Content className="sun-list-main">Content</Content>;
});
