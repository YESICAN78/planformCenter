/*
 * @Author: sunFulin
 * @Date: 2022-08-05 11:23:37
 * @LastEditTime: 2022-08-22 14:51:32
 */
import { legacy_createStore as createStore } from "redux";
import reducer from "./reducer";
const store = createStore(reducer);
export default store;
