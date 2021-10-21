import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "./Data/DataProvider";
import { Link } from "react-router-dom";

import { AiFillQuestionCircle } from "react-icons/ai";

import "./styles/Checkout.scss";

export default function Checkout() {
  const value = useContext(DataContext);
  const [cart, setCart] = value.cart;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.price * item.count;
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [cart]);

  const reduction = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    setCart([...cart]);
  };
  const increase = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    setCart([...cart]);
  };

  const removeProduct = (id) => {
    // if(window.confirm("Do you want to delete this product?")){
    // }
    cart.forEach((item, index) => {
      if (item._id === id) {
        cart.splice(index, 1);
      }
    });
    setCart([...cart]);
  };

  if (cart.length === 0)
    return (
      <h2 style={{ textAlign: "center", fontSize: "5rem" }}>Cart Empty</h2>
    );

  return (
    <>
      <div className="checkout__main">
        <div className="checkout__form">
          <div>
            <div>Cart > Informantion > Shipping > Payment</div>
          </div>
          <div className="checkout__">
            <div className="checkout__form">
              <div className="checkout__">
                <button>PayPal</button>
              </div>
              <div className="checkout__">
                <button>GPay</button>
              </div>
            </div>
          </div>
          <div>
            <p>OR</p>
          </div>
          <div>
            <div>
              <div>
                <p>Contact information</p>
              </div>
              <div>
                <p>Already have an account?</p>
                <a href="#">Log in</a>
              </div>
            </div>
            <div>
              <div>
                <input type="text" placeholder="Email or mobile phone number" />
              </div>
              <div>
                <input type="radio" />
                <p>Email me with news and offers</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p>Shipping address</p>
            </div>
            <div>
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Last name" />
            </div>
          </div>
          <div>
            <input type="text" placeholder="Company (optional)" />
            <input type="text" placeholder="Address" />
            <input
              type="text"
              placeholder="Apartment, suite, etc. (optional)"
            />
            <input type="text" placeholder="City" />
          </div>
          <div>
            <input type="text" placeholder="Country/region" />
            <input type="text" placeholder="State" />
            <input type="text" placeholder="ZIP code" />
          </div>
          <div>
            <input type="text" placeholder="Phone" />
          </div>
          <div>
            <input type="radio" />
            <p>Save this information for next time</p>
          </div>
        </div>
        <div className="checkout__outer">
          {cart.map((product) => (
            <div className="cart" key={product._id}>
              <div className="checkout__container">
                <div className="checkout__details">
                  <div className="checkout__img">
                    <img src={product.images[0]} alt="" />

                    <div className="checkout__amount">
                      <div className="checkout__btn">
                        <button onClick={() => reduction(product._id)}>
                          -
                        </button>
                      </div>
                      <span>{product.count}</span>
                      <div className="checkout__btn">
                        <button onClick={() => increase(product._id)}>+</button>
                      </div>
                    </div>
                  </div>
                  <div></div>
                  <div className="checkout__heading">
                    <h2 title={product.title}>{product.title}</h2>
                  </div>
                  <div className="checkout__price">
                    <p>${product.price}</p>
                  </div>
                </div>
                <div
                  className="checkout__delete"
                  onClick={() => removeProduct(product._id)}
                >
                  <p>remove</p>
                </div>
              </div>
            </div>
          ))}
          <div className="checkout__total">
            <div className="checkout__coupon">
              <div className="checkout__input">
                <input type="text" placeholder="Discount code" />
              </div>
              <div className="checkout__btn">
                <button>Apply</button>
              </div>
            </div>
            <div className="checkout__total-container">
              <div className="checkout__total-subtotal-shipping">
                <div className="checkout__total-subtotal">
                  <p>Subtotal</p>
                  <p>${total}</p>
                </div>
                <div className="checkout__total-shipping">
                  <p>
                    Shipping{" "}
                    <span>
                      <AiFillQuestionCircle />
                    </span>
                  </p>
                  <p>Calculated at next step</p>
                </div>
              </div>
              <div className="checkout__total-price">
                <h3>Total</h3>
                <h3>
                  <span>USD</span> ${total}
                </h3>
              </div>
              <div className="checkout__total-link">
                <div>
                  <Link to="/cart">Return to cart</Link>
                </div>
                <div>
                  <Link to="/shipping">Continue to shipping</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
