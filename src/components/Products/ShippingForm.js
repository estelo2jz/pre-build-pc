import React from "react";
import { Link } from "react-router-dom";

// import PayPal from '../../assets/images/cart/paypay.svg';

import "./styles/ShippingForm.scss";

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
        <div className="shipping__contact-container">
          <div className="shipping__contact">
            <div className="shipping__contact-top">
              <p>Contact</p>
              <input type="text" placeholder="Email" />
            </div>
            <div className="shipping__contact-bottom">
              <p>Ship to</p>
              <input type="text" placeholder="Shipping Address" />
            </div>
          </div>
        </div>
        <div className="shipping__shipping-container">
          <div className="shipping__notice">
            <div className="shipping__notice-top">
              <p>Shipping Notice</p>
            </div>
            <div className="shipping__notice-bottom">
              <p>Your order will ship 10-14 days after processing.</p>
            </div>
          </div>
          <div className="shipping__method-container">
            <div className="shipping__method-heading">
              <p>Shipping method</p>
            </div>
            <div className="shipping__method">
              <div className="shipping__method-home">
                <input type="radio" name="delivery" value="home" />
                <p>FedEx Ground® Home Delivery</p>
                <p>$45.00</p>
              </div>
              <div className="shipping__method-saver">
                <input type="radio" name="delivery" value="saver" />
                <p>FedEx Express Saver®</p>
                <p>$97.00</p>
              </div>
              <div className="shipping__method-overnight">
                <input type="radio" name="delivery" value="ovenight" />
                <p>FedEx Standard Overnight®</p>
                <p>$157.00</p>
              </div>
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
