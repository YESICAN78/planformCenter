/*
 * @Author: sunFulin
 * @Date: 2022-08-05 14:41:04
 * @LastEditTime: 2022-08-22 16:42:33
 */
import React, { memo, useState } from "react";
export default memo(() => {
  const [obj, setObj] = useState({
    count: 9,
  });
  const add = () => {};
  return (
    <>
      <div>
        <button onClick={add}>加</button>
      </div>
    </>
  );
});
