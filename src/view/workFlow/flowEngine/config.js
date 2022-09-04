/*
 * @Author: sunFulin
 * @Date: 2022-08-24 17:04:34
 * @LastEditTime: 2022-09-04 21:58:15
 */
import {
  Input,
  Upload,
  InputNumber,
  Switch,
  Radio,
  Checkbox,
  Select,
  Cascader,
} from "antd";
import { CodeOutlined, CoffeeOutlined } from "@ant-design/icons";
const { TextArea } = Input;
const GlobalComponent = {
  Input: <Input />,
  TextArea: <TextArea />,
  InputNumber: <InputNumber />,
  Switch: <Switch />,
  Radio: <Radio />,
  Checkbox: <Checkbox />,
  Select: <Select />,
  Cascader: <Cascader />,
  Upload: <Upload />,
};

const formItemData = [
  {
    title: "基础控件",
    list: [
      {
        type: "Input",
        attr: {
          defaultValue: "单行输入框",
          placeholder: "请输入",
        },
        label: "单行输入框",
        icon: <CodeOutlined />,
      },
      {
        type: "TextArea",
        attr: {
          defaultValue: "",
          placeholder: "请输入",
        },
        label: "多行输入框",
        icon: <CodeOutlined />,
      },
      {
        type: "InputNumber",
        attr: {
          defaultValue: "",
          placeholder: "请输入",
        },
        label: "数字输入",
        icon: <CodeOutlined />,
      },
      {
        type: "Switch",
        attr: {
          defaultValue: "",
          placeholder: "",
        },
        label: "开关",
        icon: <CodeOutlined />,
      },
      {
        type: "Radio",
        attr: {
          defaultValue: "",
          placeholder: "",
        },
        label: "单选框组",
        icon: <CodeOutlined />,
      },
      {
        type: "Checkbox",
        attr: {
          defaultValue: "",
          placeholder: "",
        },
        label: "多选框组",
        icon: <CodeOutlined />,
      },
      {
        type: "Select",
        attr: {
          defaultValue: "",
          placeholder: "",
        },
        label: "下拉选择",
        icon: <CodeOutlined />,
      },
      {
        type: "Cascader",
        attr: {
          defaultValue: "",
          placeholder: "",
        },
        label: "级联选择",
        icon: <CodeOutlined />,
      },
    ],
  },
  {
    title: "高级控件",
    list: [],
  },
];
export { formItemData, GlobalComponent };
