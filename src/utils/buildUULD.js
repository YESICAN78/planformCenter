/*
 * @Author: SunFulin
 * @Date: 2022-08-27 14:46:59
 * @LastEditTime: 2022-08-27 14:49:05
 * @LastEditors: Dragon
 */
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
};
