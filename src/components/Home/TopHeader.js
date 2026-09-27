import React from "react";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";

import "./styles/TopHeader.scss";
import "./styles/parallax.scss";
import TopBG from "../../assets/images/home/homeBg3.jpg";

const TopHeader = () => {
  return (
    <Parallax 
      className="image top-header" 
      blur={0} 
      bgImage={TopBG} 
      strength={800} 
      bgImageStyle={{ minHeight: "100vh", objectFit: "cover" }}
    >
      <div className="top-header__container">
        <div className="top-header__heading">
          <div className="top-header__heading-top">
            <span className="top-header__badge">GAMING PCS</span>
          </div>
          <div className="top-header__heading-bottom">
            <h1>Optimized for your budget.</h1>
          </div>
        </div>
        <div className="top-header__bottom">
          <Link to="/startbuild" className="top-header__btn top-header__btn--primary">
            START YOUR BUILD
          </Link>
          <Link to="/products" className="top-header__btn top-header__btn--secondary">
            BEST SELLERS
          </Link>
        </div>
      </div>
    </Parallax>
  );
};

export default TopHeader;