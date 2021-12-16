import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LoginForm from "./LoginForm";
const Login = ({ setLogin }) => {
  return (
    <>
      <div style={{ height: "100vh", backgroundColor: "rgb(45, 45, 45)" }}>
        <Container>
          <Row>
            <Col xs={1} md={3}>
              1
            </Col>
            <Col xs={10} md={6}>
              <LoginForm setLogin={setLogin} />
            </Col>
            <Col xs={1} md={3}>
              3
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Login;
