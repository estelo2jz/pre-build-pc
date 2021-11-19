import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";

const Slider = () => {
  return (
    <div>
      <Carousel show={3.5} slide={3} swiping={true}>
        <div color="#2d66c3">We love Web 🌐</div>
        <div color="#f44336">We love Developers 👩🏻‍</div>
        <a target="_blank" href="https://github.com/trendyol/">
          <div color="#d53f8c">This is our github</div>
        </a>
        <a target="_blank" href="https://trendyol.com/">
          <div color="#f27a1a">This is our website</div>
        </a>
      </Carousel>
    </div>
  );
};

export default Slider;
