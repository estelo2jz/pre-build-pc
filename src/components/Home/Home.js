import React from "react";

import TopHeader from "./TopHeader";
import Pricing from "./Pricing";
import Review from "./Review";
import BestSellers from "./BestSellers";
import Follow from "./Follow";
import FooterOurMission from "../Footer/FooterOurMission";

import "./styles/Home.scss";

const Home = () => {
  return (
    <div className="home">
      <section className="home__section home__header" style={{ "--delay": 1 }}>
        <TopHeader />
      </section>

      <section className="home__section home__pricing" style={{ "--delay": 2 }}>
        <Pricing />
      </section>

      <section className="home__section home__review" style={{ "--delay": 3 }}>
        <Review />
      </section>

      <section className="home__section home__bestsellers" style={{ "--delay": 4 }}>
        <BestSellers />
      </section>

      <section className="home__section home__follow" style={{ "--delay": 5 }}>
        <Follow />
      </section>

      <footer className="home__section home__footer" style={{ "--delay": 6 }}>
        <FooterOurMission />
      </footer>
    </div>
  );
};

export default Home;