import {
  Avatar,
  Button,
  Image,
  Input,
  Layout,
  Menu,
  Row,
  Space,
  Table,
} from "antd";
import {} from "@ant-design/icons";
import SurveyList from "../survey/survey-list";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import CreateSurvey from "../survey/create-survey";
import { SearchOutlined, UserOutlined, CopyOutlined } from "@ant-design/icons";
import ContentPage from "./content_page";

import AppHeader from "./lpcomp/header";
import AppFooter from "./lpcomp/footer";

import SideBar from "./sidebar";
import AppHero from "./lpcomp/landhero";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "../../axios/axios";

const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;

function ActiveSurvey() {
  const { auth } = useAuth();

  const [dataSource, setDataSource] = useState([]);

  async function fetchData() {
    const surveys = await axios.get("/surveys/list");
    setDataSource(surveys.data);
    console.log(surveys);
  }

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
          <Link to={"/takeSurvey/" + survey._id}>Take Survey</Link>
        </Space>
      ),
    },
  ];
  return (
    <Layout className="mainLayout">
      <Header>
        <Menu
          justify="end"
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item key="0">
            <Link to="/">
              {" "}
              <Image width={50} src="survi-logo.png" />
            </Link>
          </Menu.Item>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>

          {auth.accessToken ? (
            <Menu.Item key="2">
              <Link to="/">Login</Link>
            </Menu.Item>
          ) : (
            <Menu.Item key="2">
              <Link to="/login">Login</Link>
            </Menu.Item>
          )}
          <Menu.Item key="3">
            {" "}
            <Link to="/activeSurveys">Active Surveys</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <div className="survelist" style={{ height: "100vh", margin: "100px" }}>
          <Row justify="center">
            <h3>Active Surveys</h3>
          </Row>
          <Table dataSource={dataSource} columns={columns} />
        </div>
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default ActiveSurvey;
