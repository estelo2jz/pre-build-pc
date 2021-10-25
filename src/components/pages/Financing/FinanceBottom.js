import React from "react";

import FinaceTwo from "../../../assets/images/finance/finance2.png";

import "./styles/FinanceBottom.scss";

const FinanceTop = () => {
  return (
    <div className="finance-bottom">
      <div className="finance-bottom__top">
        <div className="finance-bottom__top-contents">
          <h4>FINANCE THATS FLEXIBLE</h4>
          <span>Affordable Monthly Plans</span>
          <p>
            Buy now and pay for your purchase over time at competitive interest
            rates.
          </p>
          <span>Quick and Easy Application</span>
          <p>
            Get a decision in seconds with no obligation to buy. Checking your
            rate won’t affect your credit score.
          </p>
          <span>No Payment Penalties</span>
          <p>
            Pay for your purchase with monthly payments and prepay at anytime
            without a penalty.
          </p>
        </div>
      </div>
      <div className="finance-bottom__bottom">
        <div className="finance-bottom__bottom-contents">
          <img src={FinaceTwo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FinanceTop;
