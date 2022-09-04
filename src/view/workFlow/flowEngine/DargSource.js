/*
 * @Author: SunFulin
 * @Date: 2022-08-27 12:36:23
 * @LastEditTime: 2022-09-04 15:13:11
 * @LastEditors: Dragon
 */
import React, { memo } from "react";
import Item from "./Item";
import { formItemData } from "./config";
import "./index.scss";
export default memo(() => {
  return (
    <div className="DargSource scrollBox commonScrollBar">
      {formItemData.map((item, index) => (
        <div className="group_box">
          <h3 className="textHead">{item.title}</h3>
          <div className="darg_source_wrap">
            {item.list.map((child) => (
              <div className="DargSourceItem">
                <Item data={child} key={child.type} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
});
