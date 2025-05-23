import React, { useContext, useState  } from "react";
import { DataContext } from "../Data/DataProvider";

import styles from "./Modal/App.module.css";

import Modal from "./Modal/Modal";

import "./styles/EssentialsProducts.scss";

export default function Products() {
  const value = useContext(DataContext);
  const [products] = value.products;
  const addCart = value.addCart;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="essentials__container">
      <div className="essentials">
        {products.slice(4, 9).map((product) => (
          <div className="essentials__outer">
            <div className="essentials__card" key={product._id}>
              <div className="essentials__img">
                <img src={product.goodBg} alt="" />
              </div>
              <div className="essentials__title">
                <p title={product.title}>{product.title}.</p>
              </div>
              <div className="essentials__price">
                <p>${product.price}</p>
              </div>
              <div className="essentials__box">
                {/* <button onClick={() => addCart(product._id)}>
                  Add to cart
                </button> */}
                <main>
                  <button
                    className={styles.primaryBtn}
                    onClick={() => setIsOpen(true) & addCart(product._id)}
                    // onClick={() => addCart(product._id)}
                  >
                    Add to cart
                  </button>
                  {isOpen && <Modal setIsOpen={setIsOpen} />}
                </main>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
