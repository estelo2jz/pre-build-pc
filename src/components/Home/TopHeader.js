import React from "react";
import {Link} from 'react-router-dom';
import { Parallax } from 'react-parallax';

import "./styles/TopHeader.scss";
import "./styles/parallax.scss";
import TopBG from '../../assets/images/home/homeBg3.jpg';


const TopHeader = () => {
  return (
<Parallax className="image top-header" blur={0} bgImage={TopBG} strength={800} bgImageStyle={{minheight: "100vh"}}>
      <div className="top-header__container">
        <div className="top-header__heading">
          <div className="top-header__heading-top">
            <p>GAMING PCS</p>
          </div>
          <div className="top-header__heading-bottom">
            <p>Optimized for your budget.</p>
          </div>
        </div>
        <div className="top-header__bottom">
          <Link to="/products" className="top-header__build">
            <button>START YOUR BUILD</button>
          </Link>
          <Link to="/products" className="top-header__best">
            <button>BEST SELLERS</button>
          </Link>
        </div>
      </div>
      </Parallax>
  );
};

export default TopHeader;
