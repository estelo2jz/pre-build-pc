import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "./Data/DataProvider";
import { Link } from "react-router-dom";

import CheckoutForm from "./CheckoutForm";

import Top from "../../assets/images/cart/top3.jpg";

import { AiFillQuestionCircle } from "react-icons/ai";

import "./styles/Checkout.scss";
import CartEmptyTemplate from "./components/CartEmptyTemplate";

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
      <CartEmptyTemplate />
    );

  return (
    <>
      <div className="checkout__form-header">
        <img src={Top} alt="" />
      </div>
      <div className="checkout__main">
        <div className="checkout__form">
          <div className="checkout__total-subtotal">
            <p>Order summary total:</p>
            <p>${total}.99</p>
          </div>
          <CheckoutForm />
        </div>
        <div className="checkout__outer">
          {cart.map((product) => (
            <div className="cart" key={product._id}>
              <div className="checkout__container">
                <div className="checkout__details">
                  <div className="checkout__img">
                    <img src={product.images[0]} alt="" />
                    {/* <div className="checkout__amount">
                      <div className="checkout__btn">
                        <button onClick={() => reduction(product._id)}>
                          -
                        </button>
                      </div>
                      <span>{product.count}</span>
                      <div className="checkout__btn">
                        <button onClick={() => increase(product._id)}>+</button>
                      </div>
                    </div> */}
                  </div>
                  <div></div>
                  <div className="checkout__heading">
                    <h2 title={product.title}>{product.title}</h2>
                  </div>
                  <div className="checkout__price">
                    <p>${product.price}</p>
                  </div>
                </div>
                {/* <div
                  className="checkout__delete"
                  onClick={() => removeProduct(product._id)}
                >
                  <p>remove</p>
                </div> */}
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
                  <p>${total}.99</p>
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
                <div className="checkout__total-shipping">
                  <p>
                    Taxes (estimated){" "}
                  </p>
                  <p>$86.00</p>
                </div>
              </div>
              <div className="checkout__total-price">
                <h3>Total</h3>
                <h3>
                  <span>USD</span> ${total + 86.00}.99
                </h3>
              </div>
              {/* <div className="checkout__total-link">
                <div className="checkout__total-return">
                  <Link to="/cart">Return to cart</Link>
                </div>
                <div className="checkout__total-shipping">
                  <Link to="/shipping">Continue to shipping</Link>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
