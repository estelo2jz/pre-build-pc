import React from 'react';

import FinaceOne from '../../../assets/images/finance/finance1.png';

import './styles/FinanceTop.scss';

const FinanceTop = () => {
  return (
    <div className="finance-top">
      <div className="finance-top__bottom">
        <div className="finance-top__bottom-contents">
          <img src={FinaceOne} alt="" />
        </div>
      </div>
      <div className="finance-top__top">
        <div className="finance-top__top-contents">
          <h4>0% APR Available for 6-Month Financing*</h4>
          <p>
          Redux has teamed up with Bread® to offer easy and affordable financing for our customers, so you can pay for your purchase over time.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FinanceTop
