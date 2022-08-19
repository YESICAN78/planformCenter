/*
 * @Author: sunFulin
 * @Date: 2022-08-04 13:14:53
 * @LastEditTime: 2022-08-18 09:55:26
 */
import { useRoutes } from "react-router-dom";
import routers from "./router/index";
import "./App.scss";
export default function App() {
  const GetRoutes = () => {
    let routes = useRoutes(routers);
    return routes;
    // return (
    //   <Routes>
    //     {routers &&
    //       routers.map((rt) => (
    //         <Route key={rt.path} path={rt.path} element={rt.element}>
    //           {rt.children &&
    //             rt.children.map((cldrt) => (
    //               <Route
    //                 key={cldrt.path}
    //                 path={cldrt.path}
    //                 element={cldrt.element}
    //               ></Route>
    //             ))}
    //         </Route>
    //       ))}
    //   </Routes>
    // );
  };
  return GetRoutes();
}
