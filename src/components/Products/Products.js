import React, { useContext } from "react";
import { DataContext } from "./Data/DataProvider";
import { Link } from "react-router-dom";

import "./styles/Products.scss";

export default function Products() {
  const value = useContext(DataContext);
  const [products] = value.products;

  return (
    <div className="products">
      {products.slice(0, 4).map((product) => (
        <div className="products__card" key={product._id}>
          <div className="products__img">
            <img src={product.goodProfilePic} alt={product.title} />
          </div>
          
          <div className="products__title">
            <h3 title={product.title}>{product.title}.</h3>
          </div>
          
          <div className="products__desc">
            <p>{product.description}</p>
          </div>
          
          {/* Refactored Performance Bar Graph Section */}
          <div className="products__performance-graph">
            <div className="products__graph-header">
              <span>Performance Index</span>
              <span className="products__graph-badge">Tier 1</span>
            </div>
            
            <div className="products__bar-item">
              <div className="products__bar-label">
                <span>Graphics</span>
                <span>{product.graphics}%</span>
              </div>
              <div className="products__bar-track">
                <div 
                  className="products__bar-fill products__bar-fill--graphics" 
                  style={{ width: `${product.graphics}%` }}
                ></div>
              </div>
            </div>

            <div className="products__bar-item">
              <div className="products__bar-label">
                <span>Processor</span>
                <span>{product.processor}%</span>
              </div>
              <div className="products__bar-track">
                <div 
                  className="products__bar-fill products__bar-fill--processor" 
                  style={{ width: `${product.processor}%` }}
                ></div>
              </div>
            </div>

            <div className="products__bar-item">
              <div className="products__bar-label">
                <span>Memory</span>
                <span>{product.memorySize}%</span>
              </div>
              <div className="products__bar-track">
                <div 
                  className="products__bar-fill products__bar-fill--memory" 
                  style={{ width: `${product.memorySize}%` }}
                ></div>
              </div>
            </div>

            <div className="products__bar-item">
              <div className="products__bar-label">
                <span>Storage</span>
                <span>{product.storage}%</span>
              </div>
              <div className="products__bar-track">
                <div 
                  className="products__bar-fill products__bar-fill--storage" 
                  style={{ width: `${product.storage}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="products__price">
            <p>Starting at</p>
            <h4>${product.price}</h4>
          </div>
          
          <div className="products__finance">
            <p>Or as low as ${product.monthlyFinance} monthly*</p>
          </div>
          
          <div className="products__btn">
            <Link to={`/products/${product._id}`} className="products__action-link">
              <button>VIEW BUILD</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}