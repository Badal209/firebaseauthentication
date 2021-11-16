import React, { useEffect, useState } from "react";
import { Alert, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import Card from "../../Layout/Card";
import { loginAction } from "../../store/action/UserAction";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
toast.configure();
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const error = useSelector((state) => state.user.error);
  const history = useHistory();
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const loginFormHandler = (event) => {
    event.preventDefault();
    let FormValidData = formIsValid();
    if (FormValidData) {
      dispatch(loginAction(email, password));
      // toast.success("Login successfully !", {
      //   autoClose: 3000,
      // });
    }
  };

  const formIsValid = () => {
    let formValid;
    if (!email) {
      setEmailError("Email is Require !");
    } else if (!password) {
      setPasswordError("Password is Require !");
    } else {
      formValid = true;
    }
    return formValid;
  };
  useEffect(() => {
    if (user) {
      toast.success("Login successfully !", {
        autoClose: 3000,
      });
      history.push("/dashboard");
    }
  }, [user]);
  if (user) {
    return <Redirect to={"/dashboard"} />;
  }
  return (
    <Card>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={emailChangeHandler}
            style={{ fontWeight: "bold" }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        {!email && emailError ? (
          <Alert variant="danger">{emailError}</Alert>
        ) : null}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={passwordChangeHandler}
            style={{ fontWeight: "bold" }}
          />
        </Form.Group>
        {!password && passwordError ? (
          <Alert variant="danger">{passwordError}</Alert>
        ) : null}
        <Button
          variant="primary"
          type="submit"
          onClick={loginFormHandler}
          style={{ width: "26rem", fontWeight: "bold" }}
        >
          Submit
        </Button>
        <div>
          <p>
            Not have an Account <Link to="/singup">Sing up</Link>
          </p>
        </div>
        <div>
          {error && (
            <Alert variant="danger" className="mb-3">
              {error}
            </Alert>
          )}
        </div>
      </Form>
    </Card>
  );
};

export default LoginPage;
