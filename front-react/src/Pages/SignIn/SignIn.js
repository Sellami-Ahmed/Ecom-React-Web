import React, { useState } from "react";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import Alert from  "../../Components/Alert/Alert";
import { signIn } from "../../Api/Api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../Redux/Actions";
import { Form } from "react-bootstrap";
export default function SignIn() {
  const dispatch = useDispatch();
  const[alert,setAlert]=useState('');
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  const onChange = (e, key) => {
    setState({ ...state, [key]: e.target.value });
  };
  const onSubmit = async () => {
    let response = await signIn(JSON.stringify(state));
    console.log(response);
    if (response.status === 200) {
      dispatch(setUser({ user: response.data, token: response.token }));
      navigate("/dashbord");
    }
    else{
      setAlert('Wrong Email or Password !!')
    }
  };
  return (
    <div >
      <div  className=" p-5 vh-100 flex justify-content-center align-items-center ">
        <div style={{maxWidth:"520px"}} className="w-100 border border-primary border-1 rounded p-5">
          <h2 className="flex justify-content-center p-5">Sign In</h2>
          {alert !=='' && <Alert variant={"danger"} name={alert} className="text-center"/>}
          <Form>
            <Input
              label={"Email:"}
              type={"email"}
              value={state.email}
              placeholder={"Email"}
              onChange={(e) => onChange(e, "email")}
            />
            <Input
              label={"Password:"}
              type={"password"}
              value={state.password}
              placeholder={"Password"}
              onChange={(e) => onChange(e, "password")}
            />
            <div className="flex justify-content-center align-items-center">
              <Button name={"Sign In"} onClick={onSubmit} />
              <Link to="/signUp"> Register </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
