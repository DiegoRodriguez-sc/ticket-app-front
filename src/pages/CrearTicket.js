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
        <Col span={24} align="center" style={{marginTop:50}}>
          <Title >Presione el botón para un nuevo ticket</Title>
          <Button size="large" type="primary" shape="round" icon={<DownloadOutlined />} onClick={handleTicket}>
            Nuevo Ticket
          </Button>
        </Col>
      </Row>
      {
        ticket &&
        (<Row style={{ marginTop: 100 }}>
        <Col span={24} align="center">
          <Text style={{fontSize:25}}>Su número</Text>
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
