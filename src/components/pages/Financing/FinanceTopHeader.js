import React from 'react';

import './styles/FinanceTopHeader.scss';

import FinaceBG from '../../../assets/images/finance/financebg.jpg';

const TopHeader = () => {
  return (
    <div className="finance-top-header">
      <div className="finance-top-header__container">
        <div className="finance-top-header__top">
          <p>BUY NOW, PAY LATER</p>
        </div>
        <div className="finance-top-header__center">
          <p>EASY AND AFFORDABLE FINANCING WITH CLEAR AND TRANSPARENT TERMS.</p>
        </div>
        <div className="finance-top-header__bottom">
          <button>GET MY RATE</button>
        </div>
      </div>
    </div>
  )
}

export default TopHeader
