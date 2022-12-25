import React, { useState } from "react";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import { useNavigate } from "react-router-dom";

import { signUp } from "../../Api/Api";
export default function SignUp() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const onChange = (e, key) => {
    setState({ ...state, [key]: e.target.value });
  };
  let navigate = useNavigate();
  const onSubmit = async () => {
    let result = await signUp(JSON.stringify(state));
    console.log(result);
    if (result.status === 201) {
      navigate("/signIn");
    }
  };
  return (
    <>
      <Input
        placeholder={"FirstName"}
        value={state.firstName}
        onChange={(e) => onChange(e, "firstName")}
      />
      <Input
        placeholder={"LastName"}
        value={state.lastName}
        onChange={(e) => onChange(e, "lastName")}
      />
      <Input
        type={"email"}
        value={state.email}
        placeholder={"Email"}
        onChange={(e) => onChange(e, "email")}
      />
      <Input
        value={state.password}
        type={"password"}
        placeholder={"Password"}
        onChange={(e) => onChange(e, "password")}
      />
      <Button name={"Sign Up"} onClick={onSubmit} />
    </>
  );
}
