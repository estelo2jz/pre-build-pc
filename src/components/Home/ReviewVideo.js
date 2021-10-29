import React from "react";
import { Data } from "./ReviewVideoData";
import ReactPlayer from "react-player";
import "./styles/ReviewVideo.scss";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const ReviewVideo = () => {
  return (
    <div className="review-video">
      {Data.map((item, index) => {
        return (
          <>
            <div className="review-video__container">
              <div className="review-video__top">
                <div className="review-video__top-video">
                  <ReactPlayer
                    className="review-video__top-video-player"
                    width="100%"
                    height="300px"
                    controls="true"
                    // className="review-video__top-video"
                    url={item.video}
                  />
                </div>
                <div className="review-video__top-summary">
                  <span className="review-video__top-summary-span-1">
                    <FaQuoteLeft />
                  </span>
                  <p>{item.summary}</p>
                  <span className="review-video__top-summary-span-2">
                    <FaQuoteRight />
                  </span>
                </div>
              </div>
              <div className="review-video__bottom">
                <div className="review-video__bottom-img">
                  <img src={item.img} alt="" />
                </div>
                <div className="review-video__bottom-title">
                  <div className="review-video__bottom-name">
                    <p>{item.name}</p>
                  </div>
                  <div className="review-video__bottom-comments">
                    <p>{item.comments}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ReviewVideo;
