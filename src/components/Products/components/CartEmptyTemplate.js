import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from 'react-icons/bs';

import Apex from './images/apex.webp';
import BF2042 from './images/bf2042.webp';
import CP2077 from './images/cp2077.webp';
import CS from './images/cs.webp';
import FC from './images/fc.webp';
import Fortnite from './images/fortnite.webp';
import GTA5 from './images/gta5.webp';
import LOL from './images/lol.webp';
import MC from './images/mc.webp';
import OW from './images/ow.webp';
import R6S from './images/r6s.webp';
import Rust from './images/rust.webp';
import Tarkov from './images/tarkov.webp';
import Valo from './images/valo.webp';
import Warzone from './images/warzone.webp';


import './styles/EmptyCart.scss';

const CartEmptyTemplate = () => {
  return (
    <div className="cart-empty__outer-container">
      <div className="cart-empty__left-container">
        <div className="cart-empty__img-container">
          <div className="cart-empty__img-main">
            <img src={Apex} alt="game-image" />
          </div>
          <div className="cart-empty__img-main">
            <img src={BF2042} alt="game-image" />
          </div>
          <div className="cart-empty__img-main">
            <img src={CP2077} alt="game-image" />
          </div>
          <div className="cart-empty__img-main">
            <img src={CS} alt="game-image" />
          </div>
          <div className="cart-empty__img-main">
            <img src={FC} alt="game-image" />
          </div>
          <div className="cart-empty__img-main">
            <img src={Fortnite} alt="game-image" />
          </div>
          <div className="cart-empty__img-main">
            <img src={GTA5} alt="game-image" />
          </div>
          <div className="cart-empty__img-main">
            <img src={LOL} alt="game-image" />
          </div>
          <div className="cart-empty__img-main">
            <img src={MC} alt="game-image" />
          </div>
          <div className="cart-empty__img-main">
            <img src={OW} alt="game-image" />
          </div>
          <div className="cart-empty__img-main">
            <img src={R6S} alt="game-image" />
          </div>
          <div className="cart-empty__img-main">
            <img src={Rust} alt="game-image" />
          </div>
          <div className="cart-empty__img-main">
            <img src={Tarkov} alt="game-image" />
          </div>
          <div className="cart-empty__img-main">
            <img src={Valo} alt="game-image" />
          </div>
          <div className="cart-empty__img-main">
            <img src={Warzone} alt="game-image" />
          </div>
        </div>
      </div>
      <div className="cart-empty__desc-container">
        <div className="cart-empty__desc-main">
          <div className="cart-empty__desc-heading">
            <p>PICK YOUR BUDGET</p>
          </div>
          <div>
            <div className="cart-empty__desc-info good">
              <p>GOOD.</p>
              <p>$1,325</p>
            </div>
            <div className="cart-empty__desc-info better">
              <p>BETTER.</p>
              <p>$1,765</p>
            </div>
            <div className="cart-empty__desc-info best">
              <p>BEST.</p>
              <p>$2,759</p>
            </div>
          </div>
        </div>
        <Link to="/products">
          <button>CONTINUE SHOPPING</button>
          <BsArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default CartEmptyTemplate;
