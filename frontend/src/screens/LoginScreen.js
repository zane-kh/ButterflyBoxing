import React, { useState, useEffect } from "react";
import {
  Link,
  useNavigate,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { login } from "../actions/userActions";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const { search } = useLocation();
  const redirect = search ? search.split("=")[1] : "/home";

  const [searchParams, setSearchParams] = useSearchParams();
  searchParams.get("redirect");

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <FormContainer>
      <center style={{ paddingTop: "40px" }}>
        <h1>Login</h1>
      </center>
      {error && (
        <center>
          <Message variant="danger">{error}</Message>
        </center>
      )}
      {loading && <Loader />}
      <Form
        onSubmit={submitHandler}
        style={{ width: "30vw", margin: "0 auto" }}
      >
        <Form.Group controlId="email" className="py-4">
          <Form.Label>Email </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password" className="py-4">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <div className="py-3">
          <center>
            <Button type="submit" variant="primary">
              Sign In
            </Button>
          </center>
        </div>
      </Form>

      <Row className="py-3">
        <Col>
          <center>
            New Customer?{" "}
            <Link
              to={redirect ? `/register?redirect=${redirect}` : "/register"}
            >
              Register
            </Link>
          </center>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
