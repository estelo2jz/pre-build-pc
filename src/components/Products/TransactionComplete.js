import React from 'react';
import './styles/Transaction.scss';

const TransactionComplete = () => {
  return (
    <div className="transaction__main">
      <h1>Thank you for your purchase!</h1>
      <h1>Your order will be shipped out soon!</h1>
      <h1>You will receive a confirmation Order #!</h1>
    </div>
  )
}

export default TransactionComplete
