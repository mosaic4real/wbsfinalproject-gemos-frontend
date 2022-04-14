import React from "react";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {Routes, Route, Redirect} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from 'react-redux';

const App = () => {
   const user = useSelector((state) => state.user.currentUser);
  
  return (
    // <div>
  
      <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route path="/products/:category" element={ <ProductList/> } />
        <Route path="/product/:id" element={ <Product/> } />
        <Route path="/signup" element={ <Register/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/cart" element={ <Cart/> } />
        <Route path="/success" element={ <Success/> } />
        </Routes>
   
    // </div>
  )
};

export default App

