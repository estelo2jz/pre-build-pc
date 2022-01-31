import React from "react";
import { Parallax } from 'react-parallax';

import TopHeader from "./TopHeader";
import Pricing from "./Pricing";
import Review from "./Review";
import BestSellers from "./BestSellers";
import Follow from "./Follow";
import FooterOurMission from "../Footer/FooterOurMission";
import Checkout from "../Footer/CheckoutBuild";

import "./styles/Home.scss";

const Home = () => {
  return (
    <div className="home__main">
      <div className="home__main__top-header">
        <TopHeader />
      </div>
      <div className="home__main__price">
        <Pricing />
      </div>

      <div className="home__main__review">
        <Review />
      </div>
      <div className="home__main__best-sellers">
        <BestSellers />
      </div>

      <div className="home__main__follow">
        <Follow />
      </div>

      <div className="home__main__checkout">
        <Checkout />
      </div>

      <div className="home__main__footer">
        <FooterOurMission />
      </div>
    </div>
  );
};

export default Home;
