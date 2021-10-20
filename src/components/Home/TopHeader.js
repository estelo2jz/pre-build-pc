import React from "react";

import "./styles/TopHeader.scss";

const TopHeader = () => {
  return (
    <div className="top-header">
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
          <div className="top-header__build">
            <button>START YOUR BUILD</button>
          </div>
          <div className="top-header__best">
            <button>BEST SELLERS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
