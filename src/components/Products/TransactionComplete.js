import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Transaction.scss';

const TransactionComplete = () => {
  return (
    <section className="thankyou">
    <div className="thankyou__container">
      <div className="thankyou__icon">🎉</div>
      <h1 className="thankyou__title">Thank You for Your Purchase!</h1>
      <p className="thankyou__message">
        Your order has been received and is now being processed. We’ve sent
        you a confirmation email with your receipt and order details.
      </p>
      <div className="thankyou__details">
        <p><strong>Order Number:</strong> #123456</p>
        <p><strong>Estimated Delivery:</strong> 3-5 Business Days</p>
      </div>
      <div className="thankyou__actions">
        <NavLink to="/" className="btn btn--primary">Continue Shopping</NavLink>
        <NavLink to="/" className="btn btn--outline">View Order</NavLink>
      </div>
    </div>
  </section>
  )
}

export default TransactionComplete
