import React from "react";
import { Link } from "react-router-dom";

// import PayPal from '../../assets/images/cart/paypay.svg';

import "./styles/CheckoutForm.scss";

import { FcGoogle } from "react-icons/fc";
import { BsPaypal } from "react-icons/bs";
import { BiCaretRight } from "react-icons/bi";
import { AiFillCaretLeft } from "react-icons/ai";
// FcGoogle

const CheckoutForm = () => {
  return (
    <div className="checkout">
      <div className="checkout__form">
        <div className="checkout__history">
          <div className="checkout__history-inner">
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
        <div className="checkout__express">
          <p>Express checkout</p>
          <div className="checkout__express-container">
            <div className="checkout__express-paypal">
              <button>
                <span>
                  <BsPaypal />
                </span>
                <span>Pay</span>
                <span>Pal</span>
              </button>
            </div>
            <div className="checkout__express-google-pay">
              <button>
                <span>
                  <FcGoogle />
                </span>{" "}
                Pay
              </button>
            </div>
          </div>
        </div>
        <div className="checkout__or">
          <p>OR</p>
        </div>
        <div className="checkout__form-contact-container">
          <div className="checkout__form-contact-top">
            <div className="checkout__form-contact-top-head">
              <p>Contact information</p>
            </div>
            <div className="checkout__form-contact-top-bottom">
              <p>Already have an account?</p>
              <a href="/">Log in</a>
            </div>
          </div>
          <div className="checkout__form-contact-bottom">
            <div className="checkout__form-contact-bottom-email">
              <input type="text" placeholder="Email or mobile phone number" />
            </div>
            <div className="checkout__form-contact-bottom-radio">
              <input type="radio" />
              <p>Email me with news and offers</p>
            </div>
          </div>
        </div>
        <div className="checkout__form-address-container">
          <div className="checkout__form-address-top-head">
            <div className="checkout__form-address-top-p">
              <p>Shipping address</p>
            </div>
            <div className="checkout__form-address-top-head-input">
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Last name" />
            </div>
          </div>
          <div className="checkout__form-address-center-input">
            <input type="text" placeholder="Company (optional)" />
            <input type="text" placeholder="Address" />
            <input
              type="text"
              placeholder="Apartment, suite, etc. (optional)"
            />
            <input type="text" placeholder="City" />
          </div>
          <div className="checkout__form-address-right-input">
            <input type="country" placeholder="Country/region" />
            <input type="text" placeholder="State" />
            <input type="text" placeholder="ZIP code" />
          </div>
          <div className="checkout__form-address-input-phone">
            <input type="text" placeholder="Phone" />
          </div>
          <div className="checkout__form-address-input-radio">
            <input type="radio" />
            <p>Save this information for next time</p>
          </div>
        </div>
        <div className="checkout__form-link">
          <div className="checkout__form-return">
            <Link to="/cart">
              <p>
                <span>
                  <AiFillCaretLeft />
                </span>
                Return to cart{" "}
              </p>
            </Link>
          </div>
          <div className="checkout__form-shipping">
            <Link to="/shipping">
              <button>Continue to shipping</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
