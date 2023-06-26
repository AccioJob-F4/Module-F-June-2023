import React from "react";
import { useSelector } from "react-redux";
import uniqid from "uniqid";

import "./ProductList.css";
import Card from "../ui/Card/Card";

const ProductList = () => {
  const store = useSelector((state) => state);

  return (
    <div className="product-list">
      {store.originalList.map((product) => {
        return (
          <Card
            key={uniqid()}
            name={product?.name}
            price={product?.price}
            id={product?.id}
            img={product?.imgSrc}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
