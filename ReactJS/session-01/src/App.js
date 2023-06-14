// import React, { useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(10);

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <h1>Counter : {count}</h1>
//     </div>
//   );
// };

// export default App;

// ==========================================================================================

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Increment
//         </button>

//         <h1>Counter : {this.state.count}</h1>
//       </div>
//     );
//   }
// }

// export default App;

// ==========================================================================================

// const App = () => {
//   return <div>Hello World !</div>;
// };

// export default App;

// function App() {
//   return React.createElement("div", null, "Hello World!");
// }

// ==========================================================================================

// import React, { useState, useRef } from "react";

// const App = () => {
// Controlled Component
// const [value, setValue] = useState("");
// const handleChange = (event) => {
//   setValue(event.target.value);
// };
// return <input type="text" value={value} onChange={handleChange} />;

// Uncontrolled component
//   const inputRef = useRef(null);
//   console.log({ inputRef });

//   const handleButtonClick = () => {
//     console.log(inputRef.current.value);
//   };

//   return (
//     <div>
//       <input className="hola" type="text" ref={inputRef} />
//       <button onClick={handleButtonClick}>Submit</button>
//     </div>
//   );
// };

// export default App;

// ==========================================================================================

import React from "react";
// import "./App.css";
import styled from "styled-components";

const App = () => {
  // Inline styles
  // const styles = {
  //   backgroundColor: "dodgerblue",
  //   color: "white",
  //   fontSize: "200px",
  // };
  // return <div style={styles}>App</div>;

  // CSS Modules
  // return <div className="app">App</div>;

  // CSS in JS Libraries
  const StyledComponent = styled.div`
    background-color: dodgerblue;
    color: white;
    font-size: 200px;
  `;

  return <StyledComponent>App</StyledComponent>;
};

export default App;
