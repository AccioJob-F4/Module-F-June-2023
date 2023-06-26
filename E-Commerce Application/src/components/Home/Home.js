import React from "react";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const store = useSelector((state) => state);

  return (
    <div>
      <div className="home-app-name">
        E-Commerce Website
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            navigate("/productlist");
          }}
        >
          Products
        </button>
        <button
          onClick={() => {
            navigate("/cart");
          }}
        >
          Cart ({store.cart.length})
        </button>
      </div>
    </div>
  );
};

export default Home;
