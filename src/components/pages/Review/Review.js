import React from "react";
import { Parallax } from 'react-parallax';

import ImageOne from '../../Parallax/ParallaxOne';
import ImageTwo from '../../Parallax/ParallaxTwo';
import ImageThree from '../../Parallax/ParallaxThree';
import TextBox from '../../Parallax/TextBox';

import MainReview from "./MainReview";
import "./styles/Review.scss";

const Review = () => {
  return (
    <div className="review-component">
      {" "}
        <MainReview />
      {" "}
      <ImageOne />
      <TextBox />
      <ImageTwo />
      <TextBox />
      <ImageThree />
    </div>
  );
};

export default Review;
