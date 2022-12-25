import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import { setLang, setUser } from "../../Redux/Actions";
import { FaShopify } from "react-icons/fa";

export default function Navbar(props) {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.setting.lang);
  const user = useSelector((state) => state.auth.user);
  const cart = useSelector((state) => state.cart.data);
  return (
    <div className="navbar space-beetwen flex align-center Link p-2">
      <div className="flex">
      <Link to="/dashbord" className="px-16 nav-link ">
        {" "}
        dashbord{" "}
      </Link>
      <Link to="/product" className="px-16 nav-link ">
        {" "}
        product{" "}
      </Link>
      {user.role === "admin" && (
        <Link to="/product/add" className="px-16 nav-link ">
          Add product{" "}
        </Link>
      )}
      </div>
      <div>
        <div className="flex align-center">
          <div style={{ marginRight: "12px", position: "relative" }}>
            <FaShopify size={32} />
            {cart.length>0 && <div
              style={{
                background: "red",
                width: "16px",
                height: "16px",
                position: "absolute",
                top: "-4px",
                right: "-4px",
                borderRadius: "50%",
                display:'flex',
                justifyContent:'center',
                alignItems:"center",
                fontSize: "8px",
                
              }}
            >
            {cart.reduce((a,b)=>a+b.count,0)}
            </div>}
          </div>

          <Button
          variant='dark'
          className="p-1 me-1"
            name={lang}
            onClick={() => {
              dispatch(setLang({ lang: lang === "fr" ? "an" : "fr" }));
            }}
          />
          <Button
          variant='danger'
          className="p-1"
            name={"Logout"}
            onClick={() => {
              dispatch(setUser({ user: null, token: null }));
            }}
          />
        </div>
      </div>
    </div>
  );
}
