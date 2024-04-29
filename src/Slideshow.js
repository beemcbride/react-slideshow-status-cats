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

  return (
    <div className="slideshow-container">
      <div className="slide-container buttons">
        <button onClick={goToPreviousSlide}>Previous</button>
        <button onClick={goToNextSlide}>Next</button>
      </div>
      {slides.map((each, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? "active" : ""}`}
        >
          <img
            className="lazy"
            src={statusCatUrl + each.code}
            alt={each.caption}
          />
          <div>
            <h4 className="caption">
              HTTP Status {each.code} Cat: {each.caption}
            </h4>
            <span className="link">
              For more information, please visit mdn web docs for&nbsp;
              <a
                href={statusCodeUrl + each.code}
                target="_blank"
                rel="noreferrer"
              >
                HTTP status code {each.code}
              </a>
              .
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
