import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./ProductDetail.css";
import QuantityCounter from "../ui/QuantityCounter/QuantityCounter";

const ProductDetail = () => {
  const [product, setProduct] = useState({});

  const navigate = useNavigate();
  const params = useParams();
  const store = useSelector((state) => state);

  useEffect(() => {
    const currentProduct = store.originalList.filter((productObj) => {
      if (params.productId === productObj.id) return productObj;
    })[0];

    setProduct({ ...currentProduct });
  }, []);

  return (
    <div className="productdetail-box">
      <button
        onClick={() => {
          navigate("/productlist");
        }}
      >
        Back
      </button>
      <div className="productdetail-body">
        <div className="productdetail-left">
          <img src={product?.imgSrc} />
        </div>
        <div className="productdetail-right">
          <div className="productdetail-heading">{product?.name}</div>
          <div className="productdetail-price">{product?.price}</div>
          <div className="productdetail-warranty">
            Warranty : {product?.desc?.warranty}
          </div>
          <div className="productdetail-key-features">
            <h2>Key features : </h2>
            <ul>
              {product?.desc?.keyFeatures.map((feature) => {
                return <li>{feature}</li>;
              })}
              <li>feature1</li>
            </ul>
          </div>
          <QuantityCounter id={params.productId} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
