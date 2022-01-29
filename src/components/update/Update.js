import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Update() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [ID, setID] = useState("");

  const sendDataToAPI = () => {
    axios
      .put(`https://61f4cae462f1e300173c3f01.mockapi.io/CRUD/${ID}`, {
        firstName,
        lastName,
      })
      .then(() => {
        navigate("/read");
      });
  };

  useEffect(() => {
    setFirstName(localStorage.getItem("firstName"));
    setLastName(localStorage.getItem("lastName"));
    setID(localStorage.getItem("ID"));
  }, []);

  return (
    <div>
      <Form>
        <Form.Field>
          <label className="labels">First Name</label>
          <input
            name="firstName"
            value={firstName}
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label className="labels">Last Name</label>
          <input
            name="lastName"
            value={lastName}
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Button
          className="button-update"
          type="submit"
          className="button-submit"
          onClick={sendDataToAPI}
        >
          Update
        </Button>
      </Form>
    </div>
  );
}
