import React, { useEffect, useState } from "react";

import "./AnalogClock.css";

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;

  const secondStyle = {
    transform: `rotate(${(seconds / 60) * 360}deg)`,
  };

  const minuteStyle = {
    transform: `rotate(${(minutes / 60) * 360}deg)`,
  };

  const hourStyle = {
    transform: `rotate(${(hours / 12) * 360}deg)`,
  };

  return (
    <div>
      <div className="clock">
        <div className="hand hour-hand" style={hourStyle}></div>
        <div className="hand minute-hand" style={minuteStyle}></div>
        <div className="hand second-hand" style={secondStyle}></div>
      </div>

      <div className="digital-clock">
        <span className="digital-hour">{hours}</span>:
        <span className="digital-minutes">{minutes}</span>:
        <span className="digital-seconds">{seconds}</span>
      </div>
    </div>
  );
};

export default AnalogClock;
