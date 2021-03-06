import React from "react";

import About1 from '../../../assets/images/about/about1.png';
import About2 from '../../../assets/images/about/about2.png';
import About3 from '../../../assets/images/about/about3.png';
import About4 from '../../../assets/images/about/about4.jpg';
import AboutBG from '../../../assets/images/about/aboutBG.jpg';
import Avatar1 from '../../../assets/images/about/avatar1.jpg';
import Avatar2 from '../../../assets/images/about/avatar2.jpg';
import Avatar3 from '../../../assets/images/about/avatar3.jpg';

import AboutBGOne from './AboutBGOne';
import AboutBGTwo from './AboutBGTwo';
import AboutBGThree from './AboutBGThree';
import AboutBottom from './AboutBottom';

import './styles/About.scss';

const About = ({data}) => {
  return (
    <div className="about-page">
      <AboutBGOne />
      <AboutBGTwo />
      <AboutBGThree />
      <AboutBottom />
    </div>
  );
};

export default About;
