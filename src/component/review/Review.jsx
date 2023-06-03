import React from "react";
import testimonial from "../../Images/carsouel";
import commonImg from "../../Images";

import "./style.scss";

const Review = () => {
  return (
    <div className="reviewCC">
      <div className="review">
        <div className="review__container">
          <div className="review__head">
            <img src={testimonial.star} />
            <span>User Review</span>
            <img src={testimonial.star} />
          </div>

          <div className="slider">
            <img src={commonImg.review} />
          </div>
        </div>
      </div>

      <div className="review__bottom">
        <img src={commonImg.userbottom} />
      </div>
    </div>
  );
};

export default Review;
