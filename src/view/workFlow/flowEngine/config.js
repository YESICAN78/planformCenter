/*
 * @Author: sunFulin
 * @Date: 2022-08-24 17:04:34
 * @LastEditTime: 2022-08-27 13:06:17
 */
import { Input, Upload } from "antd";
import { CodeOutlined, CoffeeOutlined } from "@ant-design/icons";
const GlobalComponent = {
  Input,
  Upload,
};

const formItemData = [
  {
    type: "Input",
    attr: {
      defaultValue: "",
      placeholder: "请输入",
    },
    label: "文本框",
    icon: <CodeOutlined />,
  },
  {
    type: "Upload",
    attr: {
      defaultValue: "",
    },
    label: "上传",
    icon: <CoffeeOutlined />,
  },
];

export { formItemData, GlobalComponent };
