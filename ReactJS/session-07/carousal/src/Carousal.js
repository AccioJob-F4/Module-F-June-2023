import React, { useState } from "react";
import "./Carousal.css";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-button" onClick={previousImage}>
        Previous
      </button>
      <img
        className="carousel-image"
        src={images[currentIndex]}
        alt={`Image ${currentIndex}`}
      />
      <button className="carousel-button" onClick={nextImage}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
