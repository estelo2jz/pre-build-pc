import React from "react";

import FinanceTopHeader from "./FinanceTopHeader";
import FinanceTop from "./FinanceTop";
import FinanceBottom from "./FinanceBottom";
import FinanceRate from "./FinanceRate";

import './styles/Financing.scss';

const Financing = () => {
  return (
    <div className="finance__main">
      <FinanceTopHeader />
      <FinanceTop />
      <FinanceBottom />
      <FinanceRate />
    </div>
  );
};

export default Financing;
