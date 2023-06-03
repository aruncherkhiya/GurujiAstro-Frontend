import React from "react";
import commonImg from "../../Images";
import header from "../../Images/header";
import { GiHamburgerMenu } from 'react-icons/gi'

import "./style.scss";

const Header = () => {

  // background image
  const style = {
    backgroundImage: `url(${header.headerBg})`,
  };
  return (
    <div className="header" style={style}>
        <div className="header__navContainer">
          <div className="header__logo">
          <GiHamburgerMenu className="header__ham"/>
            <img src={commonImg.gurujiLogo} alt="logo" />
            <p>Guruji</p>
          </div>
          <div className="header__nav">
            <p>Home</p>
            <p>Call with Astrologer</p>
            <p>Live(Coming Soon) </p>
          </div>
          <div className="header__profile">
            <img src={header.profile} alt="logo" />
          </div>
        </div>

      <div className="header__title">
        <p>"Astrology for Clarity"</p>
        <article>
          Your Name is a Vedic Astrologer and has expertise in Vaastu and Mantra
          Theraphy
        </article>
      </div>

      <div className="header__btnContainer">
        <button className="header__consultBtn">Consult Now</button>
      </div>

      <div className="header__lowNav">
        <div className="header__service">
          <img src={header.customer} alt="customer-care" />
          <p>24 X 7 Customer Support </p>
        </div>
        <div className="header__service ">
          <img src={header.refund} alt="customer-care" className="refund" />
          <p>100% Refund if Unsatisfied</p>
        </div>
        <div className="header__service">
          <img src={header.privat} alt="customer-care" />
          <p>Private & Confidential</p>
        </div>
        <div className="header__service">
          <img src={header.verified} alt="customer-care" />
          <p>
            Verified <br /> Astrologer
          </p>
        </div>
        <div className="header__service">
          <img src={header.secure} alt="customer-care" />
          <p>
            Secure <br /> Payment
          </p>
        </div>
      </div>

      <div className="header__cour">
        <img src={header.bDot} />
        <img src={header.lDot} />
        <img src={header.lDot} />
      </div>
    </div>
  );
};

export default Header;
