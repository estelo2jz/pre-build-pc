import React, {useState, useContext} from 'react'
import Menu from './svg/bars-solid.svg'
import Close from './svg/times-solid.svg'
import Cart from './svg/cart.svg'
import {Link} from 'react-router-dom'
import {DataContext} from './DataProvider'

export default function Header() {
    const [menu, setMenu] = useState(false)
    const value = useContext(DataContext)
    const [cart] = value.cart

    const toggleMenu = () =>{
        setMenu(!menu)
    }

    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    return (
        <header>
            <div className="menu" onClick={toggleMenu}>
                <img src={Menu} alt="" width="30" />
            </div>

            <div className="logo">
                <h1><Link to="/products">PRE-BUILD</Link></h1>
            </div>
            <ul style={styleMenu}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/pages/build-your-pc">Build Your PC</Link></li>
                <li><Link to="/pages/review">Reviews</Link></li>
                <li><Link id="best-sellers" to="/pages/review">Best Sellers</Link></li>
                <li><Link to="/pages/financing">Financing</Link></li>
                <li><Link to="/pages/support">Support</Link></li>
                <li><Link to="/pages/why-pre-build">About Us</Link></li>
                <li onClick={toggleMenu}>
                    <img src={Close} alt="" width="30" className="menu" />
                </li>
            </ul>

            <div className="cart-icon">
                <span>{cart.length}</span>
                <Link to="/cart">
                    <img src={Cart} alt="" width="30" />
                </Link>
            </div>
            
      </header>
    )
}