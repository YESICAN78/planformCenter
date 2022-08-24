/*
 * @Author: sunFulin
 * @Date: 2022-08-24 17:04:34
 * @LastEditTime: 2022-08-24 17:46:26
 */
import { Input, Upload } from "antd";
const GlobalComponent = {
  Input,
  Upload,
};

const formItemData = [
  {
    name: "Input",
    attr: {
      defaultValue: "",
      placeholder: "请输入",
    },
    label: "文本框",
  },
  {
    name: "Upload",
    attr: {
      defaultValue: "",
    },
    label: "上传",
  },
  
];

export { formItemData, GlobalComponent };
