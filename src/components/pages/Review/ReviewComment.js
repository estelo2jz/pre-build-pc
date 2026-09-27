import React from "react";
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import "./styles/Review.scss";

const reviews = [
  {
    id: 1,
    name: "Alex Johnson",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    opinion: "Loved the build quality and support. Highly recommend!",
  },
  {
    id: 2,
    name: "Samantha Lee",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    opinion: "Amazing performance and stylish look.",
  },
  {
    id: 3,
    name: "Marcus Black",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    opinion: "One of the best purchases I've made. Smooth experience!",
  },
  {
    id: 4,
    name: "Mr Top 5",
    opinion: "Thanks to @MrTop5 for showing off the unboxing of the #BuildRedux PC! Check out his video to see his setup!",
    image: "https://img.youtube.com/vi/4vpPJb392Vg/hqdefault.jpg",
    summary: "This computer is absolutely insane! Once again if you want to check out this brand new Redux gaming PC - it's an absolute super computer.",
  },
  {
    id: 5,
    name: "Short Circuit",
    opinion: "Thanks for the awesome review @ShortCircuit!",
    image: "https://img.youtube.com/vi/UhO7MLntkDE/hqdefault.jpg",
    summary: "You basically just pick which games you play, which performance you want, and it'll suggest a rig for you.",
  },
  {
    id: 6,
    name: "Danny Le",
    opinion: "Thanks @nerdonabudget for your great review of the #BuildRedux PC!",
    image: "https://img.youtube.com/vi/BTMdT1pvJus/hqdefault.jpg",
    summary: "To wrap it up I can without hesitation put my stamp of approval on Redux based on what I've seen.",
  },
  {
    id: 7,
    name: "Marc Aranibar",
    opinion: "Awesome @MarcAranibar! We're proud to have sold you on a prebuilt system!",
    image: "https://img.youtube.com/vi/Le8gwj0gZ7g/hqdefault.jpg",
    summary: "They're one of the better manufacturers out there and on a part level, warranty and value level Redux PC's are a great deal.",
  },
  {
    id: 8,
    name: "Juniper Jd",
    opinion: "The #BuildRedux PC will look great in that setup! @JuniperJD",
    image: "https://img.youtube.com/vi/uFUqZP11NaU/hqdefault.jpg",
    summary: "It's crazy how well the PC is able to run and render things that would otherwise lag on most other devices!",
  },
  {
    id: 9,
    name: "RodeyBros",
    opinion: "First win with #BuildRedux! Check out @RodeyBros full unboxing on YouTube!",
    image: "https://img.youtube.com/vi/Y5FJnSN6kG0/hqdefault.jpg",
    summary: "I had steady frames the entire time which I can honestly say I haven't had in a long long time.",
  },
  {
    id: 10,
    name: "The Frustrated Gamer",
    opinion: "Looking good! Make sure to follow @frustrated_gamr on YouTube to see some amazing gameplay!",
    image: "https://img.youtube.com/vi/ZXD0lc83MpM/hqdefault.jpg",
    summary: "This thing is incredible, check out the links below, you guys have to get one of these things!",
  },
  {
    id: 11,
    name: "Tech By Matt",
    opinion: "Thanks for the shout out @TechByMatt! We're glad you're loving the #BuildRedux PC.",
    image: "https://img.youtube.com/vi/eERtcqmLkwY/hqdefault.jpg",
    summary: "They have amazing systems with Ryzen 5000 series CPUs and 3070s available for pre-order now.",
  },
];

export default function Review() {
  return (
    <section className="review">ww
      <div className="review__heading">
        <p>What Our Customers Say</p>
      </div>
      <div className="review__outer">
        <Swiper
          spaceBetween={24}
          slidesPerView={"auto"}
          grabCursor={true}
          centeredSlides={false}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 }
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide className="review__card" key={review.id}>
              <div className="review__content-wrapper">
                <div className="review__top-container">
                  <div className="review__top-opinion">
                    <p>
                      <span className="quote-mark">“</span>
                      {review.opinion}
                      <span className="quote-mark">”</span>
                    </p>
                    {review.summary && (
                      <p className="review__summary-text">{review.summary}</p>
                    )}
                  </div>
                </div>
                <div className="review__bottom-container">
                  <div className="review__bottom">
                    <div className="review__bottom-img">
                      <img src={review.image} alt={review.name} />
                    </div>
                    <div className="review__bottom-name">
                      <p>{review.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}