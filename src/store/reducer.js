/*
 * @Author: sunFulin
 * @Date: 2022-08-05 11:26:44
 * @LastEditTime: 2022-08-22 16:24:10
 */
import { combineReducers } from "redux";
import getRouterReducer from "./module/router";
const reducer = combineReducers({
  routerModule: getRouterReducer,
});
export default reducer;
