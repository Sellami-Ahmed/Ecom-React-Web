import Component from "./Compnement";
import Btn from "./Btn";
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import {apiUrl} from './Config/Config'
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const afficher = () => {
    fetch(apiUrl+"signIn", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
        <Form>
        <Form.Group className="mb-3" controlId="Login">
      <Component name="E-mail" setComponement={setEmail} />
      <Component name="Password" type="password" setComponement={setPassword} />
      <Btn name="Login" afficher={afficher} />
      </Form.Group>
      </Form>
    </div>
  );
}
