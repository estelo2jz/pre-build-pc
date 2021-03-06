import React from "react";

import About1 from '../../../assets/images/about/about1.png';
import About2 from '../../../assets/images/about/about2.png';
import About3 from '../../../assets/images/about/about3.png';
import About4 from '../../../assets/images/about/about4.jpg';
import AboutBG from '../../../assets/images/about/aboutBG.jpg';
import Avatar1 from '../../../assets/images/about/avatar1.jpg';
import Avatar2 from '../../../assets/images/about/avatar2.jpg';
import Avatar3 from '../../../assets/images/about/avatar3.jpg';

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
