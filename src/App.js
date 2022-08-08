/*
 * @Author: sunFulin
 * @Date: 2022-08-04 13:14:53
 * @LastEditTime: 2022-08-08 17:50:40
 */
// import { Layout } from "antd";
// import { Breadcrumb, Header, Sidebar, AppMain } from "./layout";
import "./App.scss";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { menus as routes } from "./router/index";
export default function App() {
  let element = useRoutes(routes);
  return (
    <Router>
      {element}
      App
      {/* {element} */}
      {/* <Layout className="app-main">
        <Sidebar />
        <Layout className="site-layout">
          <Header />
          <Breadcrumb />
          <AppMain />
        </Layout>
      </Layout> */}
    </Router>
  );
}
