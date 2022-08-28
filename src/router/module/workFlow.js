/*
 * @Author: sunFulin
 * @Date: 2022-08-17 13:30:06
 * @LastEditTime: 2022-08-27 12:00:20
 */
import { SyncOutlined } from "@ant-design/icons";
import AppLayout from "../../layout/index";
import FlowEngine from "../../view/workFlow/flowEngine";
const workFlow = [
  {
    path: "/workFlow",
    name: "工作流程",
    element: <AppLayout />,
    icon: <SyncOutlined />,
    children: [
      {
        path: "flowEngine",
        name: "流程设计",
        element: <FlowEngine />,
      },
    ],
  },
];
export default workFlow;
