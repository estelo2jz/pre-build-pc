import React from "react";

import "./styles/Pricing.scss";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="pricing__container">
        <div className="pricing__outer">
          <div className="pricing__card">
            <div className="pricing__heading">
              <p>Low Pricing</p>
            </div>
            <div className="pricing__bio">
              <p>We believe in bringing custom gaming computers to the masses, that's why we only charge a small build fee and don't cut corners on quality.</p>
            </div>
          </div>
          <div className="pricing__card">
            <div className="pricing__heading">
              <p>Max Frame Rates</p>
            </div>
            <div className="pricing__bio">
              <p>Select your top games and see how they perform using our online PC builder. Our team will build and optimize your gaming PC to deliver the highest frame rates.</p>
            </div>
          </div>
          <div className="pricing__card">
            <div className="pricing__heading">
              <p>2 Year Warranty</p>
            </div>
            <div className="pricing__bio">
              <p>You're protected with us. Our team of in-house gamers will get you back up and running if you run into any issues. All gaming desktops include parts and labor coverage.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pricing__btn">
        <div className="pricing__btn-container">
          <button>GET STARTED</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
