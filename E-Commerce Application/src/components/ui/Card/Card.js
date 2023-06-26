import React from "react";

import { useNavigate } from "react-router-dom";

import "./Card.css";
import QuantityCounter from "../QuantityCounter/QuantityCounter";

const Card = ({ name, price, id, img }) => {
  const navigate = useNavigate();
  return (
    <div className="card-box">
      <div className="card-body">
        <div className="card-img">
          <img src={img} />
        </div>
        <div className="card-item-name">{name}</div>
        <div className="card-item-price">{price}</div>

        <QuantityCounter id={id} />

        <button
          className="product-details-btn"
          onClick={() => {
            navigate(`/product/${id}`);
          }}
        >
          More Details
        </button>
      </div>
    </div>
  );
};

export default Card;
