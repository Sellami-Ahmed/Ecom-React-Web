import React, { useState } from "react";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import { addProduct } from "../../Api/Api";
import { useNavigate } from "react-router-dom";

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
    <div>
      <Input
        value={state.name}
        placeholder={"name"}
        onChange={(e) => onChange(e, "name")}
      />
      <Input
        value={state.description}
        placeholder={"description"}
        onChange={(e) => onChange(e, "description")}
      />
      <Input
        value={state.category}
        placeholder={"category"}
        onChange={(e) => onChange(e, "category")}
      />
      <Input
        type={"number"}
        value={state.price.toString()}
        placeholder={"price"}
        onChange={(e) => onChange(e, "price")}
      />
      <Input
        type={"number"}
        value={state.stock.toString()}
        placeholder={"stock"}
        onChange={(e) => onChange(e, "stock")}
      />
      <Button name={"Add to stock"} onClick={onSubmit} />
    </div>
  );
}
