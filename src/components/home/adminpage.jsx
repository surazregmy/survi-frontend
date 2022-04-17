import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Image, Input, Layout, Menu, Row, Space } from "antd";
import { Outlet } from "react-router-dom";
import SideBar from "./sidebar";

const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;

function AdminPage() {
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        className="side_bar"
        trigger={null}
      >
        <div className="slider_title">
          <h3 style={{ color: "white" }}>Survi</h3>
          <h4 style={{ color: "white" }}>Survyes made Easy!</h4>
        </div>
        <div></div>
        <div className="sider_menu">
          <SideBar></SideBar>
        </div>
      </Sider>
      <Layout>
        <Header className="header">
          <Row justify="space-between">
            <div className="search_in_header">
              <Image width={50} src="/survi-logo.png" />
            </div>
            <div className="avatar_in_header">
              <Avatar icon={<UserOutlined />} />
            </div>
          </Row>
        </Header>
        <Content style={{ margin: "90px", height: "100vh" }}>
          <Outlet />
        </Content>
        <Footer style={{ background: "#000000" }}>
          <Row justify="space-between">
            <p style={{ color: "#ffffff" }}>@Survi</p>
            <h3 style={{ color: "#ffffff" }}>V1.0</h3>
          </Row>
        </Footer>
      </Layout>
    </Layout>
  );
}

export default AdminPage;
