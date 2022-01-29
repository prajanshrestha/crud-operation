import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const sendDataToAPI = () => {
    axios
      .post(`https://61f4cae462f1e300173c3f01.mockapi.io/CRUD`, {
        firstName,
        lastName,
      })
      .then(() => {
        navigate("/read");
      });
  };

  return (
    <div>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input
            name="firstName"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            name="lastName"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Button type="submit" className="button-submit" onClick={sendDataToAPI}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
