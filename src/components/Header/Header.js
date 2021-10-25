import React, { useState, useContext } from "react";
import Close from "../svg/times-solid.svg";
import { Link } from "react-router-dom";
import { DataContext } from "../Products/Data/DataProvider";

import PreBuildLogo from "../../assets/images/prebuild.png";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoThreeBars } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
// AiOutlineCloseCircle

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
          <GoThreeBars />
        </div>
      </div>
      <div className="logo">
        <Link to="/">
          <div className="logo-img">
            <img src={PreBuildLogo} alt="" />
          </div>
        </Link>
      </div>
      <ul style={styleMenu}>
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* <li>
          <Link to="/products">Products</Link>
        </li> */}
        <li>
          <Link to="/products">Best Sellers</Link>
        </li>
        <li>
          <Link to="/pages/review">Reviews</Link>
        </li>
        <li>
          <Link to="/pages/financing">Financing</Link>
        </li>
        <li>
          <Link to="/pages/support">Support</Link>
        </li>
        <li>
          <Link to="/pages/why-pre-build">About Us</Link>
        </li>
        <li onClick={toggleMenu}>
          <img src={Close} alt="" width="30" className="menu" />
        </li>
      </ul>
      <div className="cart-icon">
        <span>{cart.length}</span>
        <Link className="cart-search" to="/#">
          <FaSearch />
        </Link>
        <Link className="cart-person" to="/#">
          <IoIosPerson />
        </Link>
        <Link className="cart-img" to="/cart">
          <AiOutlineShoppingCart />
        </Link>
      </div>
    </header>
  );
}
