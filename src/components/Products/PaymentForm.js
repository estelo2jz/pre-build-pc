import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { DataContext } from "./Data/DataProvider";


// import PayPal from '../../assets/images/cart/paypay.svg';

import "./styles/Payment.scss";

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
        <div className="payment_">
          <div className="payment__">
            <div className="payment__">
              <p>Discount</p>
            </div>
            <div className="payment__">
            </div>
          </div>
          <div className="payment__">
            <div className="payment__">
              <p>Payment</p>
            </div>
            <div className="payment__">
            </div>
          </div>
          <div className="payment__">
            <div className="payment__">
              <p>Billing address</p>
            </div>
            <div className="payment__">
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
              >Pay now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
