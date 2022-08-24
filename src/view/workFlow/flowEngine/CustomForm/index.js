/*
 * @Author: sunFulin
 * @Date: 2022-08-23 17:12:37
 * @LastEditTime: 2022-08-24 13:45:57
 */
import React, { memo, useState } from "react";
import { ReactSortable } from "react-sortablejs";
export default memo(() => {
  const [state, setState] = useState([
    { id: 1, name: "shrek" },
    { id: 2, name: "fiona" },
  ]);
  return (
    <ReactSortable list={state} setList={setState}>
      {state.map((item) => (
        <div key={item.id} style={{ border: "1px solid red" }}>
          {item.name}
        </div>
      ))}
    </ReactSortable>
  );
});
