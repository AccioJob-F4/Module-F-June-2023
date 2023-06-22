import React from "react";
import Accordion from "./Accordion";

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <Accordion title="Accordion 1">
        <p>Accordion content 1</p>
      </Accordion>
      <Accordion title="Accordion 2">
        <p>Accordion content 2</p>
      </Accordion>
    </div>
  );
};

export default App;
