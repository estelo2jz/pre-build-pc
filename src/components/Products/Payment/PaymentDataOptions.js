import './PaymentOptions.scss';

export const Data = [
  {
    paymentOption: "Credit card",
    answer:
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
  },
  {
    paymentOption: "Paypal",
    answer:
      "Once we process your order, we should have it shipped within 3-4 week. You will receive tracking information via email.",
  },
  {
    paymentOption: "Pay over time",
    answer:
      "We offer a 30 day return policy from the day you receive your order, re-stocking fees may apply unless there is an issue with the PC.",
  },
];
