/*
 * @Author: sunFulin
 * @Date: 2022-08-17 13:30:06
 * @LastEditTime: 2022-08-22 22:18:27
 */
import { CalendarOutlined } from "@ant-design/icons";
import Org from "../../view/org";
import User from "../../view/user";
import Index from "../../view/index";
import AppLayout from "../../layout/index";
const systemRts = [
  {
    path: "/system",
    name: "系统配置",
    element: <AppLayout />,
    icon: <CalendarOutlined />,
    children: [
      {
        path: "org",
        name: "系统管理",
        element: <Org />,
      },
      {
        path: "power",
        name: "菜单管理",
        children: [
          {
            path: "user",
            name: "用户",
            element: <User />,
          },
          {
            path: "index",
            name: "首页",
            element: <Index />,
          },
        ],
      },
    ],
  },
];
export default systemRts;
