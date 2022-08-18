/*
 * @Author: sunFulin
 * @Date: 2022-08-17 13:03:20
 * @LastEditTime: 2022-08-18 17:57:28
 */
import routers from "../../router/index";
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
// 获取第三级路由
export function getThirdLevelMenu3(path) {
  let pathArr = [];
  const back = (path, data) => {
    if (data) {
      for (let i = 0, length = data.length; i < length; i++) {
        const node = data[i];
        if (node.path === path && node.children) {
          pathArr = node.children.map((item) => {
            return {
              label: item.name,
              key: item.path,
            };
          });
        } else {
          back(path, node.children);
        }
      }
    }
  };
  back(path, routers);
  return pathArr;
}
