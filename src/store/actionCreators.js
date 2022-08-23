/*
 * @Author: sunFulin
 * @Date: 2022-08-22 14:49:33
 * @LastEditTime: 2022-08-23 11:13:55
 */
import routers from "../router/index";
// 折叠菜单
const setCollapsed = (data) => ({
  type: "SET_COLLAPSED",
  data,
});
const setMenLeve3 = (data) => ({
  type: "SET_MENULEVE3",
  data,
});
const setSildBar = () => {
  return {
    type: "GENERATE_ROUTERS",
    data: routers,
  };
};
// 选中菜单所有链路径
const setClickAllPath = (data) => ({
  type: "SET_CLICK_ALL_PATH",
  data,
});
export { setMenLeve3, setSildBar, setClickAllPath, setCollapsed };
