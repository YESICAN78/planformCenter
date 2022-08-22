/*
 * @Author: sunFulin
 * @Date: 2022-08-05 11:11:59
 * @LastEditTime: 2022-08-22 19:51:13
 */
import React, { memo, useEffect, useState } from "react";
import { Breadcrumb } from "antd";
import store from "../../store";
import "./index.scss";
export default memo(() => {
  let [crumb, setcrumb] = useState([]);
  const handleCrumb = (path) => {};
  const filterData = () => {
    let list = store.getState().routerModule.clickAllPath;
    list = list.slice(1);
    setcrumb(list);
  };
  useEffect(() => {
    filterData();
    store.subscribe(() => {
      filterData();
    });
  }, []);
  return (
    <Breadcrumb className="breadcrumb">
      {crumb.length > 0 &&
        crumb.map((item, index) => (
          <Breadcrumb.Item key={item.path} onClick={handleCrumb}>
            {item.name}
          </Breadcrumb.Item>
        ))}
    </Breadcrumb>
  );
});
