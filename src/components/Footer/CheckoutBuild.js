import React from 'react';
import { Link } from 'react-router-dom';

import './styles/CheckoutBuild.scss';

const CheckoutBuild = () => {
  return (
    <div className="checkout-build">
      <div className="checkout-build__top">
        <p>
          CHECKOUT OUR LATEST BUILD AND MAKE IT YOUR OWN!
        </p>
      </div>
      <div className="checkout-build__btn">
        <Link to="/">
          <button>VIEW BUILD</button>
        </Link>
      </div>
      <div className="checkout-build__bottom">
        <p>
          Our mission is to build gaming PCs at the best price without cutting corners.
        </p>
      </div>
    </div>
  )
}

export default CheckoutBuild
