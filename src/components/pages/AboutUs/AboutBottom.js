import React from "react";

import About1 from '../../../assets/images/about/about1.png';
import About2 from '../../../assets/images/about/about2.png';
import About3 from '../../../assets/images/about/about3.png';
import About4 from '../../../assets/images/about/about4.jpg';
import AboutBG from '../../../assets/images/about/aboutBG.jpg';
import Avatar1 from '../../../assets/images/about/avatar1.jpg';
import Avatar2 from '../../../assets/images/about/avatar2.jpg';
import Avatar3 from '../../../assets/images/about/avatar3.jpg';

import './styles/AboutBottom.scss';

const AboutBGOne = () => {
  return (
    <div className="about-bottom">
      <div className="about-bottom__bottom">
        <div className="about-bottom__level">
          <p>LEVEL UP!</p>
          <p>
            If you're a serious gamer and know what you want out of your PC, why not customize your own Build Redux system? Pick your budget, select your favorite games, select the best components.
          </p>
        </div>
        <div className="about-bottom__btn">
          <button>START YOUR BUILD</button>
        </div>
        <div className="about-bottom__bottom-contents">
          <img src={About4} alt="" />
        </div>
      </div>
      <div className="about-bottom__top">
        <div className="about-bottom__top-contents">
          <p>NOT SURE WHERE TO START?</p>
          <p>
            Whether you are just starting out or a serious gamer, our PCs are built to the highest standard, to give you the best gaming experience. Pick your budget and view the default configuration. Looking for a little more? Why not customize it.
          </p>
        </div>
        <div className="about-bottom__top-cards">
          <div className="about-bottom__top-container">
            <div className="about-bottom__top-power">
              <p className="about-bottom__top-good">GOOD.</p>
              <div className="about-bottom__top-box">
                <div className="about-bottom__top-img">
                  <img src={Avatar1} alt="" />
                </div>
                <div className="about-bottom__top-price">
                  <p className="about-bottom__top-price-child">Starting at $1,433</p>
                  <p className="about-bottom__top-price-child">Or as low as $46 monthly</p>
                  <button>VIEW BUILD</button>
                </div>
              </div>
            </div>
          </div>
          <div className="about-bottom__top-container">
            <div className="about-bottom__top-power">
              <p className="about-bottom__top-good">BETTER.</p>
              <div className="about-bottom__top-box">
                <div className="about-bottom__top-img">
                  <img src={Avatar2} alt="" />
                </div>
                <div className="about-bottom__top-price">
                  <p className="about-bottom__top-price-child">Starting at $1,748</p>
                  <p className="about-bottom__top-price-child">Or as low as $56 monthly</p>
                  <button>VIEW BUILD</button>
                </div>
              </div>
            </div>
          </div>
          <div className="about-bottom__top-container">
            <div className="about-bottom__top-power">
              <p className="about-bottom__top-good">BEST.</p>
              <div className="about-bottom__top-box">
                <div className="about-bottom__top-img">
                  <img src={Avatar3} alt="" />
                </div>
                <div className="about-bottom__top-price">
                  <p className="about-bottom__top-price-child">Starting at $2,733</p>
                  <p className="about-bottom__top-price-child">Or as low as $88 monthly</p>
                  <button>VIEW BUILD</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBGOne;
