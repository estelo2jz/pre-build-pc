import React from "react";
import { Data } from "./ReviewVideoData";
import "./styles/MainReview.scss";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  return (
    <div className="review">
      <div className="review__heading">
        <p>WE BUILD FOR THE BEST.</p>
      </div>
      <div className="review__outer">
        {Data.map((item, index) => {
          return (
            <>
              <div className="review__card">
                <div className="review__bottom-container">
                  <div className="review__bottom">
                    <div className="review__bottom-img">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="review__bottom-profile">
                      <div className="review__bottom-name">
                        <p>{item.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review__top-container">
                  <div className="review__top">
                    <div className="review__top-opinion">
                      <p>
                        <span>
                          <FaQuoteLeft />
                        </span>
                        {item.summary}
                        <span>
                          <FaQuoteRight />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Review;
