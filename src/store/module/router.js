/*
 * @Author: sunFulin
 * @Date: 2022-08-22 15:44:01
 * @LastEditTime: 2022-08-23 10:01:47
 */
const initialState = {
  sidebarRouters: [],
  menLeve3: [],
  clickAllPath: [],
  collapsed: false,
};
function routerReducer(state = initialState, action) {
  switch (action.type) {
    case "GENERATE_ROUTERS":
      return {
        ...state,
        sidebarRouters: action.data,
      };
    case "SET_MENULEVE3":
      return {
        ...state,
        menLeve3: action.data,
      };
    case "SET_CLICK_ALL_PATH":
      return {
        ...state,
        clickAllPath: action.data,
      };
    case "SET_COLLAPSED":
      return {
        ...state,
        collapsed: action.data,
      };
    default:
      return state;
  }
}
export default routerReducer;
