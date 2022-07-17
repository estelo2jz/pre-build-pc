import React, { useContext, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../Data/DataProvider";
import Spec from "../components/Specs";
import DetailsThumb from "../DetailsThumb";
import { Link } from "react-router-dom";

import "./styles/Details.scss";
import styles from "../components/Modal/App.module.css";

import Modal from "../components/Modal/Modal";

import { IoMdSettings } from 'react-icons/io';
import { BiPaperPlane } from 'react-icons/bi';
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Details() {
  const { id } = useParams();
  const value = useContext(DataContext);
  const [products] = value.products;
  const addCart = value.addCart;
  const [isOpen, setIsOpen] = useState(false);

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
      <div className="details__top-heading">
        <div className="details__top-recommended">
          <p>Your Recommended Build.</p>
        </div>
        <div className="details__top-btn-container">
          <div className="details__top-btns">
            <div className="details__top-btn-customize">
              <button><span><IoMdSettings /></span>CUSTOMIZE</button>
            </div>
            <div className="details__top-btn-save">
              <button><span><BiPaperPlane /></span>SAVE&EMAIL</button>
            </div>
            <div className="details__top-btn-checkout">
              <Link to="/checkout">
                <button><span><AiOutlineShoppingCart /></span>CHECKOUT</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
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
                      <p>${product.totalPrice}</p>
                      <span>Total Price</span>
                    </div>
                  </div>
                  <div className="box-details__right">
                    <div>
                      <span>Per month as low as</span>
                      <p>${product.monthly}</p>
                    </div>
                    <div className="box-details__right-btn">
                      <button>GET MY RATE</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-details__content-cart">
                {/* <Link
                  to="/cart"
                > */}
                <div className="cart">
                  {/* <button  onClick={() => addCart(product._id)}>
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
                {/* </Link> */}
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
                essentialsOne={product.essentialsOne}
                essentialsTwo={product.essentialsTwo}
                essentialsThree={product.essentialsThree}
                essentialsFour={product.essentialsFour}
                essentialsFive={product.essentialsFive}
                setIndex={setIndex}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
