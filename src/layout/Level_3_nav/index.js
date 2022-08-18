/*
 * @Author: sunFulin
 * @Date: 2022-08-18 16:02:30
 * @LastEditTime: 2022-08-18 18:09:04
 */
import React, { useState, memo } from "react";
import { DoubleRightOutlined, DoubleLeftOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import EventBus from "../../utils/eventBus";
import { Menu } from "antd";
import "./index.scss";
export default memo((props) => {
  const { onChange } = props;
  const location = useLocation();
  const navigate = useNavigate();
  const [collapsed, setcollapsed] = useState(true);
  let [thirdLeve, setthirdLeve] = useState([]);
  const handleIocnClick = () => {
    setcollapsed(!collapsed);
  };
  const onSelect = ({ keyPath }) => {
    let path = location.pathname + "/" + keyPath;
    navigate(path);
    onChange(false);
  };
  // EventBus.on("getThirdLeve3Fn", (data) => {
  //   // setthirdLeve(data);
  //   console.log(data);
  // });
  return (
    <div className="thirdLevelMenuBox" style={{ width: collapsed ? 0 : 200 }}>
      {!collapsed ? (
        <div style={{ width: collapsed ? 0 : 200 }}>
          <Menu
            mode="inline"
            onSelect={onSelect}
            items={[
              {
                key: "user",
                label: "用户",
              },
              {
                key: "index",
                label: "首页",
              },
            ]}
          />
        </div>
      ) : (
        ""
      )}
      <div className="thirdLevelMenuBoxIcon">
        {collapsed ? (
          <DoubleRightOutlined onClick={handleIocnClick} />
        ) : (
          <DoubleLeftOutlined onClick={handleIocnClick} />
        )}
      </div>
    </div>
  );
});
