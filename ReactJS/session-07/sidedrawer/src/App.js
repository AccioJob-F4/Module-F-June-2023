import React, { useState } from "react";
import "./App.css";
import SideDrawer from "./SideDrawer";

const App = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <div className="app">
      <header>
        <button onClick={toggleDrawer}>Toggle Drawer</button>
      </header>
      <main>
        <h1>Content Goes Here</h1>
      </main>
      <SideDrawer show={showDrawer}>
        <div>Side Drawer content here</div>
      </SideDrawer>
    </div>
  );
};

export default App;
