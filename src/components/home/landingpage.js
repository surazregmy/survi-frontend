import { Avatar, Image, Input, Layout, Menu, Row, Space } from "antd";
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

const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;

function LandingPage() {
  const { auth } = useAuth();
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
        <AppHero></AppHero>
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default LandingPage;
