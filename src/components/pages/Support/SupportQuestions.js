import React from 'react';

import "./styles/SupportQuestions.scss";

import SupportSales from './SupportSales';
import SupportSupport from './SupportSupport';

const SupportQ = () => {
  return (
    <div className="support-questions">
      <div className="support-questions__heading">
        <p>FREQUENTLY ASKED QUESTIONS.</p>
      </div>
      <SupportSales />
      <SupportSupport />
    </div>
  )
}

export default SupportQ
