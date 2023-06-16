// import { Component } from "react";
// import Greeting from "./Greeting";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0, unMounted: false };

//     console.log("CONSTRUCTOR");
//   }

//   componentWillMount() {
//     console.log("componentWillMount");
//   }

//   componentDidMount() {
//     console.log("componentDidMount");
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log("shouldComponentUpdate : ", {
//       nextProps,
//       nextState,
//       state: this.state.count,
//     });
//     if (nextState.count % 2 == 0) return true;
//     return true;
//   }

//   componentWillUpdate() {
//     console.log("componentWillUpdate");
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log("componentDidUpdate : ", {
//       prevProps,
//       prevState,
//       state: this.state.count,
//     });
//   }

//   handleClick = (op) => {
//     if (op === "+") this.setState({ count: this.state.count + 1 });
//     else this.setState({ count: this.state.count - 1 });

//     console.log(this.state.count);
//   };

//   render() {
//     console.log("render");
//     return (
//       <div>
//         <div>
//           Counter : {this.state.count}
//           <br />
//           <button onClick={() => this.handleClick("+")}>Increment</button>
//           <br />
//           <button onClick={() => this.handleClick("-")}>Decrement</button>
//           <br />
//           <br />
//           <button
//             onClick={() => {
//               this.setState({ unMounted: !this.state.unMounted });
//             }}
//           >
//             Mount/Unmount
//           </button>
//         </div>
//         {!this.state.unMounted && <Greeting />}
//       </div>
//     );
//   }
// }

// export default App;

// import React, { useState, useEffect } from "react";
// import Greeting from "./Greeting";
// import useWindowWidth from "./useWindowWidth";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [unMounted, setUnmounted] = useState(false);

//   console.log(useWindowWidth());

//   useEffect(() => {
//     // console.log("componentDidMount");
//   }, []);

//   useEffect(() => {
//     // console.log("componentDidUpdate");
//   }, [count]);

//   const handleClick = (op) => {
//     if (op === "+") setCount(count + 1);
//     else setCount(count - 1);
//   };
//   return (
//     <div>
//       Counter : {count}
//       <br />
//       <button onClick={() => handleClick("+")}>Increment</button>
//       <br />
//       <button onClick={() => handleClick("-")}>Decrement</button>
//       <button
//         onClick={() => {
//           setUnmounted(!unMounted);
//         }}
//       >
//         Mount/Unmount
//       </button>
//       {!unMounted && <Greeting />}
//     </div>
//   );
// };

// export default App;

import React from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Product from "./Product";
import Greeting from "./Greeting";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/greeting">Greeting</Link>
            {/* <a href="/greeting">Greeting</a> */}
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/product" element={<Product />} />
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
