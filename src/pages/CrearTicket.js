import React, { useContext, useState } from "react";
import { Row, Col, Button, Typography } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { useHideMenu } from "../hooks/useHideMenu";
import { SocketContext } from "../context/SocketContext";


const { Title, Text } = Typography;

const CrearTicket = () => {
    useHideMenu(true);
    const [ticket, setTicket] = useState(null);
    const {socket} = useContext(SocketContext); 

    const handleTicket = () =>{
        socket.emit("solicitar-ticket", null, (socketTicket)=>{
            setTicket(socketTicket);
        });
    }

  return (
    <>
      <Row>
        <Col span={14} offset={6} align="center">
          <Title level={2}>Presione el botón para un nuevo ticket</Title>
          <Button type="primary" shape="round" icon={<DownloadOutlined />} onClick={handleTicket}>
            Nuevo Ticket
          </Button>
        </Col>
      </Row>
      {
        ticket &&
        (<Row style={{ marginTop: 100 }}>
        <Col span={14} offset={6} align="center">
          <Text level={2}>Su número</Text>
          <br />
          <Text type="success" style={{ fontSize: 55 }}>
            {ticket.number}
          </Text>
        </Col>
      </Row>)}
    </>
  );
};

export default CrearTicket;
