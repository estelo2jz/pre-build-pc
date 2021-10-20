import React, { useContext } from "react";
import { DataContext } from "../Data/DataProvider";
import { Link } from "react-router-dom";

import './styles/EssentialsProducts.scss';

export default function Products() {
  const value = useContext(DataContext);
  const [products] = value.products;
  const addCart = value.addCart;

  return (
    <div className="essentials__container">
      <div className="essentials">
        {products.slice(3, 8).map((product) => (
          <div className="essentials__outer">
            <div className="essentials__card" key={product._id}>
              <div className="essentials__img">
                <img src={product.goodBg} alt="" />
              </div>
              <div className="essentials__title">
                <p title={product.title}>
                  {product.title}.
                </p>
              </div>
              <div className="essentials__price">
                <p>
                  ${product.price}
                </p>
              </div>
              <div className="essentials__box">
                <button onClick={() => addCart(product._id)}>Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
