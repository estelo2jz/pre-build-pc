import React, { useContext, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../Data/DataProvider";
import Spec from "../components/Specs";
import DetailsThumb from "../DetailsThumb";
import { Link } from "react-router-dom";
import "./styles/Details.scss";

export default function Details() {
  const { id } = useParams();
  const value = useContext(DataContext);
  const [products] = value.products;
  const addCart = value.addCart;

  const [index, setIndex] = useState(0);
  const imgDiv = useRef();

  const details = products.filter((product, index) => {
    return product._id === id;
  });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    imgDiv.current.style.backgroundPosition = `${x}% ${y}%`;
  };

  return (
    <>
      {details.map((product) => (
        <div className="details" key={product._id}>
          <div className="details__img-container">
            <div className="img-container">
              <div
                className="img-container"
                onMouseMove={handleMouseMove}
                style={{ backgroundImage: `url(${product.images[index]})` }}
                ref={imgDiv}
                onMouseLeave={() =>
                  (imgDiv.current.style.backgroundPosition = `center`)
                }
              />
            </div>
            <div className="box-details__heading">
              <div className="box-details__content-img">
                <DetailsThumb images={product.images} setIndex={setIndex} />
              </div>
              <div className="box-details__desc">
                <div className="box-details__desc-outer">
                  <div className="box-details__left">
                    <div className="box-details__main-desc">
                      <span>Components costs</span>
                      <p>${product.componentsCosts}</p>
                    </div>
                    <div className="box-details__content">
                      <span>Build Fee</span>
                      <p>${product.buildFee}</p>
                    </div>
                  </div>
                  <div className="box-details__center">
                    <div className="box-details__content">
                      <p>${product.monthly}</p>
                      <span>Total Price</span>
                    </div>
                  </div>
                  <div className="box-details__right">
                    <div>
                      <span>Per month as low as</span>
                      <p>${product.totalPrice}</p>
                    </div>
                    <div className="box-details__right-btn">
                      <button>GET MY RATE</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-details__content-cart">
                <Link
                  to="/cart"
                  // className="cart"
                  onClick={() => addCart(product._id)}
                >
                <button>
                  Add to cart
                </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="box-details">
            <div className="box-details__specs">
              <Spec
                className="comments__items"
                cpu={product.cpu}
                gpu={product.gpu}
                ram={product.ram}
                memory={product.memory}
                cpuCooler={product.cpuCooler}
                fans={product.fans}
                pcCase={product.pcCase}
                power={product.power}
                motherboard={product.motherboard}
                wifi={product.wifi}
                windows={product.windows}
                warranty={product.warranty}
                setIndex={setIndex}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
