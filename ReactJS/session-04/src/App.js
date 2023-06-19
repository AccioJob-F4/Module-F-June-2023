import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { INCREMENT, DECREMENT } from "./actions/actions";

import "./App.css";

const App = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleActionDispatch = (operation) => {
    dispatch({ type: operation });
  };

  return (
    <div className="app">
      <div className="app-container">
        <h1>Counter : {count}</h1>

        <div className="buttons">
          <button
            onClick={() => {
              handleActionDispatch(DECREMENT);
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              handleActionDispatch(INCREMENT);
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
