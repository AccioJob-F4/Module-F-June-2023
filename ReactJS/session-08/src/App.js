import React, { useRef } from "react";

import useLocalStorageWithExpiry from "./hooks/useLocalStorageWithExpiry";
import useClickOutside from "./hooks/useClickOutside";

const App = () => {
  const [value, setValue] = useLocalStorageWithExpiry("key", "value", 2);

  const ref = useRef(null);

  const clickedOutside = () => {
    console.log("CLICKED OUTSIDE");
  };

  const val = useClickOutside(ref, clickedOutside);

  {
    console.log(val);
  }

  return (
    <div>
      <button ref={ref}>Click</button>
    </div>
  );
};

export default App;
