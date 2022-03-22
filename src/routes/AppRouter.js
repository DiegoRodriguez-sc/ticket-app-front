import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "antd";

import Sidebar from "../components/SideBar";
import Cola from "../pages/Cola";
import CrearTicket from "../pages/CrearTicket";
import Ingresar from "../pages/Ingresar";
import Escritorio from "../pages/Escritorio";

const { Content, Footer } = Layout;

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout className="layout">
        <Sidebar />
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            <Routes>
              <Route path="/" element={<Ingresar />} />
              <Route path="/cola" element={<Cola />} />
              <Route path="/ticket" element={<CrearTicket />} />
              <Route path="/escritorio" element={<Escritorio />} />
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Diego Rodriguez
        </Footer>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;
