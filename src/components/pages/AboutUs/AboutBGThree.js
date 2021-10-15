import React from "react";

import About1 from '../../../assets/images/about/about1.png';
import About2 from '../../../assets/images/about/about2.png';
import About3 from '../../../assets/images/about/about3.png';
import About4 from '../../../assets/images/about/about4.jpg';
import AboutBG from '../../../assets/images/about/aboutBG.jpg';
import Avatar1 from '../../../assets/images/about/avatar1.jpg';
import Avatar2 from '../../../assets/images/about/avatar2.jpg';
import Avatar3 from '../../../assets/images/about/avatar3.jpg';

import './styles/AboutThree.scss';

const AboutBGTwo = () => {
  return (
    <div className="about-three">
      <div className="about-three__top">
        <div className="about-three__top-contents">
          <h4>2 YEAR WARRANTY.</h4>
          <p>
            You're protected with us. Our team of in-house gamers will get you back up and running if you run into any issues. All systems include parts and labor coverage.
          </p>
        </div>
      </div>
      <div className="about-three__bottom">
        <div className="about-three__bottom-contents">
          <img src={About3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutBGTwo;
