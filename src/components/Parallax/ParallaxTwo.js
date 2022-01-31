import React from 'react';
import { Parallax } from 'react-parallax';
import './parallax.scss';

import FortniteBG from './fortnite.jpg';

const ParallaxTwo = () => {
  return (
    <Parallax className="image" blur={0} bgImage={FortniteBG} strength={800} bgImageStyle={{minheight: "100vh"}}>
      <div className="content">
        <span className="img-txt">a trip to Sapce</span>
      </div>
    </Parallax>
  );
};

export default ParallaxTwo;
