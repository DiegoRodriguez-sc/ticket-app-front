import React, { useContext, useEffect, useState } from "react";
import { Col, Row, Typography, List, Card, Tag, Divider } from "antd";
import { useHideMenu } from "../hooks/useHideMenu";
import { SocketContext } from "../context/SocketContext";
import { getUltimos } from "../helper/getUltimos";

const { Title, Text } = Typography;

const Cola = () => {
  const [tickets, setTickets] = useState([]);
  const { socket } = useContext(SocketContext);
  useHideMenu(true);

  useEffect(() => {
    socket.on("ticket-asignado", (asignado) => {
      setTickets(asignado);
    });

    return () => {
      socket.off("ticket-asignado");
    };
  }, [socket]);

  useEffect(() => {
    getUltimos().then(data => setTickets(data.last));
  }, []);

  return (
    <>
      <Title level={1}>Atendiendo al cliente</Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={tickets.slice(0, 3)}
            renderItem={(item) => (
              <List.Item>
                <Card
                  style={{ width: 300, marginTop: 16 }}
                  actions={[
                    <Tag style={{fontSize:15}} color="volcano"> {item.agent} </Tag>,
                    <Tag style={{fontSize:15}} color="magenta"> Escritorio: {item.desk} </Tag>,
                  ]}
                >
                  <Title> No. {item.number}</Title>
                </Card>
              </List.Item>
            )}
          />
        </Col>

        <Col span={12}>
          <Divider> Historial </Divider>
          <List
            dataSource={tickets.slice(3)}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket No. ${item.number}`}
                  description={
                    <>
                      <Text type="secondary">En el escritorio: </Text>
                      <Tag color="magenta"> {item.desk} </Tag>
                      <Text type="secondary"> Agente: </Text>
                      <Tag color="volcano"> {item.agent} </Tag>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};

export default Cola;
