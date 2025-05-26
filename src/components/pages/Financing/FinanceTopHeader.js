import React from 'react';
import { Link } from 'react-router-dom';

import './styles/FinanceTopHeader.scss';


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
          <Link to="/getmyrate">
            <button>GET MY RATE</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TopHeader
