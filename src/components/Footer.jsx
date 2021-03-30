import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const Footer = () => {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <div className="text-center font-weight-light">
            <p style={{color: "#ddd", fontSize: 12}}>🔥Made with passion by Yoann Wargnier🔥</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
