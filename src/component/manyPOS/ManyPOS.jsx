import React from "react";
import data from "./data";
import centerAn from "../../Images/animation logos";
import testimonial from "../../Images/carsouel";

import "./style.scss";

const ManyPOS = () => {
  return (
    <div className="manypos">
      <div className="many_head">
        <img src={testimonial.star} />
        <span>Many Problem one Solution</span>
        <img src={testimonial.star} />
      </div>

      <div className="many__container">
        <div className="many__left many__problems">
          {data.left.map((item, i) => (
            <img key={i} src={item} />
          ))}
        </div>

        <div className="many__center">
            <img src={centerAn.rotate} className="many__roter" />
            <img src={centerAn.sun} className="many__sun"/>
        </div>

        <div className="many__right many__problems">
          {data.right.map((item, i) => (
            <img key={i} src={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManyPOS;
