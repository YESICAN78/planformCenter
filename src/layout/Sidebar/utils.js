/*
 * @Author: sunFulin
 * @Date: 2022-08-17 13:03:20
 * @LastEditTime: 2022-08-22 17:40:30
 */
import store from "../../store";
export function getFathersByPathAndName(path) {
  const arr = [];
  const back = (path, data) => {
    for (let i = 0, length = data.length; i < length; i++) {
      const node = data[i];
      if (node.path === path) {
        arr.unshift({
          path: node.path,
          name: node.name,
        });
        return true;
      } else {
        if (node.children && node.children.length) {
          if (back(path, node.children)) {
            arr.unshift({
              path: node.path,
              name: node.name,
            });
            return true;
          }
        }
      }
    }
    return false;
  };
  const { sidebarRouters } = store.getState().routerModule;
  back(path, sidebarRouters);
  return arr;
}
// 获取第三级路由
export function getMenuLeve3(path) {
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
  const { sidebarRouters } = store.getState().routerModule;
  back(path, sidebarRouters);
  return pathArr;
}
