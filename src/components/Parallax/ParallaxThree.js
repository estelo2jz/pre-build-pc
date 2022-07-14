import React from 'react';
import { Parallax } from 'react-parallax';
import './parallax.scss';

import WarzoneBG from './warzone.jpg';

const ParallaxThree = () => {
  return (
    <Parallax className="image" blur={0} bgImage={WarzoneBG} strength={800} bgImageStyle={{minheight: "100vh"}}>
      <div className="content">
      </div>
    </Parallax>
  );
};

export default ParallaxThree;
