/*
 * @Author: sunFulin
 * @Date: 2022-08-17 13:30:06
 * @LastEditTime: 2022-08-17 15:42:43
 */
import { CalendarOutlined, PicLeftOutlined } from "@ant-design/icons";
import Power from "../../view/power";
import Org from "../../view/org";
import AppLayout from "../../layout/index";
const systemRts = [
  {
    path: "/system",
    name: "系统配置",
    element: <AppLayout />,
    children: [
      {
        path: "org",
        name: "系统管理",
        element: <Org />,
        icon: <PicLeftOutlined />,
      },
      {
        path: "power",
        name: "菜单管理",
        element: <Power />,
        icon: <CalendarOutlined />,
      },
    ],
  },
];
export default systemRts;
