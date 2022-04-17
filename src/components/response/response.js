import { Layout, Menu, Table, Space, Button, Row } from "antd";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import axios from "../../axios/axios";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function ResponseList() {
  const navigate = useNavigate();
  const [dataSource, setDataSource] = useState([]);

  async function deleteData(e) {
    await axios.delete("/surveys/delete/" + e);
    fetchData();
  }

  async function fetchData() {
    const surveys = await axios.get("/surveys/list");

    let survyesWithAllData = [];
    // setDataSource(surveys.data);
    console.log(surveys);

    await surveys.data.forEach(async (survey) => {
      const response = await axios.get("surveys/responses/" + survey._id);
      console.log("here is the response");
      console.log(response);

      let option1Count = response.data.filter(
        (r) => r.option === "option1"
      ).length;
      let option2Count = response.data.filter(
        (r) => r.option === "option2"
      ).length;
      let option3Count = response.data.filter(
        (r) => r.option === "option3"
      ).length;
      let option4Count = response.data.filter(
        (r) => r.option === "option4"
      ).length;

      let newSur = {
        ...survey,
        option1Count,
        option2Count,
        option3Count,
        option4Count,
      };

      survyesWithAllData.push(newSur);
      setDataSource(survyesWithAllData);
    });

    console.log("survyesWithAllData");
    console.log(survyesWithAllData);
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
      title: "Selected Count",
      dataIndex: "option1Count",
      key: "option1Count",
    },
    {
      title: "Option2",
      dataIndex: "option2",
      key: "option2",
    },
    {
      title: "Selected Count",
      dataIndex: "option2Count",
      key: "option2Count",
    },
    {
      title: "Option3",
      dataIndex: "option3",
      key: "option3",
    },
    {
      title: "Selected Count",
      dataIndex: "option3Count",
      key: "option3Count",
    },
    {
      title: "Option4",
      dataIndex: "option4",
      key: "option4",
    },
    {
      title: "Selected Count",
      dataIndex: "option4Count",
      key: "option4Count",
    },
  ];
  return (
    <div className="survelist">
      <Row justify="center">
        <h3>Responses for the Surveys you have created!</h3>
      </Row>

      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
}

export default ResponseList;
