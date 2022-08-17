/*
 * @Author: SunFulin
 * @Date: 2022-08-05 21:45:41
 * @LastEditTime: 2022-08-17 14:49:32
 * @LastEditors: Please set LastEditors
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
