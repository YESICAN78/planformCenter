/*
 * @Author: SunFulin
 * @Date: 2022-08-06 16:30:58
 * @LastEditTime: 2022-08-07 12:45:44
 * @LastEditors: Dragon
 */
import { UploadOutlined, VideoCameraOutlined } from "@ant-design/icons";
const sidebarMenu = [
  {
    key: "index",
    name: "首页",
  },
  {
    key: "systemMgment",
    name: "系统管理",
    icon: <UploadOutlined />,
    children: [
      {
        key: "org",
        name: "组织列表",
      },
    ],
  },
  {
    key: "systemConfig",
    name: "系统配置",
    icon: <VideoCameraOutlined />,
    children: [
      {
        key: "power",
        name: "功能管理",
      },
    ],
  },
];

export default sidebarMenu;
