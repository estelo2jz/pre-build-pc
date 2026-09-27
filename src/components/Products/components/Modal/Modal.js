import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styles from "../Modal/Modal.module.scss";
import './modalll.scss';

const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          
          <div className={styles.modalHeader}>
            <span className="modal-icon">🛒</span>
            <h5 className={styles.heading}>Thank You!</h5>
          </div>

          <div className={styles.modalContent}>
            Item successfully added to your cart!
          </div>

          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              
              <Link to="/cart" className="go-to-cart__link">
                <div className="go-to-cart__container">
                  <button className="cancelBtn" onClick={() => setIsOpen(false)}>
                    {/* <AiOutlineShoppingCart className="cart-icon" /> */}
                    <span>View Cart</span>
                  </button>
                </div>
              </Link> 

              <div className="close__container">
                <button className="delete__Btn" onClick={() => setIsOpen(false)}>
                  Close
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Modal;