import React from "react";
import { Link } from "react-router-dom";

// import PayPal from '../../assets/images/cart/paypay.svg';

import "./styles/Shipping.scss";

import { FcGoogle } from "react-icons/fc";
import { BsPaypal } from "react-icons/bs";
import { BiCaretRight } from "react-icons/bi";
import { AiFillCaretLeft } from "react-icons/ai";
// FcGoogle

const Shipping = () => {
  return (
    <div className="shipping">
      <div className="shipping__form">
        <div className="shipping__history">
          <div className="shipping__history-inner">
            <p>
              Cart
              <span>
                <BiCaretRight />
              </span>
            </p>
            <p>
              Information
              <span>
                {" "}
                <BiCaretRight />
              </span>
            </p>
            <p>
              Shipping
              <span>
                {" "}
                <BiCaretRight />
              </span>
            </p>
            <p>Payment</p>
          </div>
        </div>
        <div className="shipping_">
          <div className="shipping__">
            <div className="shipping__">
              <p>Shipping Notice</p>
            </div>
            <div className="shipping__">
            </div>
          </div>
          <div className="shipping__">
            <div className="shipping__">
              <p>Shipping method</p>
            </div>
            <div className="shipping__">
            </div>
          </div>
        </div>
        <div className="shipping__form-link">
          <div className="shipping__form-return">
            <Link to="/checkout">
              <p>
                <span>
                  <AiFillCaretLeft />
                </span>
                Return to information{" "}
              </p>
            </Link>
          </div>
          <div className="shipping__form-shipping">
            <Link to="/payment">
              <button>Continue to payment</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
