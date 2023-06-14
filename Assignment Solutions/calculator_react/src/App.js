import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        const evalResult = eval(display);
        setResult(evalResult);
        setDisplay(evalResult);
      } catch (error) {
        setResult("Error");
        setDisplay("");
      }
    } else if (value === "C") {
      setDisplay("");
      setResult("");
    } else {
      setDisplay((prevDisplay) => prevDisplay + value);
    }
  };

  return (
    <div className="app">
      <div className="calculator">
        <div className="display">
          <input type="text" value={display} readOnly />
        </div>

        <table>
          <tr>
            <td onClick={() => handleClick("C")}>C</td>
            <td onClick={() => handleClick("/")}>/</td>
            <td onClick={() => handleClick("*")}>*</td>
            <td onClick={() => handleClick("-")}>-</td>
          </tr>
          <tr>
            <td onClick={() => handleClick("7")}>7</td>
            <td onClick={() => handleClick("8")}>8</td>
            <td onClick={() => handleClick("9")}>9</td>
            <td rowSpan={2} onClick={() => handleClick("+")}>
              +
            </td>
          </tr>
          <tr>
            <td onClick={() => handleClick("4")}>4</td>
            <td onClick={() => handleClick("5")}>5</td>
            <td onClick={() => handleClick("6")}>6</td>
          </tr>
          <tr>
            <td onClick={() => handleClick("1")}>1</td>
            <td onClick={() => handleClick("2")}>2</td>
            <td onClick={() => handleClick("3")}>3</td>
            <td rowSpan={2} onClick={() => handleClick("=")}>
              =
            </td>
          </tr>
          <tr>
            <td onClick={() => handleClick("0")}>0</td>
            <td onClick={() => handleClick(".")}>.</td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default App;
