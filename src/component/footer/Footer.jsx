import React from "react";
import commonImg from "../../Images";
import socialLogos from "../../Images/footer/socials";
import pay from "../../Images/footer/trustedSeals";

import "./style.scss";

const Footer = () => {
  const socialIcons = [
    socialLogos.facebook,
    socialLogos.instaI,
    socialLogos.twitter,
    socialLogos.yt,
  ];
  const payment = [pay.razorpay, pay.paytm, pay.stripe];
  return (
    <div className="footer">
      <div className="footer__description">
        <div className="footer__logoSocials">
          <img src={commonImg.gurujiLogo} />
          <h2>Guruji</h2>
        </div>
        <p>
          About Guruji s2 to 3 lines what guruji do and how it works About
          Guruji s2 to 3 lines what guruji do and how it works
        </p>
        <div className="footer__social">
          {socialIcons.map((icon, i) => (
            <img src={icon} key={i}/>
          ))}
        </div>
        <div className="footer__pay">
          <p>Trusted & Seals</p>
          {payment.map((pay, i) => (
            <img src={pay} key={i}/>
          ))}
        </div>
      </div>

      <div className="footer__middleContainer">
        <div>
          <h3>Company</h3>
          <div>
            <p>Home</p>
            <p>Privacy Policy</p>
            <p>T & C</p>
            <p>Varied Payment</p>
          </div>
        </div>
        <div>
          <h3>Collaborate</h3>
          <div>
            <p>Clever Tap</p>
            <p>Exotel </p>
            <p>Facebook</p>
            <p> Quora</p>
            <p> Google</p>
            <p> Youtube</p>
          </div>
        </div>
        <div>
          <h3>Support</h3>
          <div>
            <p>Home</p>
            <p>Privacy Policy</p>
            <p>T & C</p>
            <p>Varied Payment</p>
          </div>
        </div>
        <div>
          <h3>Important Link</h3>
          <div>
            <p>Tarot Reader</p>
            <p>Vedic Astrology</p>
            <p>Palmistry</p>
            <p>Gemology</p>
            <p>Vastu</p>
            <p>Numerology</p>
          </div>
        </div>
      </div>

      <div className="footer__form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Mail Id" />
        <textarea type="text" placeholder="Write Query" />
        <input type="button" value="Submit" className="footer__btn" />
      </div>
    </div>
  );
};

export default Footer;
