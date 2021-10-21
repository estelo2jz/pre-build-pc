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
              Informantion
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
              <a href="#">Log in</a>
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
            <select id="country" name="country" class="form-control">
              <option value="United States">United States</option>
            </select>
            {/* <input type="country" placeholder="Country/region" /> */}
            {/* <input type="text" placeholder="State" /> */}
              <select id="state" name="state">
                <option value="---">State</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="Arkansas">Arkansas</option>
                <option value="California">California</option>
                <option value="Colorado">Colorado</option>
                <option value="Connecticut">Connecticut</option>
                <option value="Delaware">Delaware</option>
                <option value="District of Columbia">
                  District of Columbia
                </option>
                <option value="Florida">Florida</option>
                <option value="Georgia">Georgia</option>
                <option value="Guam">Guam</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Idaho">Idaho</option>
                <option value="Illinois">Illinois</option>
                <option value="Indiana">Indiana</option>
                <option value="Iowa">Iowa</option>
                <option value="Kansas">Kansas</option>
                <option value="Kentucky">Kentucky</option>
                <option value="Louisiana">Louisiana</option>
                <option value="Maine">Maine</option>
                <option value="Maryland">Maryland</option>
                <option value="Massachusetts">Massachusetts</option>
                <option value="Michigan">Michigan</option>
                <option value="Minnesota">Minnesota</option>
                <option value="Mississippi">Mississippi</option>
                <option value="Missouri">Missouri</option>
                <option value="Montana">Montana</option>
                <option value="Nebraska">Nebraska</option>
                <option value="Nevada">Nevada</option>
                <option value="New Hampshire">New Hampshire</option>
                <option value="New Jersey">New Jersey</option>
                <option value="New Mexico">New Mexico</option>
                <option value="New York">New York</option>
                <option value="North Carolina">North Carolina</option>
                <option value="North Dakota">North Dakota</option>
                <option value="Northern Marianas Islands">
                  Northern Marianas Islands
                </option>
                <option value="Ohio">Ohio</option>
                <option value="Oklahoma">Oklahoma</option>
                <option value="Oregon">Oregon</option>
                <option value="Pennsylvania">Pennsylvania</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Rhode Island">Rhode Island</option>
                <option value="South Carolina">South Carolina</option>
                <option value="South Dakota">South Dakota</option>
                <option value="Tennessee">Tennessee</option>
                <option value="Texas">Texas</option>
                <option value="Utah">Utah</option>
                <option value="Vermont">Vermont</option>
                <option value="Virginia">Virginia</option>
                <option value="Virgin Islands">Virgin Islands</option>
                <option value="Washington">Washington</option>
                <option value="West Virginia">West Virginia</option>
                <option value="Wisconsin">Wisconsin</option>
                <option value="Wyoming">Wyoming</option>
              </select>
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
