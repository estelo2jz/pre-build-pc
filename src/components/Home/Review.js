import React from "react";
import { Parallax } from "react-parallax";

import ImageOne from "../Parallax/ParallaxOne";
import ImageTwo from "../Parallax/ParallaxTwo";
import ImageThree from "../Parallax/ParallaxThree";
import TextBox from "../Parallax/TextBox";

import ReviewComment from "../pages/Review/ReviewComment";
import ReviewVideo from "../pages/Review/ReviewVideo";
import "./styles/Review.scss";
import "./styles/parallax.scss";

import ApexBG from './apex.jpg';

const Review = () => {
  return (
    <div>
      <div className="content">
        <ReviewVideo />
      </div>
    {/* <Parallax
      className="image"
      blur={0}
      bgImage={ApexBG}
      strength={800}
      bgImageStyle={{ minheight: "100vh" }}
    >
    </Parallax> */}

    </div>
  );
};

export default Review;
