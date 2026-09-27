import React from "react";
import { Link } from "react-router-dom";

import "./styles/Pricing.scss";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="pricing__container">
        <div className="pricing__header-title">
          <h2>Why Choose PC Evolvers</h2>
          <p>Engineered for performance, backed by value.</p>
        </div>
        <div className="pricing__outer">
          <div className="pricing__card">
            <div className="pricing__icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <div className="pricing__heading">
              <h3>Low Pricing</h3>
            </div>
            <div className="pricing__bio">
              <p>We believe in bringing custom gaming computers to the masses, that's why we only charge a small build fee and don't cut corners on quality.</p>
            </div>
          </div>

          <div className="pricing__card pricing__card--featured">
            <div className="pricing__icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <div className="pricing__heading">
              <h3>Max Frame Rates</h3>
            </div>
            <div className="pricing__bio">
              <p>Select your top games and see how they perform using our online PC builder. Our team will build and optimize your gaming PC to deliver the highest frame rates.</p>
            </div>
          </div>

          <div className="pricing__card">
            <div className="pricing__icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.249-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" />
              </svg>
            </div>
            <div className="pricing__heading">
              <h3>2 Year Warranty</h3>
            </div>
            <div className="pricing__bio">
              <p>You're protected with us. Our team of in-house gamers will get you back up and running if you run into any issues. All gaming desktops include parts and labor coverage.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="pricing__btn">
        <div className="pricing__btn-container">
          <Link to="/products" className="pricing__action-btn">
            GET STARTED
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;