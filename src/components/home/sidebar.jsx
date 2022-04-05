import React, { useState } from "react";
import { Button, Menu, Row } from "antd";
import { DatabaseOutlined, DashboardOutlined } from "@ant-design/icons";
import { Link, useNavigate, useLocation } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import axios from "../../axios/axios";

const { SubMenu } = Menu;

const rootSubmenuKeys = [
  "stocks",
  "stakeholders",
  "purchases",
  "sales",
  "dailysales",
];

function SideBar() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const logout = async () => {
    const response = await axios
      .get("/auth/logout", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then(() => {
        setAuth({});
        console.log("It should now navigate");
        navigate("/", { replace: true });
      });
  };

  const [openKeys, setOpenKeys] = React.useState(["sub1"]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu
      mode="inline"
      theme="dark"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
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
          <Link to="/admin/add-survey">Create Survey</Link>
        </Menu.Item>
      </SubMenu>
      <Row justify="center">
        <Button
          onClick={() => logout()}
          type="primary"
          danger
          style={{ width: "100%" }}
        >
          Logout
        </Button>
      </Row>
    </Menu>
  );
}

export default SideBar;
