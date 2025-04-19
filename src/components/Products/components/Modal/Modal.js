import React from "react";
import {Link} from "react-router-dom";
import styles from "../Modal/Modal.module.scss";
// import { RiCloseLine } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import './modalll.scss';

const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Thank You!</h5>
          </div>
          {/* <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button> */}
          <div className={styles.modalContent}>Item added to cart!</div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <Link  to="/cart"> 
                <div className="go-to-cart__container">
                  <button className="cancelBtn" onClick={() => setIsOpen(false)}>
                    <AiOutlineShoppingCart />
                  </button>
                </div>
              </Link> 
              <div className="close__container">
                <button className="delete__Btn" onClick={() => setIsOpen(false)}>
                  Close
                </button>
              </div>
                {/* <AiOutlineShoppingCart /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
