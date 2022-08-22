/*
 * @Author: sunFulin
 * @Date: 2022-08-05 11:11:59
 * @LastEditTime: 2022-08-22 17:43:50
 */
import React, { memo, useEffect, useState } from "react";
import { Breadcrumb } from "antd";
import store from "../../store";
import "./index.scss";
export default memo(() => {
  let [crumb, setcrumb] = useState([]);

  useEffect(() => {
    setcrumb(store.getState().routerModule.clickAllPath);
    store.subscribe(() => {
      setcrumb(store.getState().routerModule.clickAllPath);
    });
  }, [crumb]);
  return (
    <Breadcrumb className="breadcrumb">
      {crumb.length > 0 &&
        crumb.map((item, index) => (
          <Breadcrumb.Item key={item.path}>{item.name}</Breadcrumb.Item>
        ))}
    </Breadcrumb>
  );
});
