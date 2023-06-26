import React from "react";
import "./HolyGrailLayout.css";

const HolyGrailLayout = () => {
  return (
    <div className="holy-grail-layout">
      <header className="header">Header</header>
      <div className="columns-wrapper">
        <div className="left-column">Left Column</div>
        <div className="middle-column">Middle Column</div>
        <div className="right-column">Right Column</div>
      </div>
      <footer className="footer">Footer</footer>
    </div>
  );
};

export default HolyGrailLayout;
