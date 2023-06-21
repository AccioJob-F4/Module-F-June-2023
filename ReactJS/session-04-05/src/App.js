import React from "react";
import { useSelector, useDispatch, connect } from "react-redux";

import { INCREMENT, DECREMENT } from "./actions/actions";

import "./App.css";

const App = (props) => {
  // const store = useSelector((state) => state);
  // const dispatch = useDispatch();

  const handleActionDispatch = (operation) => {
    props.dispatch({ type: operation });
  };

  return (
    <div className="app">
      <div className="app-container">
        <h1>Counter : {props.countFromMapStateToProps}</h1>
        {/* <h1>Counter : {store.count}</h1> */}

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

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    countFromMapStateToProps: state.count,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch: dispatch,
    ...ownProps,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
