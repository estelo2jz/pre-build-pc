import React from 'react';
import { Link } from 'react-router-dom';

import './styles/FooterOurMission.scss';

import Footer1 from '../../assets/images/footer/footerbuild.jpg';

const FooterOurMission = () => {
  return (
    <div className="footer-our-mission">
      <div className="footer-our-mission__left">
        <img src={Footer1} alt="" />
      </div>
      <div className="footer-our-mission__right">
        <div className="footer-our-mission__right-p">
          <p>
            Our mission is to build gaming PCs at the best price without cutting corners.
          </p>
        </div>
        <Link to="/products" className="footer-our-mission__right-btn">
          <button>LET'S BUILD</button>
        </Link>
      </div>
    </div>
  )
}

export default FooterOurMission
