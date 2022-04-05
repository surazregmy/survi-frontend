import { Layout, Menu } from "antd";
import { Form, Input, InputNumber, Button } from "antd";
import { useNavigate } from "react-router-dom";

import React, { useState, useEffect } from "react";

import {} from "@ant-design/icons";
import axios from "../../axios/axios";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function CreateSurvey() {
  const navigate = useNavigate();

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  async function createData(values) {
    await axios
      .post(
        "/surveys/add",
        {
          question: values.question.question,
          option1: values.option1.option1,
          option2: values.option2.option2,
          option3: values.option3.option3,
          option4: values.option4.option4,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const onFinish = (values) => {
    createData(values);
  };

  return (
    <div className="createlist">
      <Form {...layout} name="nest-messages" onFinish={onFinish}>
        <Form.Item
          name={["question", "question"]}
          label="Question"
          rules={[{ required: true }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name={["option1", "option1"]}
          label="Option1"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["option2", "option2"]}
          label="Option2"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["option3", "option3"]}
          label="Option3"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["option4", "option4"]}
          label="Option4"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default CreateSurvey;
