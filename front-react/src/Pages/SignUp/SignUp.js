import React, { useState } from "react";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import Alert from  "../../Components/Alert/Alert";
import { Link, useNavigate } from "react-router-dom";

import { signUp } from "../../Api/Api";
import { Form } from "react-bootstrap";
export default function SignUp() {
  const[alert,setAlert]=useState('');
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
    else{
      setAlert(result.message)
    }
  };
  return (
    <div>
      <div  className=" p-5 vh-100 flex justify-content-center align-items-center ">
        <div style={{maxWidth:"520px"}} className="w-100 border border-primary border-1 rounded p-5">
          <h2 className="flex justify-content-center p-5">Sign Up</h2>
          {alert !=='' && <Alert variant={"danger"} name={alert} className="text-center"/>}
      <Form>
      <Input
      label={"FirstName:"}
      placeholder={"FirstName"}
      value={state.firstName}
      onChange={(e) => onChange(e, "firstName")}
      />
      <Input
      label={"LastName:"}
      placeholder={"LastName"}
      value={state.lastName}
      onChange={(e) => onChange(e, "lastName")}
      />
      <Input
      label={"Email:"}
      type={"email"}
      value={state.email}
      placeholder={"Email"}
      onChange={(e) => onChange(e, "email")}
      />
      <Input
      label={"Password:"}
        value={state.password}
        type={"password"}
        placeholder={"Password"}
        onChange={(e) => onChange(e, "password")}
      />
      <Button name={"Sign Up"} onClick={onSubmit} variant={"primary"}/>
      <Link to="/signIn"> Log in </Link>
      </Form>
    </div>
    </div>
    </div>
    
  );
}
