/*
 * @Author: SunFulin
 * @Date: 2022-08-05 21:45:41
 * @LastEditTime: 2022-08-17 22:33:23
 * @LastEditors: Dragon
 */
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import systemRts from "./module/system";
const routers = [...systemRts];
const GetRoutes = () => {
  const routes = useRoutes(routers);
  return routes;
};
const SetRoutes = () => {
  return (
    <Router>
      <GetRoutes />
    </Router>
  );
};
export { SetRoutes, routers };
