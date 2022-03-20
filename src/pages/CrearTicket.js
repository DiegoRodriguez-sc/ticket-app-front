import React from "react";
import { Row, Col, Button, Typography } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const CrearTicket = () => {
  return (
    <>
      <Row>
        <Col span={14} offset={6} align="center">
          <Title level={2}>Presione el botón para un nuevo ticket</Title>
          <Button type="primary" shape="round" icon={<DownloadOutlined />}>
            Nuevo Ticket
          </Button>
        </Col>
      </Row>
      <Row style={{ marginTop: 100 }}>
        <Col span={14} offset={6} align="center">
          <Text level={2}>Su número</Text>
          <br />
          <Text type="success" style={{ fontSize: 55 }}>
            55
          </Text>
        </Col>
      </Row>
    </>
  );
};

export default CrearTicket;
