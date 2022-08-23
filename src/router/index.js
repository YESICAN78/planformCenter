/*
 * @Author: SunFulin
 * @Date: 2022-08-05 21:45:41
 * @LastEditTime: 2022-08-23 13:24:57
 * @LastEditors: Please set LastEditors
 */
import systemRts from "./module/system";
import workFlow from "./module/workFlow";
const routers = [...systemRts, ...workFlow];
export default routers;
