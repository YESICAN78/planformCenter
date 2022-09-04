/*
 * @Author: SunFulin
 * @Date: 2022-08-27 14:20:03
 * @LastEditTime: 2022-09-04 21:59:44
 * @LastEditors: Dragon
 */
import React, { memo, useState } from "react";
import { Button, Space, Form } from "antd";
import { useDrop } from "react-dnd";
import PhoneForm from "../phone";
import { GlobalComponent } from "./config";
import { ItemTypes } from "./ItemTypes";
import "./index.scss";
export default memo(({ onDrop, data }) => {
  const [mode, setmode] = useState("pc");
  const [form] = Form.useForm();
  const [{ isOver, canDrop }, drop] = useDrop({
    // 只会争针对指定的目标，拖拽源发生反应
    accept: ItemTypes.LEFTDARG,
    hover(item, monitor) {},
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const getForm = (data) => {
    return (
      <Form
        form={form}
        labelCol={{
          span: 3,
        }}
        wrapperCol={{
          span: 21,
        }}
        initialValues={{
          remember: true,
        }}
      >
        {data.map((item, index) => (
          <Form.Item
            key={item.id}
            label={item.label}
            name={data[index].attr.defaultValue}
          >
            {GlobalComponent[item.type]}
          </Form.Item>
        ))}
      </Form>
    );
  };
  const viewType = (type) => {
    setmode(type);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="DropSourceWrap">
      <div className="action-bar">
        <Space>
          <Button type="primary" onClick={() => viewType("pc")}>
            Pc
          </Button>
          <Button type="primary" onClick={() => viewType("phone")}>
            Phone
          </Button>
        </Space>
      </div>
      {mode === "pc" ? (
        <div ref={drop} className="DropSource scrollBox commonScrollBar">
          {data.length > 0 && getForm(data)}
        </div>
      ) : (
        <div ref={drop}>
          <PhoneForm key={data.length} data={data} />
        </div>
      )}
    </div>
  );
});
