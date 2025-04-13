import React from "react";

import ImageOne from '../../Parallax/ParallaxOne';
import ImageTwo from '../../Parallax/ParallaxTwo';
import ImageThree from '../../Parallax/ParallaxThree';

import MainReview from "./MainReview";
import "./styles/Review.scss";

const Review = () => {
  return (
    <div className="review-component">
      {" "}
        <MainReview />
      {" "}
      <ImageOne />
      <ImageTwo />
      <ImageThree />
    </div>
  );
};

export default Review;
