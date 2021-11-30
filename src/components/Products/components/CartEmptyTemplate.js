import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from 'react-icons/bs';

import './styles/EmptyCart.scss';

const CartEmptyTemplate = () => {
  return (
    <div>
      <div>
        <h1>YOUR CART</h1>
      </div>
      <div>
        <p>Your cart is currently empty</p>
      </div>
      <div>
        <Link to="/products">
          <button>CONTINUE SHOPPING</button>
          <BsArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default CartEmptyTemplate;
