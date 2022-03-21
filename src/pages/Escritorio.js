import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Button, Col, Divider, Row, Typography } from "antd";
import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";
import { getUsuarioStorage } from "../helper/getUsuarioStorage";

const { Title, Text } = Typography;

const Escritorio = () => {
  const navigate = useNavigate();
  const [usuario] = useState(getUsuarioStorage());

  if (!usuario.agente || !usuario.escritorio) {
    return <Navigate to={"/"} />;
  }

  const handleSalir = () => {
     localStorage.clear();
    navigate("/");
  }

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{usuario.agente}</Title>
          <Text>Usted está trabajando en el escritorio: </Text>
          <Text type="success">{usuario.escritorio}</Text>
        </Col>
        <Col span={4} align="right">
          <Button shape="round" type="danger" onClick={handleSalir}>
            <CloseCircleOutlined />
            Salir
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col>
          <Text>Esta atendiendo el ticket numero: </Text>
          <Text style={{ fontSize: 30 }} type="danger">
            55
          </Text>
        </Col>
      </Row>
      <Row>
        <Col offset={18} span={6} align="right">
          <Button shape="round" type="primary">
            Siguiente
            <RightOutlined />
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Escritorio;
