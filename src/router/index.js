/*
 * @Author: SunFulin
 * @Date: 2022-08-05 21:45:41
 * @LastEditTime: 2022-08-08 17:41:22
 * @LastEditors: Please set LastEditors
 */
import Index from "../view/index";
import Org from "../view/org";
import Power from "../view/power";
export const menus = [
  {
    path: "/planform/index",
    name: "首页",
    icon: "",
    element: <Index />,
  },
  {
    path: "/planform/systemMgment/org",
    name: "系统管理",
    element: <Org />,
  },
  {
    key: "/planform/systemConfig/power",
    name: "系统配置",
    element: <Power />,
  },
];

export const routerConfig = {
  menus,
};
