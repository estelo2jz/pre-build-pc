import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Data/DataProvider";

import Apex from "./images/apex.webp";
import BF2042 from "./images/bf2042.webp";
import CP2077 from "./images/cp2077.webp";
import CS from "./images/cs.webp";
import FC from "./images/fc.webp";
import Fortnite from "./images/fortnite.webp";
import GTA5 from "./images/gta5.webp";
import LOL from "./images/lol.webp";
import MC from "./images/mc.webp";
import OW from "./images/ow.webp";
import R6S from "./images/r6s.webp";
import Rust from "./images/rust.webp";
import Tarkov from "./images/tarkov.webp";
import Valo from "./images/valo.webp";
import Warzone from "./images/warzone.webp";

import "./styles/EmptyCart.scss";

// Game images collection array for clean mapping
const gameImages = [
  { src: Apex, alt: "Apex Legends" },
  { src: BF2042, alt: "Battlefield 2042" },
  { src: CP2077, alt: "Cyberpunk 2077" },
  { src: CS, alt: "Counter-Strike" },
  { src: FC, alt: "Far Cry" },
  { src: Fortnite, alt: "Fortnite" },
  { src: GTA5, alt: "Grand Theft Auto V" },
  { src: LOL, alt: "League of Legends" },
  { src: MC, alt: "Minecraft" },
  { src: OW, alt: "Overwatch" },
  { src: R6S, alt: "Rainbow Six Siege" },
  { src: Rust, alt: "Rust" },
  { src: Tarkov, alt: "Escape from Tarkov" },
  { src: Valo, alt: "Valorant" },
  { src: Warzone, alt: "Call of Duty Warzone" },
];

export default function CartEmptyTemplate() {
  const value = useContext(DataContext);
  const [products] = value.products;

  return (
    <section className="cart-empty">
      <div className="cart-empty__outer-container">
        
        {/* Left Side: Games Showcase Grid */}
        <div className="cart-empty__left-container">
          <div className="cart-empty__left-heading">
            <p>Games You're Going to ENJOY!</p>
          </div>
          <div className="cart-empty__img-container">
            {gameImages.map((game, index) => (
              <div className="cart-empty__img-main" key={index}>
                <img src={game.src} alt={game.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Budget Recommendations */}
        <div className="cart-empty__desc-container">
          <div className="cart-empty__desc-heading">
            <p>PICK YOUR BUDGET</p>
          </div>
          <div className="cart-empty__desc-main">
            {products && products.slice(0, 3).map((product) => (
              <Link to={`/products/${product._id}`} key={product._id} className="cart-empty__link-wrapper">
                <div className="cart-empty__desc-budget-section">
                  <img src={product.emptyCartBanner} alt={product.title} />
                  <div className="cart-empty__desc-good">
                    <p title={product.title}>{product.title}</p>
                    <span>${product.price?.toFixed(2)}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}