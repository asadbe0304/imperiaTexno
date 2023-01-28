import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Login from "./../Login/index";
import "./style.scss";
const index = () => {
  const navigate = useNavigate();
  function handle() {
    navigate("/login");
  }
  return (
    <>
      <div
        className="sign w-100 d-flex
      justify-content-center align-items-center"
      >
        <Form className="w-50 py-4 my-1 sign-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="warning w-25" className="btn-sign" type="submit">
            Sign In
          </Button>
          <a
            onClick={() => handle()}
            className="back mx-2 btn btn-outline-warning btn-outline"
          >
            Log In
          </a>
        </Form>
      </div>
    </>
  );
};

export default index;
