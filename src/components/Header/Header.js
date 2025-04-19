import React, { useState, useContext } from "react";
import Close from "../svg/times-solid.svg";
import { NavLink } from "react-router-dom";
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
        <NavLink to="/">
          <div className="logo-img">
            <img src={pcevolvers} alt="" />
          </div>
        </NavLink>
      </div>
      <ul style={styleMenu}>
        <li>
          <NavLink onClick={toggleMenu} to="/">Home</NavLink>
        </li>
        {/* <li>
          <NavLink to="/products">Products</NavLink>
        </li> */}
        <li>
          <NavLink onClick={toggleMenu} to="/products">Best Sellers</NavLink>
        </li>
        <li >
          <NavLink onClick={toggleMenu} to="/pages/review">Reviews</NavLink>
        </li>
        <li>
          <NavLink onClick={toggleMenu} to="/pages/financing">Financing</NavLink>
        </li>
        <li>
          <NavLink onClick={toggleMenu} to="/pages/support">Support</NavLink>
        </li>
        <li>
          <NavLink onClick={toggleMenu} to="/pages/why-pre-build">About Us</NavLink>
        </li>
        <li onClick={toggleMenu}>
          <img src={Close} alt="" width="30" className="menu" />
        </li>
      </ul>
      <div className="cart-icon">
        <span>{cart.length}</span>
        <NavLink className="cart-img" to="/cart">
          <AiOutlineShoppingCart />
        </NavLink>
      </div>
    </header>
  );
}