import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "./Data/DataProvider";
import { Link } from "react-router-dom";

import CartEmptyTemplate from './components/CartEmptyTemplate';

import { AiFillQuestionCircle } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";

import "./styles/Cart.scss";

export default function Cart() {
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
    cart.forEach((item, index) => {
      if (item._id === id) {
        cart.splice(index, 1);
      }
    });
    setCart([...cart]);
  };

  if (cart.length === 0)
    return (
      // <h2 style={{ textAlign: "center", fontSize: "5rem" }}>Cart Empty</h2>
      <CartEmptyTemplate />
    );

  return (
    <>
      <div className="cart__main">
        <div className="cart__header">
          <div className="cart__header-top">
            <p>YOUR CART</p>
          </div>
          <div className="cart__header-bottom">
            <Link to="/products">continue shopping</Link>
          </div>
        </div>
        <div className="cart__outer">
          {cart.map((product) => (
            <div className="cart" key={product._id}>
              <div className="cart__details">
                <div className="cart__details-left">
                  <div className="cart__img">
                    <img src={product.images[0]} alt="" />
                  </div>
                  <div className="cart__heading">
                    <div>
                      <h2 title={product.title}>{product.title}.</h2>
                      {/* <p>{product.description}</p> */}
                    </div>
                    {/* <div className="cart__price">
                        <p>Unit Price: ${product.price}</p>
                      </div> */}
                    <div
                      className="cart__delete"
                      onClick={() => removeProduct(product._id)}
                    >
                      <p>Remove</p>
                    </div>
                  </div>
                </div>
                <div className="cart__details-right">
                  <div className="cart__amount">
                    <div className="cart__btn">
                      <button onClick={() => reduction(product._id)}>
                        <span>-</span>
                      </button>
                    </div>
                    <span>x{product.count}</span>
                    <div className="cart__btn">
                      <button onClick={() => increase(product._id)}>
                        <span>+</span>
                      </button>
                    </div>
                  </div>
                  <div className="cart__price">
                    <p>${product.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="cart__total-link">
            <div className="cart__total-link-outer">
              <div className="cart__total-top">
                <div className="cart__total-top-p">
                  <p>Subtotal</p>
                  <p>${total}.99 USD</p>
                </div>
                <div className="cart__total-top-down">
                  <p>
                    Taxes and <span>shipping</span> calculated at checkout
                  </p>
                </div>
              </div>
              <div className="cart__total-bottom">
                <div className="cart__total-update">
                  <Link to="/products">
                    <p>UPDATE</p>
                  </Link>
                </div>
                <div className="cart__total-checkout">
                  <Link to="/checkout">
                    <p>
                      <span>
                        <BsFillCartFill />
                      </span>
                      CHECK OUT
                    </p>
                  </Link>
                </div>
                {/* <div className="cart__">
                <div className="cart__form">
                  <div className="cart__">
                    <button>PayPal</button>
                  </div>
                  <div className="cart__">
                    <button>GPay</button>
                  </div>
                </div>
                </div> */}
                      {/* <div>
                  <p>OR</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
