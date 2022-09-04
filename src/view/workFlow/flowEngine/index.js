/*
 * @Author: sunFulin
 * @Date: 2022-08-23 17:12:37
 * @LastEditTime: 2022-09-04 15:06:14
 */
import React, { memo, useState } from "react";
import { Layout } from "antd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DargSource from "./DargSource";
import DropSource from "./DropSource";
import uuld from "../../../utils/buildUULD";
import "./index.scss";
const { Sider, Content } = Layout;
export default memo(() => {
  let dropSourceData = [];
  const handleDrop = (data) => {
    data.id = uuld();
    dropSourceData.push(data);
  };
  return (
    <div className="formWrap">
      <DndProvider backend={HTML5Backend}>
        <Layout>
          <Sider className="formMainLeft" width={250}>
            <DargSource />
          </Sider>
          <Layout>
            <Content className="formMainCenter">
              <div className="content">
                <DropSource
                  data={dropSourceData}
                  onDrop={(item) => handleDrop(item)}
                />
              </div>
            </Content>
            <Sider className="site-layout-background" width={300}>
              <h3 className="textHead">字段设置</h3>
            </Sider>
          </Layout>
        </Layout>
      </DndProvider>
    </div>
  );
});
