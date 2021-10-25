import React from 'react';
import './styles/FinanceRate.scss';

const FinanceRate = () => {
  return (
    <div className="finance-rate">
      <div className="finance-rate__container">
        <div className="finance-rate__heading">
          <p>CHECK YOUR RATE IN SECONDS WITHOUT LEAVING OUR SITE</p>
        </div>
        <div className="finance-rate__btn">
          <button>GET MY RATE</button>
        </div>
        <div className="finance-rate__help">
          <p>QUESTIONS? HELP?</p>
        </div>
        <div className="finance-rate__faq">
          <p>
          Check Bread®'s <span>FAQ</span> or reach Bread® directly at <span>support@getbread.com</span> or call 844-992-7323.
          </p>
        </div>
        <div className="finance-rate__subject">
          <p>
          *Subject to approval of credit application. Rates range from 0% to 29.99% APR, resulting in, for example, 36 monthly payments of $32.26 at 9.99% APR, per $1,000 borrowed.
          </p>
          <p>
          APRs will vary depending on credit qualifications, loan amount, and term. Bread® pay-over-time plans are loans made by Comenity Capital Bank.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FinanceRate
