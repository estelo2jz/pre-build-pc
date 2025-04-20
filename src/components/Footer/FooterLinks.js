import React from 'react';
import { NavLink } from 'react-router-dom';

import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import pcevolvers from "../../assets/pcevolversNObg.png"

import './styles/FooterLinks.scss';

const FooterLinks = () => {
  return (
    <div className="footer-links">
      <div className="footer-links__outer">
        <div className="footer-links__container">
          <div className="footer-links__sign-up">
            <p>Sign up to our newsletter for the latest PC news.</p>
          </div>
          <div className="footer-links__socials">
            <span><FaFacebookF /></span>
            <span><FaTwitter /></span>
            <span><BsInstagram /></span>
          </div>
        </div>
        <div className="footer-links__inner">
          <div className="footer-links__container">
            <div className="footer-links__title">
              <p>Shop</p>
            </div>
            <div className="footer-links__item">
              <NavLink to="/products" className="footer-links__to">
                <p>Build Your PC</p>
              </NavLink>
            </div>
            <div className="footer-links__item">
              <NavLink to="/pages/why-pre-build" className="footer-links__to">
                <p>Why Pre-Build</p>
              </NavLink>
            </div>
            <div className="footer-links__item">
              <NavLink to="/pages/support" className="footer-links__to">
                <p>Support</p>
              </NavLink>
            </div>
          </div>   
          <div className="footer-links__container">
            <div className="footer-links__title">
              <p>Best Sellers</p>
            </div>
            <div className="footer-links__item">
              <NavLink to="/products/build=good" className="footer-links__to">
                <p>Good.</p>
              </NavLink>
            </div>
            <div className="footer-links__item">
              <NavLink to="/products/build=better" className="footer-links__to">
                <p>Better.</p>
              </NavLink>
            </div>
            <div className="footer-links__item">
              <NavLink to="/products/build=best" className="footer-links__to">
                <p>Best.</p>
              </NavLink>
            </div>
          </div>
          <div className="footer-links__container">
            <div className="footer-links__title">
              <p>Community</p>
            </div>
            <div className="footer-links__item">
              <NavLink to="/terms&conditions" className="footer-links__to">
                <p>Terms & Conditions</p>
              </NavLink>
            </div>
            <div className="footer-links__item">
              <NavLink to="/privacy" className="footer-links__to">
                <p>Privacy Policy</p>
              </NavLink>
            </div>
            <div className="footer-links__item">
              <NavLink to="/refund" className="footer-links__to">
                <p>Refund Policy</p>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="footer-links__logo">
          <div className="footer-links__logo">
            <img src={pcevolvers} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterLinks
