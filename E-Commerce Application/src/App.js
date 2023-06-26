// Create folder structure    DONE
// Create Routes for pages    DONE
// Create UI for different pages and different reusable components    DONE
// integrate reduxStore and display dynamic values in pages rather than having static ones    DONE
// define the actions and create reducer for the same to have logic in place
// integrate redux-devtools-extension to keep track of actions while debugging

import React from "react";

import Home from "./components/Home/Home";
import CustomRoutes from "./CustomRoutes";

const App = () => {
  return (
    <div>
      <Home />
      <CustomRoutes />
    </div>
  );
};

export default App;
