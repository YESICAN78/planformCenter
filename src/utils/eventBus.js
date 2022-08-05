/*
 * @Author: sunFulin
 * @Date: 2022-08-05 13:07:31
 * @LastEditTime: 2022-08-05 14:08:00
 */
const defaultCallBack = () => {};
export class EventBus {
  constructor() {
    this.eventList = [];
  }
  //注册事件
  on(eventName, callback) {
    const exist = this.eventList.some(
      (evenItem) => evenItem.eventName === eventName
    );
    if (!exist) {
      this.eventList.push({ eventName, callback });
    }
  }
  //触发事件
  emit(eventName, params) {
    const matchEvents = this.eventList.filter(
      (evenItem) => evenItem.eventName === eventName
    );
    matchEvents.forEach((evenItem) => {
      const { callback = defaultCallBack } = evenItem;
      callback(params);
    });
  }
  //   删除事件
  off(eventName, callback) {
    this.eventList = this.eventList.filter((evenItem) => {
      if (evenItem.eventName === eventName) {
        if (typeof callback !== "function") {
          return false;
        }
        if (
          typeof callback === "function" &&
          evenItem.eventName === eventName
        ) {
          return false;
        }
        return true;
      }
    });
  }
  //   清空所有事件
  destroy() {
    this.eventList = [];
  }
}
export default new EventBus();
