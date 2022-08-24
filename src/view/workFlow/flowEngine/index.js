/*
 * @Author: sunFulin
 * @Date: 2022-08-23 17:12:37
 * @LastEditTime: 2022-08-24 14:18:14
 */
import React, { memo } from "react";
import { Layout } from "antd";
import CustomForm from "./CustomForm";
import "./index.scss";
const { Sider, Content } = Layout;
export default memo(() => {
  return (
    <Layout className="formMain">
      <Sider className="site-layout-background" width={200}>
        <h3 className="textHead">组件列表</h3>
      </Sider>
      <Layout className="formMainContent">
        <Content>
          <CustomForm />
        </Content>
        <Sider className="site-layout-background" width={500}>
          <h3 className="textHead">字段设置</h3>
          <Content></Content>
        </Sider>
      </Layout>
    </Layout>
  );
});
