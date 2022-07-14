import React from 'react';
import { Parallax } from 'react-parallax';
import './parallax.scss';

// import ApexBG from '../../assets/images/home/apex.jpg';
import ApexBG from './apex.jpg';


const ParallaxOne = () => {
  return (
    <Parallax className="image" blur={0} bgImage={ApexBG} strength={800} bgImageStyle={{minheight: "100vh"}}>
      <div className="content">
      </div>
    </Parallax>
  );
};

export default ParallaxOne;
