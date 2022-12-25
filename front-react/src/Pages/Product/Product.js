import React, { useEffect, useRef, useState } from "react";
import { getAllProducts } from "../../Api/Api";
import Card from "../../Components/Card/Card";
import Button from "../../Components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, desincrementProduct, incrementProduct } from "../../Redux/Actions";
import { FaArrowUp } from "react-icons/fa";

export default function Product() {
  let qte="";
  const ref = useRef();
  const dipatch = useDispatch();
  const cart = useSelector((state) => state.cart.data);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getProducts = async () => {
    setLoading(false);
    let response = await getAllProducts();
    setLoading(true);
    if (response.status === 200) {
      setData(response.data);
    }
  };
  const goTop = () => {
    ref.current.scrollIntoView({
      top: 0,
      behavior: "smooth",
    });
  };
  const  added = (data) => {
    let x =cart.findIndex(elem=>(elem._id===data._id && elem.count>0));
    console.log(x)
    if (x!==-1){
      qte=cart[x].count.toString();
      return "yes"
    }
    return ""
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="products">
      {" "}
      <div
        className="flex flex-wrap justify-content-center align-items-center "
        id="container"
        ref={ref}
      >
        {loading &&
          data.map((el, index) => (
            <Card
              key={index}
              title={el.name}
              description={el.description}
              price={el.price}
              stock={el.stock}
              isAdded={added(el)}
              increment={()=>dipatch(incrementProduct(el))}
              desincrement={()=>dipatch(desincrementProduct(el))}
              quantity={qte}
              onClick={() => dipatch(addProduct(el))}
            />
          ))}
        {!loading && <p>loading...</p>}
      </div>
      {loading && (
        <div className="flex flex-wrap justify-content-center align-items-center ">
          <Button
            name={<FaArrowUp/>}
            onClick={goTop}
            variant="dark"
            className="rounded"
          />
        </div>
      )}
    </div>
  );
}
