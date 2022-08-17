/*
 * @Author: sunFulin
 * @Date: 2022-08-05 11:11:59
 * @LastEditTime: 2022-08-17 22:24:50
 */
import React, { memo, useState } from "react";
import { Breadcrumb } from "antd";
import EventBus from "../../utils/eventBus";
import "./index.scss";
export default memo(() => {
  let [crumb, setcrumb] = useState([]);
  EventBus.on("BreadcrumbFn", (data) => {
    setcrumb(data.slice(1));
  });
  return (
    <Breadcrumb className="breadcrumb">
      {crumb.length > 0 &&
        crumb.map((item, index) => (
          <Breadcrumb.Item key={item.path}>{item.name}</Breadcrumb.Item>
        ))}
    </Breadcrumb>
  );
});
