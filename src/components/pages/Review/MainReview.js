import React from "react";

import ReviewComment from './ReviewComment';
import ReviewVideo from './ReviewVideo';
import "./styles/MainReview.scss";

const Review = () => {
  return (
    <div className="review-component">
    <ReviewComment />
    <ReviewVideo />

    </div>
  );
};

export default Review;
