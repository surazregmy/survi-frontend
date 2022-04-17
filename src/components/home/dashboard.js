import { Layout, Menu, Table, Space, Button, Row, Card } from "antd";
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

function Dashboard() {
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

  return (
    <div className="survelist">
      <Row justify="center">
        <h3>Welcome!</h3>
      </Row>
      <Row>
        <Card title="No of Surveys Created!">
          <h1 style={{ color: "green" }}>5</h1>
        </Card>
      </Row>
    </div>
  );
}

export default Dashboard;
