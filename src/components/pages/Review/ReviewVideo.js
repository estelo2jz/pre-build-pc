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
          <div className="review-video__container" key={index}>
            <div className="review-video__top">
              <div className="review-video__top-video">
                <ReactPlayer
                  className="review-video__top-video-player"
                  width="100%"
                  height="100%"
                  controls={true}
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
                <img src={item.img} alt={item.name || "Reviewer"} />
              </div>
              <div className="review-video__bottom-title">
                <div className="review-video__bottom-name">
                  <h4>{item.name}</h4>
                </div>
                <div className="review-video__bottom-comments">
                  <p>{item.comments}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewVideo;