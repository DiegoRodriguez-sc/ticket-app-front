import React, { useContext } from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  CoffeeOutlined,
  ContainerOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { UiContext } from "../context/UiContext";

const { Header } = Layout;

const Sidebar = () => {
  const { ocultarMenu } = useContext(UiContext);

  return (
    <Header hidden={ocultarMenu}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item icon={<UserOutlined />}>{<Link to="/">Ingresar</Link>}</Menu.Item>
        <Menu.Item icon={<CoffeeOutlined />}>{<Link to="/cola">Cola</Link>}</Menu.Item>
        <Menu.Item icon={<ContainerOutlined />}>{<Link to="/ticket">Crear Ticket</Link>}</Menu.Item>
      </Menu>
    </Header>
  );
};

export default Sidebar;
