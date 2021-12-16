import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Col, Row, Image } from "react-bootstrap";

import Logo from "../../Logo.png";
const LoginForm = () => {
  let [username, setUser] = useState("");
  let [password, setPassword] = useState("");
  let [correctPassword, SetCorrect] = useState(false);
  let [message, setMessage] = useState([]);
  let history = useHistory();
  let clickme = () => {
    // console.log(username);
    window.open("mailto:support@smartserv.io?subject=Forgot Password");
  };
  let validate = () => {
    let message = [];
    let Uppercase = new RegExp("^(?=.*[A-Z]).+$");
    let digit = new RegExp("^(?=.*\\d).+$");
    if (!Uppercase.test(password)) {
      message.push("Password must contain atleast Uppercase letter");
    }
    if (!digit.test(password)) {
      message.push("Password must contain atleast one digit");
    }

    return message.length > 0 ? false : true;
  };
  let submit = (e) => {
    e.preventDefault();
    if (validate()) {
      history.push("/dashboard");
    } else {
    }
    // console.log(password);
    // console.log(username);
  };
  return (
    <div
      style={{
        border: "1px solid black",
        paddingLeft: "5em",
        paddingRight: "5em",
        paddingBottom: "5em",
        backgroundColor: "rgb(20,20,20)",
        marginTop: "5em",
        borderRadius: "1em",
      }}
    >
      <Row>
        <br />
        <Col xs={12}>
          <Image fluid src={Logo} />
        </Col>
        <br />
        <br />
        <Col xs={12}>
          <Form>
            <Row>
              <Col xs={1} md={2}></Col>
              <Col xs={12} md={8}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    onChange={(e) => setUser(e.target.value)}
                    type="text"
                    placeholder="Username"
                  />
                </Form.Group>
              </Col>
              <Col xs={1} md={2}></Col>
            </Row>

            <Row>
              <Col xs={1} md={2}></Col>
              <Col xs={12} md={8}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>
              </Col>
              <Col xs={1} md={2}></Col>
            </Row>
            <br />
            <Row>
              <Col xs={1} md={2}></Col>
              <Col xs={12} md={8}>
                <div className="d-grid gap-2">
                  <Button
                    onClick={submit}
                    variant="success"
                    size="lg"
                    type="submit"
                  >
                    Submit
                  </Button>
                </div>
              </Col>
              <Col xs={1} md={2}></Col>
            </Row>

            <br />
            <div>
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <span
                  onClick={clickme}
                  style={{ color: "grey", borderBottom: "1px solid grey" }}
                >
                  Forgot your Password?
                </span>{" "}
              </span>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default LoginForm;
