/*
 * @Author: sunFulin
 * @Date: 2022-08-05 11:11:59
 * @LastEditTime: 2022-08-05 11:16:34
 */
import React, { memo } from "react";
import { Breadcrumb } from "antd";
import './index.scss'
export default memo(() => {
  return (
    <Breadcrumb className="breadcrumb">
      <Breadcrumb.Item>User</Breadcrumb.Item>
      <Breadcrumb.Item>Bill</Breadcrumb.Item>
      <Breadcrumb.Item>Bill</Breadcrumb.Item>
    </Breadcrumb>
  );
});
