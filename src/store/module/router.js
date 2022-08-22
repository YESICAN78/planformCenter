/*
 * @Author: sunFulin
 * @Date: 2022-08-22 15:44:01
 * @LastEditTime: 2022-08-22 17:19:30
 */
const initialState = { sidebarRouters: [], menLeve3: [], clickAllPath: [] };
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

    default:
      return state;
  }
}
export default routerReducer;
