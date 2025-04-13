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
  return (
    <div className="follow">
      <div div className="follow__container">
        <div div className="follow__at">
          <p>
            FOLLOW THE JOURNEY <span>@prebuild</span>
          </p>
        </div>
        <div div className="follow__socials">
          <span>
            <FaFacebookF />
          </span>
          <span>
            <BsTwitter />
          </span>
          <span>
            <BsInstagram />
          </span>
        </div>
      </div>
      <div div className="follow__imgs">
        <img src={Follow1} alt="" />
        <img src={Follow2} alt="" />
        <img src={Follow3} alt="" />
        <img src={Follow4} alt="" />
        <img src={Follow5} alt="" />
        <img src={Follow6} alt="" />
      </div>
    </div>
  );
};

export default Follow;
