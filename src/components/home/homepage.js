import { Layout, Menu, Breadcrumb, Image } from "antd";
import {} from "@ant-design/icons";
import SurveyList from "../survey/survey-list";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateSurvey from "../survey/create-survey";

const { SubMenu } = Menu;
const { Header, Content } = Layout;

function HomePage() {
  return (
    <Router>
      <div className="HomePage">
        <Layout>
          <Header className="header">
            <div className="logo" />

            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="0">
                <Image width={55} src="/logo.png" />
              </Menu.Item>
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="2">Surveys</Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Layout style={{ padding: "0 24px 24px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Surveys</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                <Routes>
                  <Route exact path="/" element={<SurveyList />} />
                  <Route exact path="/create" element={<CreateSurvey />} />
                </Routes>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    </Router>
  );
}

export default HomePage;
