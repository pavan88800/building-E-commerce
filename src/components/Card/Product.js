import React from "react";
import { Card, Col, Row } from "antd";
import { Container } from "../styles/Container.styled";
import "./style.css";
export const Product = () => {
  return (
    <Container>
      <Row>
        <Col span={8}>
          <Card style={{ width: 350 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Product;
