import React from "react";
import testimonial from "../../Images/carsouel";
import card from "./data";
import AstroCard from "../astrocard/AstroCard";

import "./style.scss";
import commonImg from "../../Images";

const Astrologers = () => {
  return (
    <div className="astroCC">
      <div className="astro">
        <div className="asto__container">
          <div className="astro__head">
            <div className="car_head">
              <img src={testimonial.star} />
              <span>Premium Astrologers</span>
              <img src={testimonial.star} />
            </div>
          </div>

          <div className="astro__card">
            <div className="astro__card1">
              {card.cardSection1.map((astrologer, i) => (
                <AstroCard
                  key={i}
                  astro={astrologer}
                  active={astrologer.islive}
                />
              ))}
            </div>
            <div className="astro__card2">
              {card.cardSection2.map((astrologer, i) => (
                <AstroCard
                  key={i}
                  astro={astrologer}
                  active={astrologer.islive}
                />
              ))}
            </div>
            <div className="astro__card3">
              {card.cardSection3.map((astrologer, i) => (
                <AstroCard
                  key={i}
                  astro={astrologer}
                  active={astrologer.islive}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="astro__bottom">
        <img src={commonImg.endRef} />
      </div>
    </div>
  );
};

export default Astrologers;
