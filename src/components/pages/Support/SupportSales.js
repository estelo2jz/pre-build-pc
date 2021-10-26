import React from "react";

import AccordionSales from './Data/AccordionSales';

import "./styles/SupportSales.scss";

const SupportSales = () => {
  return (
    <div className="support-sale">
      <div className="support-sale__heading">
        <p>SALES</p>
      </div>
      <div className="support-sale__text">
        <p>
          Buying a new PC may feel overwhelming, but we've made it simple and
          easy. Here's a list of common questions and answers we come across
          often. For additional help, contact our team for expert advice.
        </p>
      </div>
      <AccordionSales />
    </div>
  );
};

export default SupportSales;
