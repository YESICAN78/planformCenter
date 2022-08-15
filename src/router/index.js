/*
 * @Author: SunFulin
 * @Date: 2022-08-05 21:45:41
 * @LastEditTime: 2022-08-15 17:47:41
 * @LastEditors: Please set LastEditors
 */
import Index from "../view/index";
import Org from "../view/org";
import Power from "../view/power";
import AppLayout from "../layout";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
const GetRoutes = () => {
  const routes = useRoutes([
    {
      path: "/planform",
      element: <AppLayout />,
      children: [
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
      ],
    },
  ]);
  return routes;
};
const SetRoutes = () => {
  return (
    <Router>
      <GetRoutes />
    </Router>
  );
};
export default SetRoutes;
