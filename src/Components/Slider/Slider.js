import React, { useEffect, useState } from "react";
import slides from "./dataSlider";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  useEffect(() => {
    if (current < 0) {
      setCurrent(length - 1);
    }
    if (current > length - 1) {
      setCurrent(0);
    }
  });
  useEffect(() => {
    let slider = setInterval(() => {
      setCurrent(current + 1);
    }, 5000);
    return () => clearInterval(slider);
  }, [current]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <div className="slider-title">
        <h2>What We Offers !!</h2>
        <div className="slider-underline"></div>
      </div>
      <section className="slider">
        <FiChevronLeft className="left-arrow" onClick={prevSlide} />
        <FiChevronRight className="right-arrow" onClick={nextSlide} />

        {slides.map((slide) => {
          const { id, img } = slide;
          return (
            <div className={id === current ? "slide active" : "slide"} key={id}>
              {id === current && <img src={img} alt="img" />}
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Slider;
