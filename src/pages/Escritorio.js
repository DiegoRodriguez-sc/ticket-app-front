import React from "react";
import { Button, Col, Divider, Row, Typography } from "antd";
import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const Escritorio = () => {
  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>Diego</Title>
          <Text>Usted está trabajando en el escritorio: </Text>
          <Text type="success">5</Text>
        </Col>
        <Col span={4} align="right">
          <Button shape="round" type="danger">
            <CloseCircleOutlined />
            Salir
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
       <Col>
         <Text>Esta atendiendo el ticket numero: </Text>
         <Text style={{fontSize:30}} type="danger"  >55</Text>
       </Col>
      </Row>
      <Row>
        <Col offset={18} span={6} align="right">
          <Button 
             shape="round"
             type="primary"
      
            >
            Siguiente
            <RightOutlined />
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Escritorio;
