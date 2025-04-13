import React from "react";


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
