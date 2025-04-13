import React from "react";
import { Parallax } from "react-parallax";

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
    <div className="home">
      <section className="home__section home__header">
        <TopHeader />
      </section>

      <section className="home__section home__pricing">
        <Pricing />
      </section>

      <section className="home__section home__review">
        <Review />
      </section>

      <section className="home__section home__bestsellers">
        <BestSellers />
      </section>

      <section className="home__section home__follow">
        <Follow />
      </section>

      <section className="home__section home__checkout">
        <Checkout />
      </section>

      <footer className="home__section home__footer">
        <FooterOurMission />
      </footer>
    </div>
  );
};

export default Home;
