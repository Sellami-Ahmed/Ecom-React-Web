import React from "react";
import {
  BrowserRouter,
  Routes as ComponentsRoutes,
  Route,
} from "react-router-dom";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import Dashbord from "../Pages/Dashbord/Dashbord";
import PrivateRoute from "./PrivateRoute/PrivateRoutes";
import PublicRoute from "./PublicRoute/PublicRoute";
import Product from "../Pages/Product/Product";
import AddProduct from "../Pages/AddProduct/AddProduct";
export default function Routes(props) {
  return (
    <BrowserRouter>
      <ComponentsRoutes>
        <Route path="/" element={<PublicRoute component={<SignIn />} />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route
          path="/signIn"
          element={<PublicRoute component={<SignIn />} />}
        />
        <Route
          path="/dashbord"
          element={<PrivateRoute component={<Dashbord />} />}
        />
        <Route
          path="/product"
          element={<PrivateRoute component={<Product />} />}
        />
        <Route
          path="/product/add"
          element={<PrivateRoute 
            role="admin"
            component={<AddProduct />} />}
        />
      </ComponentsRoutes>
    </BrowserRouter>
  );
}
