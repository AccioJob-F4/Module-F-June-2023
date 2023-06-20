import React from "react";
import AnalogClock from "./AnalogClock";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="content">
        <div className="analog-label">Analog Clock</div>
        <AnalogClock />
      </div>
    </div>
  );
};

export default App;
