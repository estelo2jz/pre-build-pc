import React from "react";

import FinaceBG from "../../../assets/images/finance/financebg.jpg";
import FinaceOne from "../../../assets/images/finance/finance1.png";
import FinaceTwo from "../../../assets/images/finance/finance2.png";

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
