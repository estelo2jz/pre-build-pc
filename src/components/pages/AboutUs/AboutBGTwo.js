import React from "react";

import About2 from '../../../assets/images/about/about2.png';


import './styles/AboutTwo.scss';

const AboutBGTwo = () => {
  return (
    <div className="about-two">
      <div className="about-two__bottom">
        <div className="about-two__bottom-contents">
          <img src={About2} alt="" />
        </div>
      </div>
      <div className="about-two__top">
        <div className="about-two__top-contents">
          <h4>MAXIMUM FRAME RATES.</h4>
          <p>
            Select your top games and see how they perform using our online PC builder. Our team will build and optimize your PC to deliver the highest frame rates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBGTwo;
