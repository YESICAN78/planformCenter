/*
 * @Author: SunFulin
 * @Date: 2022-08-27 14:20:03
 * @LastEditTime: 2022-08-28 18:01:02
 * @LastEditors: Dragon
 */
import React, { memo, useEffect, useRef, useState } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import "./index.scss";
export default memo(({ onDrop, data }) => {
  const [formItem, setFormItem] = useState([]);
  const [{ isOver, canDrop }, drop] = useDrop({
    // 只会争针对指定的目标，拖拽源发生反应
    accept: ItemTypes.LEFTDARG,
    hover(item, monitor) {},
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const getForm = (data) => {
    return (
      <>
        {data.map((item) => (
          <span key={item.id}>{item.label}</span>
        ))}
      </>
    );
  };
  return (
    <div ref={drop} className="DropSource">
      {data.length > 0 && getForm(data)}
    </div>
  );
});
