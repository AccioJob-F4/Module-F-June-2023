// import React, { Component } from "react";

// export default class Greeting extends Component {
//   componentWillUnmount() {
//     console.log("componentWillUnmount");
//   }

//   render() {
//     return <h1>Hello World!</h1>;
//   }
// }

import React, { useEffect } from "react";

const Greeting = () => {
  useEffect(() => {
    return () => {
      // console.log("componentWillUnmount");
    };
  }, []);

  return <h1>Hello World!</h1>;
};

export default Greeting;
