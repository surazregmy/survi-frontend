import { DatabaseOutlined, DashboardOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;
function SideBarMenu() {
  return (
    <Menu
      mode="inline"
      theme="dark"
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["stocks"]}
      style={{ height: "100%", borderRight: 0 }}
    >
      <Menu.Item key="15" icon={<DashboardOutlined />}>
        <Link to="/">Dashboard</Link>
      </Menu.Item>
      <SubMenu key="stocks" icon={<DatabaseOutlined />} title="Survey">
        <Menu.Item key="1">
          <Link to="/admin/surveys">Surveys</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/admin/create-survey">Create Survey</Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
}

export default SideBarMenu;
