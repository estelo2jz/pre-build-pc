import React, { useState, useContext } from "react";
import Close from "../svg/times-solid.svg";
import { Link } from "react-router-dom";
import { DataContext } from "../Products/Data/DataProvider";

import PreBuildLogo from "../../assets/images/prebuild.png";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoBug } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
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
          <GoBug />
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
        {/* <Link className="cart-search" to="/#">
          <FaSearch />
        </Link>
        <Link className="cart-person" to="/login">
          <IoIosPerson />
        </Link> */}
        <Link className="cart-img" to="/cart">
          <AiOutlineShoppingCart />
        </Link>
      </div>
    </header>
  );
}



// import React, { useState, useContext } from "react";
// import { Link } from "react-router-dom";
// import { DataContext } from "../Products/Data/DataProvider";

// import Close from "../svg/times-solid.svg";
// import PreBuildLogo from "../../assets/images/prebuild.png";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { GoBug } from "react-icons/go";
// import pcevolvers from "../../assets/jdmspark.png";

// import "./styles/Header.scss";

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { cart } = useContext(DataContext);

//   return (
//     <header className={`header ${menuOpen ? "header--active" : ""}`}>
//       <div className="header__menu-icon" onClick={() => setMenuOpen(true)}>
//         <GoBug />
//       </div>

//       <div className="header__logo">
//         <Link to="/">
//           <img src={pcevolvers} alt="PC Evolvers Logo" />
//         </Link>
//       </div>

//       <nav className={`header__nav ${menuOpen ? "active" : ""}`}>
//         <ul>
//           <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
//           <li><Link to="/products" onClick={() => setMenuOpen(false)}>Best Sellers</Link></li>
//           <li><Link to="/pages/review" onClick={() => setMenuOpen(false)}>Reviews</Link></li>
//           <li><Link to="/pages/financing" onClick={() => setMenuOpen(false)}>Financing</Link></li>
//           <li><Link to="/pages/support" onClick={() => setMenuOpen(false)}>Support</Link></li>
//           <li><Link to="/pages/why-pre-build" onClick={() => setMenuOpen(false)}>About Us</Link></li>
//           <li className="header__nav-close" onClick={() => setMenuOpen(false)}>
//             <img src={Close} alt="Close Menu" />
//           </li>
//         </ul>
//       </nav>

//       <div className="header__cart">
//         <span>{cart.length}</span>
//         <Link to="/cart"><AiOutlineShoppingCart /></Link>
//       </div>
//     </header>
//   );
// }
