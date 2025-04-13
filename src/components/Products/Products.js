import React, { useContext } from "react";
import { DataContext } from "./Data/DataProvider";
import { Link } from "react-router-dom";

import "./styles/Products.scss";

export default function Products() {
  const value = useContext(DataContext);
  const [products] = value.products;
  const addCart = value.addCart;

  return (
    <div className="products">
      {products.slice(0, 4).map((product) => (
        <div className="products__card" key={product._id}>
          <div className="products__img">
            <img src={product.goodProfilePic} alt="" />
          </div>
          <div className="products__title">
            <h3 title={product.title}>{product.title}.</h3>
          </div>
          <div className="products__desc">
            <p>{product.description}</p>
          </div>
          <div className="products__stats">
            <div className="container">
              <div className="card">
                <div class="percent" style={{ "--clr": '#04fc43', "--num": product.graphics }}>
                  <div className="dot"></div>
                  <svg>
                  {/* 50 */}
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div className="number">
                    <h2>
                    {product.graphics}<span>%</span>
                    </h2>
                    <p>Graphics</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="card">
                <div className="percent" style={{ "--clr": '#fee800', "--num": product.processor }}>
                  <div className="dot"></div>
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div className="number">
                    <h2>
                    {product.processor}<span>%</span>
                    </h2>
                    <p>Processor</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="card">
                <div className="percent" style={{ "--clr": '#ff00be', "--num": product.memorySize }}>
                  <div className="dot"></div>
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div className="number">
                    <h2>
                    {product.memorySize}<span>%</span>
                    </h2>
                    <p>Memory</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="card">
                <div className="percent" style={{ "--clr": '#06ccff', "--num": product.storage }}>
                  <div className="dot"></div>
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div className="number">
                    <h2>
                    {product.storage}<span>%</span>
                    </h2>
                    <p>Storage</p>
                  </div>
                </div>
              </div>
            </div>



            {/* <div className="products__stats-item">
              <div className="products__stats-logo">
                <div className="products__stats-logo-img">
                  <img src={GraphicsLogo} alt="" />
                </div>
              </div>
              <div className="products__stats-contents">
                <div className="products__stats-span-container">
                  <span>GRAPHICS</span>
                </div>
                <div className="products__stats-graphics-container">
                  <p className="products__stats-graphics">
                    {product.graphics}/100
                  </p>
                </div>
              </div>
            </div> */}
            {/* <div className="products__stats-item">
              <div className="products__stats-logo">
                <div className="products__stats-logo-img">
                  <img src={ProcessorLogo} alt="" />
                </div>
              </div>
              <div className="products__stats-contents">
                <div className="products__stats-span-container">
                  <span>PROCESSOR</span>
                </div>
                <div className="products__stats-processor-container">
                  <p className="products__stats-processor">
                    {product.processor}/100
                  </p>
                </div>
              </div>
            </div>
            <div className="products__stats-item">
              <div className="products__stats-logo">
                <div className="products__stats-logo-img">
                  <img src={StorageLogo} alt="" />
                </div>
              </div>
              <div className="products__stats-contents">
                <div className="products__stats-span-container">
                  <span>MEMORY</span>
                </div>
                <div className="products__stats-memory-size-container">
                  <p className="products__stats-memory-size">
                    {product.memorySize}/100
                  </p>
                </div>
              </div>
            </div>
            <div className="products__stats-item">
              <div className="products__stats-logo">
                <div className="products__stats-logo-img">
                  <img src={MemoryLogo} alt="" />
                </div>
              </div>
              <div className="products__stats-contents">
                <div className="products__stats-span-container">
                  <span>STORAGE</span>
                </div>
                <div className="products__stats-storage-container">
                  <p className="products__stats-storage">
                    {product.storage}/100
                  </p>
                </div>
              </div>
            </div> */}
          </div>
          <div className="products__price">
            <p>Starting at</p>
            <h4>${product.price}</h4>
          </div>
          <div className="products__finance">
            <p>Or as low as ${product.monthlyFinance} monthly*</p>
          </div>
          <div className="products__btn">
            <h3 title={product.title}>
              <Link to={`/products/${product._id}`}>
                <button>VIEW BUILT</button>
              </Link>
            </h3>
          </div>
          {/* <div className="products__box">
            <Link
              to="/cart"
              // className="cart"
              onClick={() => addCart(product._id)}
            >
              <button>Add to cart</button>
            </Link>
            <button onClick={() => addCart(product._id)}>Add to cart</button>
          </div> */}
        </div>
      ))}
    </div>
  );
}
