import React from "react";
import { useSelector } from "react-redux";
import uniqid from "uniqid";

import Card from "../ui/Card/Card";
import "./Cart.css";

const Cart = () => {
  const store = useSelector((state) => state);

  return (
    <div className="cart-box">
      {store.cart.map((cartItem) => {
        return (
          <Card
            key={uniqid()}
            name={cartItem?.name}
            img={cartItem?.imgSrc}
            price={cartItem?.price}
            id={cartItem?.id}
          />
        );
      })}
    </div>
  );
};

export default Cart;
