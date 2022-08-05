/*
 * @Author: sunFulin
 * @Date: 2022-08-05 14:39:49
 * @LastEditTime: 2022-08-05 15:06:52
 */
import {
  UploadOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
const routers = [
  {
    path: "/planform/user",
    name: "user",
    title: "用户列表",
    icon: <UploadOutlined />,
    component: () => import("../view/user"),
  },
  {
    path: "/planform/org",
    name: "org",
    title: "组织列表",
    icon: <VideoCameraOutlined />,
    component: () => import("../view/org"),
  },
];
export default routers;
