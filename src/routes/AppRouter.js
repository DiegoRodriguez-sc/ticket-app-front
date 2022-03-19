import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import Sidebar from "../components/SideBar";
import Cola from "../pages/Cola";
import CrearTicket from "../pages/CrearTicket";
import Ingresar from "../pages/Ingresar";

const { Content, Footer } = Layout;

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout className="site-layout">
          <Content style={{ margin: "0 16px" }}>
            <Routes>
              <Route path="/" element={<Ingresar />} />
              <Route path="/cola" element={<Cola />} />
              <Route path="/ticket" element={<CrearTicket />} />
            </Routes>
          </Content>

          <Footer style={{ textAlign: "center" }}>Footer</Footer>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;
