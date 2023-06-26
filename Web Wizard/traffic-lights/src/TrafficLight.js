import React, { useEffect, useState } from "react";
import "./TrafficLight.css";

const TrafficLight = () => {
  const [currentLight, setCurrentLight] = useState("red");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLight((prevLight) => {
        console.log({ prevLight });
        console.log(getLightDuration(currentLight));
        if (prevLight === "red") return "green";
        if (prevLight === "green") return "yellow";
        if (prevLight === "yellow") return "red";
      });
    }, getLightDuration(currentLight));

    return () => {
      clearInterval(timer);
    };
  }, [currentLight]);

  const getLightDuration = (light) => {
    switch (light) {
      case "red":
        return 4000;
      case "yellow":
        return 500;
      case "green":
        return 3000;
      default:
        return 0;
    }
  };

  return (
    <div className="traffic-light">
      <div
        className={`light red ${currentLight === "red" ? "active" : ""}`}
      ></div>
      <div
        className={`light yellow ${currentLight === "yellow" ? "active" : ""}`}
      ></div>
      <div
        className={`light green ${currentLight === "green" ? "active" : ""}`}
      ></div>
    </div>
  );
};

export default TrafficLight;
