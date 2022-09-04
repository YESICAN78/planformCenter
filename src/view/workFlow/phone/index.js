/*
 * @Author: SunFulin
 * @Date: 2022-09-03 23:20:40
 * @LastEditTime: 2022-09-04 20:30:06
 * @LastEditors: Dragon
 */
import React, { memo } from "react";
import "./index.scss";
export default memo(({ data }) => {
  const getForm = (data) => {
    return (
      <>
        {data.map((item) => (
          <div
            style={{
              marginBottom: "10px",
            }}
          >
            <span key={item.id}>{item.label}</span>
          </div>
        ))}
      </>
    );
  };
  return (
    <div className="phone_form_wrap">
      <div className="phoneBg">
        <div className="phonedody scrollBox commonScrollBar">
          <div>{data.length > 0 && getForm(data)}</div>
        </div>
      </div>
    </div>
  );
});
