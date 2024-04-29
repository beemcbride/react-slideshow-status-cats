import React, { useState, useEffect } from "react";
import "./Slideshow.css";

const Slideshow = ({ slides }) => {
  const statusCatUrl = "https://http.cat/";
  const statusCodeUrl =
    "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/";
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(prevIndex);
  };

  const goToNextSlide = () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goToNextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  });

  const currentSlide = slides[currentIndex];

  return (
    <div className="slideshow-container">
      <div className="slide-container buttons">
        <button onClick={goToPreviousSlide}>Previous</button>
        <button onClick={goToNextSlide}>Next</button>
      </div>
      <div className="slide active">
        <img
          className="lazy"
          src={statusCatUrl + currentSlide.code}
          alt={currentSlide.caption}
        />
        <div>
          <h4 className="caption">
            HTTP Status {currentSlide.code} Cat: {currentSlide.caption}
          </h4>
          <p>
            For more information, please visit mdn web docs for&nbsp;
            <a
              href={statusCodeUrl + currentSlide.code}
              target="_blank"
              rel="noreferrer"
            >
              HTTP status code {currentSlide.code}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
