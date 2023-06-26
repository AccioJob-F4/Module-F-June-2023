import React from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  addToCartAction,
  increaseDecreaseItem,
  removeFromCartAction,
} from "../../../store/actions";

const QuantityCounter = ({ id }) => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const getItemQuantityInCart = () => {
    const currentItem = store.cart.filter((cartItem) => cartItem.id === id);

    return currentItem.length ? currentItem[0].quantity : 0;
  };

  const getAvailableQuantity = () => {
    const currentItem = store.originalList.filter(
      (product) => product.id === id
    );

    return currentItem[0]?.availableQuantity;
  };

  const handleItemQuantityChange = (action) => {
    const prevQuantityInCart = getItemQuantityInCart();

    if (prevQuantityInCart === 0) {
      dispatch(
        addToCartAction({
          id: id,
        })
      );
    } else {
      action === "decrement"
        ? prevQuantityInCart > 1
          ? dispatch(
              increaseDecreaseItem({
                id: id,
                newQuantity: prevQuantityInCart - 1,
              })
            )
          : dispatch(removeFromCartAction({ id: id }))
        : dispatch(
            increaseDecreaseItem({
              id: id,
              newQuantity: prevQuantityInCart + 1,
            })
          );
    }
  };

  return (
    <div className="quantity-counter-box">
      <button
        disabled={!getItemQuantityInCart()}
        onClick={() => {
          handleItemQuantityChange("decrement");
        }}
      >
        -
      </button>
      <input
        type="text"
        className="quantity-counter-input"
        value={getItemQuantityInCart()}
      />
      <button
        disabled={!getAvailableQuantity()}
        onClick={() => {
          handleItemQuantityChange("increment");
        }}
      >
        +
      </button>
    </div>
  );
};

export default QuantityCounter;
