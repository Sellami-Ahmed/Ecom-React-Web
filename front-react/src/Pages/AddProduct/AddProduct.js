import React, { useState } from "react";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import { addProduct } from "../../Api/Api";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";

export default function AddProduct() {
  let navigate = useNavigate();
  const [state, setState] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
  });
  const onChange = (e, key) => {
    if (key === "stock") {
      let re = /^[0-9\b]+$/;
      if (e.target.value === "" || re.test(e.target.value)) {
        setState({ ...state, [key]: parseInt(e.target.value) });
      }
    } else {
      setState({ ...state, [key]: key==="price" ? parseFloat(e.target.value) : e.target.value});
    }
  };
  const onSubmit = async () => {
    let response = await addProduct(JSON.stringify(state));
    console.log(state);
    if(response.status ===201){
      navigate('/product');
    }
  };
  return (
    <div className=" p-4 flex justify-content-center align-items-center ">
      <div style={{maxWidth:"520px"}} className="border border-primary border-1 rounded p-5">
      <h2 className="flex justify-content-center p-5">ADD PRODUCT :</h2>
      <Form >
      <Input
        label={"Name:"}
        value={state.name}
        placeholder={"name"}
        onChange={(e) => onChange(e, "name")}
      />
      <Input
      label={"Description:"}
      value={state.description}
      placeholder={"description"}
      onChange={(e) => onChange(e, "description")}
      />
      <Input
        label={"Category:"}
        value={state.category}
        placeholder={"category"}
        onChange={(e) => onChange(e, "category")}
        />
      <Input
        label={"Price:"}
        type={"number"}
        value={state.price.toString()}
        placeholder={"price"}
        onChange={(e) => onChange(e, "price")}
        />
      <Input
        label={"Stock:"}
        type={"number"}
        value={state.stock.toString()}
        placeholder={"stock"}
        onChange={(e) => onChange(e, "stock")}
      />
      <Button name={"Add to stock"} onClick={onSubmit} variant={"primary"}/>
      </Form>
      </div>
    </div>
  );
}
