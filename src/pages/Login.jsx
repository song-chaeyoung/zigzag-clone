import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authenticateAction } from "../redux/actions/authenticateAction";
import styled from "styled-components";

const LoginContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;

const Login = ({ setAuthenticate }) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const nevigate = useNavigate();
  const dispatch = useDispatch();

  const trueOk = useSelector((state) => state.auth.authenticate);

  const loginUser = (e) => {
    e.preventDefault();
    nevigate("/");
    setAuthenticate(trueOk);
    dispatch(authenticateAction.login(id, pw));
  };

  return (
    <LoginContainer>
      <Container>
        <Form onSubmit={loginUser}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setId(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPw(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" variant="outline-primary">
            Login
          </Button>
        </Form>
      </Container>
    </LoginContainer>
  );
};

export default Login;
