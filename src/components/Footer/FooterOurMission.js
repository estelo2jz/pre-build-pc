import React from 'react';
import { Link } from 'react-router-dom';

import './styles/FooterOurMission.scss';

import Footer1 from '../../assets/images/footer/footerbuild.jpg';

const FooterOurMission = () => {
  return (
    <div className="footer-our-mission">
      <div className="footer-our-mission__left">
        <img src={Footer1} alt="Custom gaming PC build process" />
        <div className="footer-our-mission__img-overlay"></div>
      </div>
      <div className="footer-our-mission__right">
        <div className="footer-our-mission__content">
          <span className="footer-our-mission__tag">Our Core Mission</span>
          <h2>Uncompromising Performance</h2>
          <p>
            Our mission is to build gaming PCs at the best price without cutting corners.
          </p>
          <Link to="/products" className="footer-our-mission__btn-link">
            <button>LET'S BUILD</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FooterOurMission;