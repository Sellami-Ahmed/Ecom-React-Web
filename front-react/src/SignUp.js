import Component from "./Compnement";
import Btn from "./Btn";
import React, { useState } from "react";
import {URL} from './Config/Config'
export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const afficher = () => {
    fetch(URL+"signUp", {
      method: "POST",
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
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
      <Component name="First Name" setComponement={setFirstName} />
      <Component name="Last Name" setComponement={setLastName} />
      <Component name="E-mail" setComponement={setEmail} />
      <Component name="Password" type="password" setComponement={setPassword} />
      <Btn name="Sign Up" afficher={afficher} />
    </div>
  );
}
