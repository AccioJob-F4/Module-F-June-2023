import React from "react";

const Greeting = ({ name }) => {
  return <div>Hello, {name}</div>;
};

Greeting.defaultProps = {
  name: "User",
};

export default Greeting;
