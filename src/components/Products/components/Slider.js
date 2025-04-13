import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CarouselComponent from "./Carousel"; // keep if needed for additional content

const CustomSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <CarouselComponent />
      <Slider {...settings}>
        <div style={{ backgroundColor: "#2d66c3", padding: "40px", color: "white" }}>
          We love Web 🌐
        </div>
        <div style={{ backgroundColor: "#f44336", padding: "40px", color: "white" }}>
          We love Developers 👩🏻‍💻
        </div>
        <a
          href="https://github.com/trendyol/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div style={{ backgroundColor: "#d53f8c", padding: "40px", color: "white" }}>
            This is our GitHub
          </div>
        </a>
        <a
          href="https://trendyol.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div style={{ backgroundColor: "#f27a1a", padding: "40px", color: "white" }}>
            This is our website
          </div>
        </a>
      </Slider>
    </div>
  );
};

export default CustomSlider;