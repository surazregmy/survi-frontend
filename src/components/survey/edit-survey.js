import { Layout, Menu } from "antd";
import { Form, Input, InputNumber, Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";

import React, { useState, useEffect } from "react";

import {} from "@ant-design/icons";
import axios from "../../axios/axios";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function EditSurvey(props) {
  let { id } = useParams();
  const [survey, setSurvey] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/surveys/get/" + id);
      setSurvey(response.data);
      console.log("in  async");
      console.log(response.data);
    }

    fetchData();
  }, []);

  const navigate = useNavigate();

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  async function update(values) {
    await axios
      .put("/surveys/edit/" + id, survey, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        navigate("/admin/surveys");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const onFinish = (values) => {
    update(values);
  };

  return (
    <div className="createlist">
      <Form {...layout} name="nest-messages" onFinish={onFinish}>
        <Form.Item label="Question" rules={[{ required: true }]}>
          <Input.TextArea
            value={survey.question}
            onChange={(e) => {
              setSurvey({
                ...survey,
                question: e.target.value,
              });
            }}
          />
        </Form.Item>
        <Form.Item label="option1" rules={[{ required: true }]}>
          <Input
            value={survey.option1}
            onChange={(e) => {
              setSurvey({
                ...survey,
                option1: e.target.value,
              });
            }}
          />
        </Form.Item>
        <Form.Item label="option2" rules={[{ required: true }]}>
          <Input
            value={survey.option2}
            onChange={(e) => {
              setSurvey({
                ...survey,
                option2: e.target.value,
              });
            }}
          />
        </Form.Item>
        <Form.Item label="option3" rules={[{ required: true }]}>
          <Input
            value={survey.option3}
            onChange={(e) => {
              setSurvey({
                ...survey,
                option3: e.target.value,
              });
            }}
          />
        </Form.Item>
        <Form.Item label="option4" rules={[{ required: true }]}>
          <Input
            value={survey.option4}
            onChange={(e) => {
              setSurvey({
                ...survey,
                option4: e.target.value,
              });
            }}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default EditSurvey;
