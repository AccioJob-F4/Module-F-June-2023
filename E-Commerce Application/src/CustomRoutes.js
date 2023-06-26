import React from "react";

import { Routes, Route } from "react-router-dom";

import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";
import ProductDetail from "./components/ProductDetail/ProductDetail";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/productlist" element={<ProductList />} />
      <Route path="/product">
        <Route path=":productId" element={<ProductDetail />} />
      </Route>
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default CustomRoutes;
