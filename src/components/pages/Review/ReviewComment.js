// Review.jsx
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
    name: "Mr Top 5.",
    opinion: "Thanks to @MrTop5 for showing off the unboxing of the #BuildRedux PC! Check out his image to see his PC and setup!",
    // img: ReviewAvatar1,
    image: "https://www.youtube.com/watch?v=4vpPJb392Vg",
    summary: "This computer is absolutely insane! Once again if you want to check out this brand new Redux gaming PC - it's an absolute super computer. Highly, highly recommend it.",
  },
  {
    name: "Short Circuit.",
    opinion: "Thanks for the awesome review @ShortCircuit!",
    // img: ReviewAvatar2,
    image: "https://www.youtube.com/watch?v=UhO7MLntkDE",
    summary: "You basically just pick which games you play, which performance you want, and it'll suggest a rig for you. They make things much, much simpler and again for only $75 bucks? Okay!",
  },
  {
    name: "Danny Le.",
    opinion: "Thanks @nerdonabudget for your great review of the #BuildRedux PC!",
    // img: ReviewAvatar3,
    image: "https://www.youtube.com/watch?v=BTMdT1pvJus",
    summary: "To wrap it up I can without hesitation put my stamp of approval on Redux based on what I've seen. I think it's great to see another builder pop up in the industry and drive more competition within the space.",
  },
  {
    name: "Marc Aranibar.",
    opinion: "Awesome @MarcAranibar! We're proud to have sold you on a prebuilt system!",
    // img: ReviewAvatar4,
    image: "https://www.youtube.com/watch?v=Le8gwj0gZ7g",
    summary: "I would take a look at Redux at the top of your list. They're one of the better manufacturers out there and on a part level, warranty and value level Redux PC's are a great deal for prebuilt systems.",
  },
  {
    name: "Juniper Jd.",
    opinion: "The #BuildRedux PC will look great in that setup! @JuniperJD",
    // img: ReviewAvatar5,
    image: "https://www.youtube.com/watch?v=uFUqZP11NaU",
    summary: "It's crazy how well the PC is able to run and render things that would otherwise lag on most other devices! It looks great, it runs great, it's just phenomenal and I am very grateful to have it.",
  },
  {
    name: "RodeyBros.",
    opinion: "First win with #BuildRedux! Check out @RodeyBros full unboxing on YouTube!",
    // img: ReviewAvatar6,
    image: "https://www.youtube.com/watch?v=Y5FJnSN6kG0",
    summary: "I did an entire stream on the Redux after recording this image and it felt great, I played great and over that entire five hours the PC held up just fine. I had steady frames the entire time which I can honestly say I haven't had in a long long time. It feels good and hopefully with this new PC we're gonna be placing in some tournaments!",
  },
  {
    name: "The Frustrated Gamer.",
    opinion: "Looking good! Make sure to follow @frustrated_gamr on YouTube to see some amazing gameplay!",
    // img: ReviewAvatar7,
    image: "https://www.youtube.com/watch?v=ZXD0lc83MpM",
    summary: "This thing is incredible, check out the links below, you guys have to get one of these things! It's a great price, it's an astounding product - trust me.",
  },
  {
    name: "Tech By Matt.",
    opinion: "Thanks for the shout out @TechByMatt! We're glad you're loving the #BuildRedux PC.",
    // img: ReviewAvatar8,
    image: "https://www.youtube.com/watch?v=eERtcqmLkwY",
    summary: "This is a system I've been testing from @BuildRedux. They're a new prebuilt company selling systems for the cost of the parts + a $75 build fee. They have amazing systems with Ryzen 5000 series CPUs and 3070s available for pre-order now. P.S. check out that cable management!",
  },
];

export default function Review() {
  return (
    <section className="review">
      <div className="review__heading">
        <p>What Our Customers Say</p>
      </div>
      <div className="review__outer">
        <Swiper
          spaceBetween={24}
          slidesPerView={"auto"}
          grabCursor={true}
          centeredSlides={false}
        >
          {reviews.map((review) => (
            <SwiperSlide className="review__card" key={review.id}>
              <div className="review__top-container">
                <div className="review__top-opinion">
                  <p>
                    <span>"</span>
                    {review.opinion}
                    <span>"</span>
                  </p>
                </div>
              </div>
              <div className="review__bottom-container">
                <div className="review__bottom">
                  <div className="review__bottom-img">
                    {/* <img src={review.image} alt={review.name} /> */}
                  </div>
                  <div className="review__bottom-name">
                    <p>{review.name}</p>
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
