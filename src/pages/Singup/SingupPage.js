import React, { useEffect, useState } from "react";
import { Alert, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, Redirect } from "react-router-dom";
import Card from "../../Layout/Card";
import { singupAction } from "../../store/action/UserAction";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
toast.configure();
const SingupPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user.user);
  console.log("USER", user);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [matchPassword, setMatchPassword] = useState("");
  const [successPassword, setSuccess] = useState("");

  const error = useSelector((state) => state.user.error);
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const confirmPasswordHandler = (event) => {
    if (event.target.value !== password) {
      {
        setSuccess("");
        setMatchPassword("Password does not match");
      }
    } else {
      {
        setSuccess("Your Password is Match !");
        setMatchPassword("");
      }
    }
    setConfirmPassword(event.target.value);
  };
  const formSingupHandler = (event) => {
    event.preventDefault();
    let formDataValid = formValidHandler();
    if (formDataValid) {
      dispatch(singupAction(email, password));
    }
  };

  const formValidHandler = () => {
    let formValid;
    if (!email) {
      setEmailError("Email is Require !");
    } else if (!password) {
      setPasswordError("Password is Require !");
    } else if (!confirmPassword) {
      setConfirmPasswordError("Confirm Password is Require");
    } else {
      formValid = true;
    }
    return formValid;
  };
  useEffect(() => {
    if (user) {
      toast.success("Singup successully !");
      history.push("/dashboard");
    }
  }, [user]);

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
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={confirmPasswordHandler}
            style={{ fontWeight: "bold" }}
          />
          <br />
          {matchPassword ? (
            <Alert variant="danger" className="mb-3">
              {matchPassword}
            </Alert>
          ) : (
            successPassword && (
              <Alert variant="success" className="mb-3">
                {successPassword}
              </Alert>
            )
          )}
          {!confirmPassword && confirmPasswordError ? (
            <Alert variant="danger">{confirmPasswordError}</Alert>
          ) : null}
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={formSingupHandler}
          style={{ width: "26rem", fontWeight: "bold" }}
        >
          Submit
        </Button>
        <div>
          <p>
            Already have an Account ! <Link to="/login">Log in</Link>
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

export default SingupPage;
