import React, { useState, useContext } from "react";
import Close from "../svg/times-solid.svg";
import { Link } from "react-router-dom";
import { DataContext } from "../Products/Data/DataProvider";

import { RiMenu5Fill } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoBug } from "react-icons/go";
import pcevolvers from "../../assets/pcevolversNObg.png"
import "./styles/Header.scss";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const value = useContext(DataContext);
  const [cart] = value.cart;

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const styleMenu = {
    left: menu ? 0 : "-100%",
  };

  return (
    <header>
      <div className="menu" onClick={toggleMenu}>
        <div className="menu-bars">
          <RiMenu5Fill  />
        </div>
      </div>
      <div className="logo">
        <Link to="/">
          <div className="logo-img">
            <img src={pcevolvers} alt="" />
          </div>
        </Link>
      </div>
      <ul style={styleMenu}>
        <li>
          <Link onClick={toggleMenu} to="/">Home</Link>
        </li>
        {/* <li>
          <Link to="/products">Products</Link>
        </li> */}
        <li>
          <Link onClick={toggleMenu} to="/products">Best Sellers</Link>
        </li>
        <li >
          <Link onClick={toggleMenu} to="/pages/review">Reviews</Link>
        </li>
        <li>
          <Link onClick={toggleMenu} to="/pages/financing">Financing</Link>
        </li>
        <li>
          <Link onClick={toggleMenu} to="/pages/support">Support</Link>
        </li>
        <li>
          <Link onClick={toggleMenu} to="/pages/why-pre-build">About Us</Link>
        </li>
        <li onClick={toggleMenu}>
          <img src={Close} alt="" width="30" className="menu" />
        </li>
      </ul>
      <div className="cart-icon">
        <span>{cart.length}</span>
        <Link className="cart-img" to="/cart">
          <AiOutlineShoppingCart />
        </Link>
      </div>
    </header>
  );
}