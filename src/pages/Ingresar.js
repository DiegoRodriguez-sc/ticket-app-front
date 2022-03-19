import React from "react";
import { Form, Input, Button, InputNumber } from "antd";

const Ingresar = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 6,
      }}
      wrapperCol={{
        span: 14,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Nombre del agente"
        name="agente"
        rules={[
          {
            required: true,
            message: "Ingrese nombre del agente",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Escritorio"
        name="escritorio"
        rules={[
          {
            required: true,
            message: "Ingrese numero de escritorio",
          },
        ]}
      >
        <InputNumber min={1} />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 6,
          span: 14,
        }}
      >
        <Button type="primary" htmlType="submit" shape="round">
          Ingresar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Ingresar;
