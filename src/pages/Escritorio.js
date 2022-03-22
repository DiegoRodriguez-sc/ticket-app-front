import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Button, Col, Divider, Row, Typography } from "antd";
import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";
import { getUsuarioStorage } from "../helper/getUsuarioStorage";
import { SocketContext } from "../context/SocketContext";

const { Title, Text } = Typography;

const Escritorio = () => {
  const navigate = useNavigate();
  const [usuario] = useState(getUsuarioStorage());
  const [ticket, setTicket] = useState(null);
  const { socket } = useContext(SocketContext);

  if (!usuario.agente || !usuario.escritorio) {
    return <Navigate to={"/"} />;
  }

  const handleSiguiente = () => {
    socket.emit("siguiente-ticket-trabajar", usuario, (nextTicket) => {
      setTicket(nextTicket);
    });
  };

  const handleSalir = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={1}>{usuario.agente.toUpperCase()}</Title>
          <Text style={{fontSize:15}} >Usted está trabajando en el escritorio: </Text>
          <Text style={{fontSize:20}} type="success">{usuario.escritorio}</Text>
        </Col>
        <Col span={4} align="right">
          <Button size="large" shape="round" type="danger" onClick={handleSalir}>
            <CloseCircleOutlined />
            Salir
          </Button>
        </Col>
      </Row>
      <Divider />
      {ticket && (
        <Row>
          <Col>
            <Text style={{fontSize:20}} >Esta atendiendo el ticket numero: </Text>
            <Text style={{ fontSize: 30 }} type="danger">
              {ticket.number}
            </Text>
          </Col>
        </Row>
      )}
      <Row>
        <Col offset={18} span={6} align="right">
          <Button size="large" shape="round" type="primary" onClick={handleSiguiente}>
            Siguiente
            <RightOutlined />
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Escritorio;
