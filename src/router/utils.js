/*
 * @Author: SunFulin
 * @Date: 2022-08-07 16:18:21
 * @LastEditTime: 2022-08-07 22:01:50
 * @LastEditors: Dragon
 */
import { Route, Link } from "react-router-dom";
export const RouteWithSubRoutes = (route) => (
  <Route
    path={route.path}
    exact={route.exact}
    render={(props) => {
      return route && route.Redirect ? (
        <Link to={route.Redirect}></Link>
      ) : (
        <route.component {...props} routes={route.routes} />
      );
    }}
  ></Route>
);
export const RenderRoutes = ({ routes }) => {
  return routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />);
};

export const OldSchoolMenuLink = ({ route }) => (
  <Route
    path={route.path}
    exact={route.exact}
    children={({ match }) => {
      return (
        <div className={match ? "active" : ""}>
          <Link to={route.path}>{route.name}</Link>
        </div>
      );
    }}
  />
);
