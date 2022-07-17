import React from 'react';
import { Link } from 'react-router-dom';

import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';

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
              <Link to="/products" className="footer-links__to">
                <p>Build Your PC</p>
              </Link>
            </div>
            <div className="footer-links__item">
              <Link to="/pages/why-pre-build" className="footer-links__to">
                <p>Why Pre-Build</p>
              </Link>
            </div>
            <div className="footer-links__item">
              <Link to="/pages/support" className="footer-links__to">
                <p>Support</p>
              </Link>
            </div>
          </div>   
          <div className="footer-links__container">
            <div className="footer-links__title">
              <p>Best Sellers</p>
            </div>
            <div className="footer-links__item">
              <div to="/" className="footer-links__to">
                <p>Good.</p>
              </div>
            </div>
            <div className="footer-links__item">
              <div to="/" className="footer-links__to">
                <p>Better.</p>
              </div>
            </div>
            <div className="footer-links__item">
              <div to="/" className="footer-links__to">
                <p>Best.</p>
              </div>
            </div>
          </div>
          <div className="footer-links__container">
            <div className="footer-links__title">
              <p>Community</p>
            </div>
            <div className="footer-links__item">
              <Link to="/terms&conditions" className="footer-links__to">
                <p>Terms & Conditions</p>
              </Link>
            </div>
            <div className="footer-links__item">
              <Link to="/privacy" className="footer-links__to">
                <p>Privacy Policy</p>
              </Link>
            </div>
            <div className="footer-links__item">
              <Link to="/refund" className="footer-links__to">
                <p>Refund Policy</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-links__logo">
          <div className="footer-links__logo">
            <p>PRE-BUILD</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterLinks
