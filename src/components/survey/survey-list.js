import { Layout, Menu, Table, Space, Button } from "antd";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import axios from "../../axios/axios";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function SurveyList() {
  const navigate = useNavigate();
  const [dataSource, setDataSource] = useState([]);

  async function deleteData(e) {
    await axios.delete("/surveys/delete/" + e);
    fetchData();
  }

  async function fetchData() {
    const surveys = await axios.get("/surveys/list");
    setDataSource(surveys.data);
    console.log(surveys);
  }

  const redirect = () => {
    navigate("/admin/add-survey");
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    {
      title: "Question",
      dataIndex: "question",
      key: "question",
    },
    {
      title: "Option1",
      dataIndex: "option1",
      key: "option1",
    },
    {
      title: "Option2",
      dataIndex: "option2",
      key: "option2",
    },
    {
      title: "Option3",
      dataIndex: "option3",
      key: "option3",
    },
    {
      title: "Option4",
      dataIndex: "option4",
      key: "option4",
    },
    {
      title: "Action",
      key: "action",
      sorter: true,
      render: (survey) => (
        <Space size="middle">
          <a
            style={{ color: "red" }}
            onClick={(e) => {
              deleteData(survey._id);
            }}
          >
            Delete
          </a>
          <a>Edit</a>
        </Space>
      ),
    },
  ];
  return (
    <div className="survelist">
      <Button type="primary" onClick={redirect}>
        Add Survey
      </Button>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
}

export default SurveyList;
