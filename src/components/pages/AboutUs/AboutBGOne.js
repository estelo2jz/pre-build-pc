import React from "react";

import About1 from '../../../assets/images/about/about1.png';

import './styles/AboutOne.scss';

const AboutBGOne = () => {
  return (
    <div className="about">
      <div className="about__top">
        <div className="about__top-contents">
          <h4>We BUILD PCS FOR GAMERS.</h4>
          <p>
            We believe in bringing PC gaming to the masses. Select your budget,
            pick your games, and see how they perform, then let us build and
            optimize your gaming PC.
          </p>
        </div>
      </div>
      <div className="about__bottom">
        <div className="about__bottom-contents">
          <img src={About1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutBGOne;
