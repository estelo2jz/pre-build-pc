import React from 'react';
import CheckoutBuild from './CheckoutBuild';
import FooterLinks from './FooterLinks';
import FooterOurMission from './FooterOurMission';

import './styles/Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <CheckoutBuild />
      <FooterOurMission />
      <FooterLinks />
    </div>
  )
}

export default Footer
