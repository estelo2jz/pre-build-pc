import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "./Data/DataProvider";

import PaymentForm from "./PaymentForm";

import Top from "../../assets/images/cart/top3.jpg";


import "./styles/Payment.scss";

export default function Payment() {
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

  // const reduction = (id) => {
  //   cart.forEach((item) => {
  //     if (item._id === id) {
  //       item.count === 1 ? (item.count = 1) : (item.count -= 1);
  //     }
  //   });
  //   setCart([...cart]);
  // };
  // const increase = (id) => {
  //   cart.forEach((item) => {
  //     if (item._id === id) {
  //       item.count += 1;
  //     }
  //   });
  //   setCart([...cart]);
  // };

  // const removeProduct = (id) => {
  //   // if(window.confirm("Do you want to delete this product?")){
  //   // }
  //   cart.forEach((item, index) => {
  //     if (item._id === id) {
  //       cart.splice(index, 1);
  //     }
  //   });
  //   setCart([...cart]);
  // };

  if (cart.length === 0)
    return (
      <h2 style={{ textAlign: "center", fontSize: "5rem" }}>Cart Empty</h2>
    );

  return (
    <>
      <div className="payment__form-header">
        <img src={Top} alt="" />
      </div>
      <div className="payment__main">
        <div className="payment__form">
          <div className="payment__total-subtotal">
            <p>Order summary total:</p>
            <p>${total}.99</p>
          </div>
          <PaymentForm />
        </div>
        <div className="payment__outer">
          {cart.map((product) => (
            <div className="cart" key={product._id}>
              <div className="payment__container">
                <div className="payment__details">
                  <div className="payment__img">
                    <img src={product.images[0]} alt="" />
                    {/* <div className="payment__amount">
                      <div className="payment__btn">
                        <button onClick={() => reduction(product._id)}>
                          -
                        </button>
                      </div>
                      <span>{product.count}</span>
                      <div className="payment__btn">
                        <button onClick={() => increase(product._id)}>+</button>
                      </div>
                    </div> */}
                  </div>
                  <div className="payment__heading">
                    <h2 title={product.title}>{product.title}</h2>
                  </div>
                  <div className="payment__price">
                    <p>${product.price}</p>
                  </div>
                </div>
                {/* <div
                  className="payment__delete"
                  onClick={() => removeProduct(product._id)}
                >
                  <p>remove</p>
                </div> */}
              </div>
            </div>
          ))}
          <div className="payment__total">
            <div className="payment__coupon">
              <div className="payment__input">
                <input type="text" placeholder="Discount code" />
              </div>
              <div className="payment__btn">
                <button>Apply</button>
              </div>
            </div>
            <div className="payment__total-container">
              <div className="payment__total-subtotal-shipping">
                <div className="payment__total-subtotal">
                  <p>Subtotal</p>
                  <p>${total}.99</p>
                </div>
                <div className="payment__total-shipping">
                  <p>
                    Shipping{" "}
                  </p>
                  <p>$45.00</p>
                </div>
                <div className="payment__total-shipping">
                  <p>
                    Taxes{" "}
                  </p>
                  <p>$86.00</p>
                </div>
              </div>
              <div className="payment__total-price">
                <h3>Total</h3>
                <h3>
                  <span>USD</span> ${total + 45.00 + 86.00}.99
                </h3>
              </div>
              {/* <div className="payment__total-link">
                <div className="payment__total-return">
                  <Link to="/cart">Return to cart</Link>
                </div>
                <div className="payment__total-shipping">
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
