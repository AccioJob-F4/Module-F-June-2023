import React, { useState } from "react";

const App = () => {
  const [time, setTime] = useState("");

  setInterval(() => {
    setTime(dateTime(new Date()));
  }, 1000);

  const dateTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ap = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes.toString().padStart(2, "0");
    let mergeTime = hours + ":" + minutes + ":" + date.getSeconds() + " " + ap;
    return mergeTime;
  };

  return (
    <p id="timer">
      {`${new Date().getMonth()}/${new Date().getDate()}/${new Date().getFullYear()}, ${time}`}
    </p>
  );
};

export default App;
