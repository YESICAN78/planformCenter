/*
 * @Author: sunFulin
 * @Date: 2022-08-23 17:12:37
 * @LastEditTime: 2022-08-24 17:44:31
 */
import React, { memo, useState } from "react";
import { Tag } from "antd";
import { ReactSortable } from "react-sortablejs";
import { formItemData } from "./config";
import "./index.scss";
export default memo(() => {
  const [state, setState] = useState(formItemData);
  return (
    <ReactSortable list={state} setList={setState}>
      <div className="ItemBox">
        {state.map((item) => (
          <div className="Item" key={item.name} style={{ marginTop: 10 }}>
            <Tag>{item.label + "-" + item.name}</Tag>
          </div>
        ))}
      </div>
    </ReactSortable>
  );
});
