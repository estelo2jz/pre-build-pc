import React from "react";
import Products from "../Products/Products";

import "./styles/BestSellers.scss";
import "./styles/parallax.scss";

const BestSellers = () => {
  return (
    <section className="bestsellers-section">
      <div className="bestsellers-section__container">
        <div className="bestsellers-section__header">
          <h2>Featured & Best Selling Rigs</h2>
          <p>Hand-crafted gaming powerhouses ready to ship.</p>
        </div>
        <div className="bestsellers-section__content">
          <Products />
        </div>
      </div>
    </section>
  );
};

export default BestSellers;