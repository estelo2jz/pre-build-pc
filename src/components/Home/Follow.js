import React from "react";

import { FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsInstagram } from "react-icons/bs";

import './styles/Follow.scss';

import Follow1 from "../../assets/images/home/follow1.jpg";
import Follow2 from "../../assets/images/home/follow2.jpg";
import Follow3 from "../../assets/images/home/follow3.jpg";
import Follow4 from "../../assets/images/home/follow4.jpg";
import Follow5 from "../../assets/images/home/follow5.jpg";
import Follow6 from "../../assets/images/home/follow6.jpg";

const Follow = () => {
  const images = [Follow1, Follow2, Follow3, Follow4, Follow5, Follow6];

  return (
    <div className="follow">
      <div className="follow__container">
        <div className="follow__at">
          <p>
            FOLLOW THE JOURNEY <span>@pcevolvers</span>
          </p>
        </div>
        <div className="follow__socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <BsTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <BsInstagram />
          </a>
        </div>
      </div>
      
      <div className="follow__imgs">
        {images.map((imgSrc, index) => (
          <div className="follow__img-card" key={index}>
            <img src={imgSrc} alt={`PC Evolvers journey ${index + 1}`} />
            <div className="follow__img-overlay">
              <BsInstagram />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Follow;