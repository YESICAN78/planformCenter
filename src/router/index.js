/*
 * @Author: SunFulin
 * @Date: 2022-08-05 21:45:41
 * @LastEditTime: 2022-08-07 21:59:42
 * @LastEditors: Dragon
 */
import { RenderRoutes } from "./utils";

const Ui = ({ routes }) => (
  <div>
    <h3>Ui</h3>
    <RenderRoutes routes={routes}></RenderRoutes>
  </div>
);

export const menus = [
  {
    path: "/planform/index",
    name: "首页",
    icon: "",
    component: () => import("../view/index"),
  },
  {
    path: "/planform/systemMgment",
    exact: true,
    name: "系统管理",
    component: Ui,
    routes: [
      {
        path: "/planform/systemMgment/org",
        name: "组织列表",
        exact: true,
        component: () => import("../view/org"),
      },
    ],
  },
  {
    key: "/planform/systemConfig",
    name: "系统配置",
    exact: true,
    routes: [
      {
        path: "/planform/systemConfig/power",
        name: "功能管理",
        exact: true,
        component: () => import("../view/power"),
      },
    ],
  },
];

export const routerConfig = {
  menus,
};
