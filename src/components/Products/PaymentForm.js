import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { DataContext } from "./Data/DataProvider";


// import PayPal from '../../assets/images/cart/paypay.svg';

import "./styles/PaymentForm.scss";

import { FcGoogle } from "react-icons/fc";
import { BsPaypal } from "react-icons/bs";
import { BiCaretRight } from "react-icons/bi";
import { AiFillCaretLeft } from "react-icons/ai";
// FcGoogle

const Payment = () => {
  const value = useContext(DataContext);
  const [cart, setCart] = value.cart;
  const [total, setTotal] = useState(0);

  const emptyCart = () => {
    setCart([]);
  }

  return (
    <div className="payment">
      <div className="payment__form">
        <div className="payment__history">
          <div className="payment__history-inner">
            {/* <Link to="/cart"></Link> */}
            <p>
              Cart
              <span>
                <BiCaretRight />
              </span>
            </p>
            {/* <Link to="/checkout"></Link> */}
            <p>
              Information
              <span>
                {" "}
                <BiCaretRight />
              </span>
            </p>
            {/* <Link to="/shipping"></Link> */}
            <p>
              Shipping
              <span>
                {" "}
                <BiCaretRight />
              </span>
            </p>
            {/* <Link to="/payment"></Link> */}
            <p>Payment</p>
          </div>
        </div>
        <div className="payment__contact-container">
          <div className="payment__contact">
            <div className="payment__contact-top">
              <p>Contact</p>
              <input type="text" placeholder="Email" />
            </div>
            <div className="payment__contact-center">
              <p>Ship to</p>
              <input type="text" placeholder="Payment Address" />
            </div>
            <div className="payment__contact-bottom">
              <p>Method</p>
              <input type="text" placeholder="Shipping Method" />
            </div>
          </div>
        </div>
        <div className="payment__payment-container">
          <div className="payment__payment-information">
            <div className="payment__payment-heading">
              <p>Payment</p>
              <p>All transactions are secure and encrypted.</p>
            </div>
            <div className="payment__payment-">
            </div>
          </div>
        </div>

        <div className="payment__biling-container">
          <div className="payment__biling-header">
            <div className="payment__biling-top">
              <p>Billing address</p>
            </div>
            <div className="payment__biling-bottom">
              <p>Select the address that matches your card or payment method.</p>
            </div>
          </div>
          <div className="payment__biling-options">
            <div className="payment__biling">
              <div className="payment__biling-same-address">
                <input type="radio" name="delivery" value="same" />
                <p>Same as shipping address</p>
              </div>
              <div className="payment__biling-different">
                <input type="radio" name="delivery" value="deifferent" />
                <p>Use a different billing address</p>
              </div>
            </div>
          </div>
        </div>

        <div className="payment__form-link">
          <div className="payment__form-return">
            <Link to="/shipping">
              <p>
                <span>
                  <AiFillCaretLeft />
                </span>
                Return to shipping{" "}
              </p>
            </Link>
          </div>
          <div className="payment__form-payment">
            <Link to="/transaction">
              <button
                onClick={() => emptyCart()}
              >Complete order</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
