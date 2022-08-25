/*
 * @Author: sunFulin
 * @Date: 2022-08-23 17:12:37
 * @LastEditTime: 2022-08-25 22:54:45
 */
import React, { memo } from "react";
import { Layout } from "antd";
import { DragDropContext } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import CustomForm from "./CustomForm";
import "./index.scss";
const { Sider, Content } = Layout;
export default memo(() => {
  return (
    <Layout>
      <Sider
        className="site-layout-background formMainLeft commonScrollBar"
        width={200}
      >
        <h3 className="textHead">组件列表</h3>
        <CustomForm />
      </Sider>
      <Layout>
        <Content className="formMainCenter commonScrollBar">
          <div className="content"></div>
        </Content>
        <Sider className="site-layout-background" width={300}>
          <h3 className="textHead">字段设置</h3>
        </Sider>
      </Layout>
    </Layout>
  );
});
