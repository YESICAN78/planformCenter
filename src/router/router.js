/*
 * @Author: SunFulin
 * @Date: 2022-08-07 13:00:55
 * @LastEditTime: 2022-08-07 13:07:33
 * @LastEditors: Dragon
 */
const routes = [
  {
    path: "/planform/index",
    component: () => import("../view/index"),
    exact: true,
    meta: {
      title: "首页",
    },
  },
  {
    path: "/planform/systemMgment/:id",
    exact: true,
    meta: {
      title: "系统管理",
    },
    children: [
      {
        path: "org",
        meta: {
          title: "组织列表",
        },
        component: () => import("../view/org"),
      },
    ],
  },
  {
    key: "/planform/systemConfig/:id",
    meta: {
      title: "系统配置",
    },
    children: [
      {
        path: "power",
        meta: {
          title: "功能管理",
        },
        component: () => import("../view/power"),
      },
    ],
  },
];
export default routes;
