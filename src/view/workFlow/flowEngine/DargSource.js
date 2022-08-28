/*
 * @Author: SunFulin
 * @Date: 2022-08-27 12:36:23
 * @LastEditTime: 2022-08-27 18:49:24
 * @LastEditors: Dragon
 */
import React, { memo } from "react";
import Item from "./Item";
import { formItemData } from "./config";
const style = {
  width: "100%",
  display: "flex",
};
export default memo(() => {
  return (
    <div style={style}>
      {formItemData.map((item, index) => (
        <Item data={item} key={item.type} />
      ))}
    </div>
  );
});
