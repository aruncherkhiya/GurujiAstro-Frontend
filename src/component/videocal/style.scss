import React, { useRef, useState } from "react";
import testimonial from "../../Images/carsouel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./style.scss";

const VideoCarsoul = () => {
  const image = [
    testimonial.leftLL,
    testimonial.leftLM,
    testimonial.center,
    testimonial.rightLM,
    testimonial.rightLL,
  ];

  const [activeIndex, setActiveIndex] = useState(2);
  const sliderRef = useRef(null);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 5,
    initialSlide: 2,
    speed: 300,
    beforeChange: (current, next) => {
      setActiveIndex(next);
    },
    ref: sliderRef,
    responsive: [
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
    ],
  };

  const handleLeftArrowClick = () => {
    if (activeIndex === 0) setActiveIndex(4);
    else setActiveIndex(activeIndex - 1);
    sliderRef.current.slickPrev();
  };

  const handleRightArrowClick = () => {
    if (activeIndex === 4) setActiveIndex(0);
    else setActiveIndex(activeIndex + 1);
    sliderRef.current.slickNext();
  };

  return (
    <div className="carousel">
      <div className="carousel__container">
        <div className="carousel__head">
          <img src={testimonial.sun} className="sun" />
          <div className="car_head">
            <img src={testimonial.star} />
            <span>User Testimonial</span>
            <img src={testimonial.star} />
          </div>
        </div>

        <div className="carousel__main">
          <div className="carousel__slides">
            <Slider {...settings} className="c__slider">
              {image.map((img, i) => (
                <div
                  key={i+10}
                  className={`image-container ${
                    activeIndex === i ? "active" : ""
                  }`}
                >
                  <img src={img} alt="img" className="slide__img" />
                  <div className="play-btn-cont">
                    <img src={testimonial.play} />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="carousel__btn">
            <button className="leftC slidBtn" onClick={handleLeftArrowClick}>
              <img src={testimonial.leftAr} />
            </button>
            <button className="rightC slidBtn" onClick={handleRightArrowClick}>
              <img src={testimonial.rightAr} />
            </button>
          </div>
        </div>

        <div className="carsouel__template">
          <img src={testimonial.banner} />
        </div>

        <div className="carsouel__dots">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default VideoCarsoul;
