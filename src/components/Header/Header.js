import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { RiMenu5Fill } from "react-icons/ri";
import { CiShoppingCart } from "react-icons/ci";
import { DataContext } from "../Products/Data/DataProvider";

import pcevolvers from "../../assets/pcevolversNObg.png";
import Close from "../svg/times-solid.svg";
import "./styles/Header.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const value = useContext(DataContext);
  const [cart] = value.cart;

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", menuOpen);
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScrollY && currentScroll > 100) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`header ${hideHeader ? "header--hidden" : ""}`}>
      <div className="header__container">
        <div className="header__menu-icon" onClick={toggleMenu}>
          <RiMenu5Fill />
        </div>

        <NavLink to="/" className="header__logo">
          <img src={pcevolvers} alt="PC Evolvers" />
        </NavLink>

        <nav className={`header__nav ${menuOpen ? "open" : ""}`}>
          <ul>
            <li><NavLink to="/" onClick={toggleMenu} className={({ isActive }) => isActive ? "nav-active" : ""}>Home</NavLink></li>
            <li><NavLink to="/products" onClick={toggleMenu} className={({ isActive }) => isActive ? "nav-active" : ""}>Best Sellers</NavLink></li>
            <li><NavLink to="/pages/review" onClick={toggleMenu} className={({ isActive }) => isActive ? "nav-active" : ""}>Reviews</NavLink></li>
            <li><NavLink to="/pages/financing" onClick={toggleMenu} className={({ isActive }) => isActive ? "nav-active" : ""}>Financing</NavLink></li>
            <li><NavLink to="/pages/support" onClick={toggleMenu} className={({ isActive }) => isActive ? "nav-active" : ""}>Support</NavLink></li>
            <li><NavLink to="/pages/why-pre-build" onClick={toggleMenu} className={({ isActive }) => isActive ? "nav-active" : ""}>About Us</NavLink></li>
            <li className="header__close" onClick={toggleMenu}>
              <img src={Close} alt="Close menu" />
            </li>
          </ul>
        </nav>

        <div className="header__cart">
          <span className="header__cart-count">{cart.length}</span>
          <NavLink to="/cart">
            <CiShoppingCart />
          </NavLink>
        </div>
      </div>
    </header>
  );
}
