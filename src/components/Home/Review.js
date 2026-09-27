import React from "react";
import ReviewVideo from "../pages/Review/ReviewVideo";

import "./styles/Review.scss";
import "./styles/parallax.scss";

const Review = () => {
  return (
    <section className="review-section">
      <div className="review-section__container">
        <div className="review-section__header">
          <h2>Trusted by Gamers & Creators</h2>
          <p>See what the community has to say about their PC Evolvers builds.</p>
        </div>
        <div className="review-section__content">
          <ReviewVideo />
        </div>
      </div>
    </section>
  );
};

export default Review;