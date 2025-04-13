import React from "react";
import "./PaymentOptions.scss";
import CreditCards from "../../../assets/images/payment/credit-cards.png";
import Paypal from "../../../assets/images/payment/paypal.png";
import Bread from "../../../assets/images/payment/bread2.png";
import Next from "../../../assets/images/payment/next.png";

export const Data = [
  {
    paymentOption: "Credit card",
    logo: CreditCards,
    answer: (
      <div className="credit-card__container">
        <div className="credit-card__main-section">
          <input type="text" placeholder="Card number" />
          <input type="text" placeholder="Name on card" />
          <div className="credit-card__main-date">
            <input type="text" placeholder="Expiration date (MM / YY)" />
            <input type="text" placeholder="Security code" />
          </div>
        </div>
      </div>
    ),
  },
  {
    paymentOption: "Pay with",
    logo: Paypal,
    answer: (
      <div className="paypal__container">
        <div className="paypal__img">
          <img src={Next} alt="" />
        </div>
        <p className="paypal__text">
          "After clicking “Complete order”, you will be redirected to PayPal to
          complete your purchase securely.",
        </p>
      </div>
    ),
  },
  {
    paymentOption: "Pay over time",
    logo: Bread,
    answer: (
      <div className="bread__container">
        <div className="bread__img">
          <img src={Next} alt="" />
        </div>
        <p className="bread__text">
          "After clicking “Complete order”, you will be redirected to Bread to
          complete your purchase securely.",
        </p>
      </div>
    ),
  },
];
