/*
 * @Author: sunFulin
 * @Date: 2022-08-17 13:03:20
 * @LastEditTime: 2022-08-17 17:31:39
 */
import { routers } from "../../router/index";
export function filterRouter() {
  return routers.map((rt) => {
    return {
      label: rt.name,
      key: rt.path,
      icon: rt.icon,
      children: rt.children.map((child) => {
        return {
          label: child.name,
          key: child.path,
          icon: child.icon,
        };
      }),
    };
  });
}
