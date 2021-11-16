import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Card from "../../Layout/Card";
const Dashboard = () => {
  const user = useSelector((state) => state.user.user);
  console.log("DASHBOARD", user);
  const [data, setData] = useState("");
  const [array, setArray] = useState([]);

  const dataChangeHandler = (e) => {
    setData(e.target.value);
  };
  const addDataHandler = () => {
    setArray(data);
  };
  if (!user && !localStorage.getItem("user")) return null;
  return (
    <div>
      <p>Welcome to dashboard</p>
      <div>
        <Link to="/logout">
          <button>Logout</button>
        </Link>
        <br />
        <br />
        <div>
          <Card>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Add Data</Form.Label>
                <Form.Control
                  placeholder="Add Data"
                  style={{ fontWeight: "bold" }}
                  onChange={dataChangeHandler}
                  value={data}
                />
              </Form.Group>
              <Button
                variant="dark"
                style={{ width: "26rem", fontWeight: "bold" }}
                onClick={addDataHandler}
              >
                Add
              </Button>
            </Form>
          </Card>
          <div>
            <div>
              <p>{array}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
