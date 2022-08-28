/*
 * @Author: SunFulin
 * @Date: 2022-08-27 12:42:22
 * @LastEditTime: 2022-08-28 15:12:43
 * @LastEditors: Dragon
 */
import React, { memo, useRef } from "react";
import { useDrag } from "react-dnd";
import { Tag } from "antd";
import { ItemTypes } from "./ItemTypes";
export default memo(({ data }) => {
  const { icon, label } = data;
  //useDrag 将拖动组件作为拖动源连接到 React-dnd
  let [{ isDragging }, drag] = useDrag({
    type: ItemTypes.LEFTDARG,
    // item 是当前托动源的js对象
    item: () => ({ ...data }),
    //
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0.1 : 1;
  // drag 作用是 拖动源的连接器，
  return (
    <div ref={drag} style={{ opacity }}>
      <Tag icon={icon}>{label}</Tag>
    </div>
  );
});
