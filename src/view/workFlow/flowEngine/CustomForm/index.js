/*
 * @Author: sunFulin
 * @Date: 2022-08-23 17:12:37
 * @LastEditTime: 2022-08-25 17:43:10
 */
import React, { memo, useState } from "react";
import { Tag } from "antd";
import { formItemData } from "./config";
import "./index.scss";
export default memo(() => {
  const [state, setState] = useState(formItemData);
  return (
    <div className="ItemBox">
      {state.map((item) => (
        <div className="Item" key={item.name}>
          <Tag style={{ margin: 0 }}>{item.label + "-" + item.name}</Tag>
        </div>
      ))}
    </div>
  );
});
