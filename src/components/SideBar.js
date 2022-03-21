import React, { useContext, useState } from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  CoffeeOutlined,
  ContainerOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import {UiContext} from "../context/UiContext";

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

   const { ocultarMenu } = useContext(UiContext);

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} hidden={ocultarMenu}>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to={"/"} >
            Ingresar
          </Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<CoffeeOutlined />}>
        <Link to={"/cola"} >
            Cola
          </Link>
        </Menu.Item>
        <Menu.Item key="9" icon={<ContainerOutlined />}>
        <Link to={"/ticket"} >
            Crear Ticket
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
