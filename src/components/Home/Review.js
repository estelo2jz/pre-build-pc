import React from "react";
import "./styles/Review.scss";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import Review1 from "../../assets/images/review/review1.jpg";
import Review2 from "../../assets/images/review/review2.jpg";
import Review3 from "../../assets/images/review/review3.jpg";
import Review4 from "../../assets/images/review/review5.jpg";
import Review5 from "../../assets/images/review/review6.jpg";
import Review6 from "../../assets/images/review/review7.png";
import Review7 from "../../assets/images/review/review8.png";
import Review8 from "../../assets/images/review/review9.jpg";

import ReviewAvatar1 from "../../assets/images/review/mrtop.jpg";
import ReviewAvatar2 from "../../assets/images/review/shortcircuit.jpg";
import ReviewAvatar3 from "../../assets/images/review/dannylee.jpg";
import ReviewAvatar4 from "../../assets/images/review/marc.jpg";
import ReviewAvatar5 from "../../assets/images/review/juniper.jpg";
import ReviewAvatar6 from "../../assets/images/review/rodey.jpg";
import ReviewAvatar7 from "../../assets/images/review/frustrated.jpg";
import ReviewAvatar8 from "../../assets/images/review/tech.jpg";

const reviewOpinion1 =
  "This computer is absolutely insane! Once again if you want to check out this brand new Redux gaming PC - it's an absolute super computer. Highly, highly recommend it.";
const reviewOpinion2 =
  "You basically just pick which games you play, which performance you want, and it'll suggest a rig for you. They make things much, much simpler and again for only $75 bucks? Okay!";
const reviewOpinion3 =
  "To wrap it up I can without hesitation put my stamp of approval on Redux based on what I've seen. I think it's great to see another builder pop up in the industry and drive more competition within the space.";
const reviewOpinion4 =
  "I would take a look at Redux at the top of your list. They're one of the better manufacturers out there and on a part level, warranty and value level Redux PC's are a great deal for prebuilt systems.";
const reviewOpinion5 =
  "It's crazy how well the PC is able to run and render things that would otherwise lag on most other devices! It looks great, it runs great, it's just phenomenal and I am very grateful to have it.";
const reviewOpinion6 =
  "I did an entire stream on the Redux after recording this video and it felt great, I played great and over that entire five hours the PC held up just fine. I had steady frames the entire time which I can honestly say I haven't had in a long long time. It feels good and hopefully with this new PC we're gonna be placing in some tournaments!";
const reviewOpinion7 =
  "This thing is incredible, check out the links below, you guys have to get one of these things! It's a great price, it's an astounding product - trust me.";
const reviewOpinion8 =
  "This is a system I've been testing from @BuildRedux. They're a new prebuilt company selling systems for the cost of the parts + a $75 build fee. They have amazing systems with Ryzen 5000 series CPUs and 3070s available for pre-order now. P.S. check out that cable management!";

const reviewName1 = "Mr Top 5.";
const reviewName2 = "Short Circuit.";
const reviewName3 = "Danny Le.";
const reviewName4 = "Marc Aranibar.";
const reviewName5 = "Juniper Jd.";
const reviewName6 = "RodeyBros.";
const reviewName7 = "The Frustrated Gamer.";
const reviewName8 = "Tech By Matt.";

const reviewBio1 =
  "Thanks to @MrTop5 for showing off the unboxing of the #BuildRedux PC! Check out his video to see his PC and setup!";
const reviewBio2 = "Thanks for the awesome review @ShortCircuit!";
const reviewBio3 =
  "Thanks @nerdonabudget for your great review of the #BuildRedux PC!";
const reviewBio4 =
  "Awesome @MarcAranibar! We're proud to have sold you on a prebuilt system!";
const reviewBio5 =
  "The #BuildRedux PC will look great in that setup! @JuniperJD";
const reviewBio6 =
  "First win with #BuildRedux! Check out @RodeyBros full unboxing on YouTube!";
const reviewBio7 =
  "Looking good! Make sure to follow @frustrated_gamr on YouTube to see some amazing gameplay!";
const reviewBio8 =
  "Thanks for the shout out @TechByMatt! We're glad you're loving the #BuildRedux PC.";

const Review = () => {
  return (
    <div className="review">
      <div className="review__heading">
        <p>WE BUILD FOR THE BEST.</p>
      </div>
      <div className="review__outer">
        <div className="review__card">
          <div className="review__top-container">
            <div className="review__top">
              <div className="review__top-img">
                <img src={Review1} alt="" />
              </div>
              <div className="review__top-opinion">
                <p>
                  <span>
                    <FaQuoteLeft />
                  </span>
                  {reviewOpinion1}
                  <span>
                    <FaQuoteRight />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="review__bottom-container">
            <div className="review__bottom">
              <div className="review__bottom-img">
                <img src={ReviewAvatar1} alt="" />
              </div>
              <div className="review__bottom-profile">
                <div className="review__bottom-name">
                  <p>{reviewName1}</p>
                </div>
                <div className="review__bottom-bio">
                  <p>{reviewBio1}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="review__card">
          <div className="review__top-container">
            <div className="review__top">
              <div className="review__top-img">
                <img src={Review2} alt="" />
              </div>
              <div className="review__top-opinion">
                <p>
                  <span>
                    <FaQuoteLeft />
                  </span>
                  {reviewOpinion1}
                  <span>
                    <FaQuoteRight />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="review__bottom-container">
            <div className="review__bottom">
              <div className="review__bottom-img">
                <img src={ReviewAvatar2} alt="" />
              </div>
              <div className="review__bottom-profile">
                <div className="review__bottom-name">
                  <p>{reviewName2}</p>
                </div>
                <div className="review__bottom-bio">
                  <p>{reviewBio2}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="review__card">
          <div className="review__top-container">
            <div className="review__top">
              <div className="review__top-img">
                <img src={Review3} alt="" />
              </div>
              <div className="review__top-opinion">
                <p>
                  <span>
                    <FaQuoteLeft />
                  </span>
                  {reviewOpinion1}
                  <span>
                    <FaQuoteRight />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="review__bottom-container">
            <div className="review__bottom">
              <div className="review__bottom-img">
                <img src={ReviewAvatar3} alt="" />
              </div>
              <div className="review__bottom-profile">
                <div className="review__bottom-name">
                  <p>{reviewName3}</p>
                </div>
                <div className="review__bottom-bio">
                  <p>{reviewBio3}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="review__card">
          <div className="review__top-container">
            <div className="review__top">
              <div className="review__top-img">
                <img src={Review4} alt="" />
              </div>
              <div className="review__top-opinion">
                <p>
                  <span>
                    <FaQuoteLeft />
                  </span>
                  {reviewOpinion1}
                  <span>
                    <FaQuoteRight />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="review__bottom-container">
            <div className="review__bottom">
              <div className="review__bottom-img">
                <img src={ReviewAvatar4} alt="" />
              </div>
              <div className="review__bottom-profile">
                <div className="review__bottom-name">
                  <p>{reviewName4}</p>
                </div>
                <div className="review__bottom-bio">
                  <p>{reviewBio4}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="review__card">
          <div className="review__top-container">
            <div className="review__top">
              <div className="review__top-img">
                <img src={Review5} alt="" />
              </div>
              <div className="review__top-opinion">
                <p>
                  <span>
                    <FaQuoteLeft />
                  </span>
                  {reviewOpinion1}
                  <span>
                    <FaQuoteRight />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="review__bottom-container">
            <div className="review__bottom">
              <div className="review__bottom-img">
                <img src={ReviewAvatar5} alt="" />
              </div>
              <div className="review__bottom-profile">
                <div className="review__bottom-name">
                  <p>{reviewName5}</p>
                </div>
                <div className="review__bottom-bio">
                  <p>{reviewBio5}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="review__card">
          <div className="review__top-container">
            <div className="review__top">
              <div className="review__top-img">
                <img src={Review6} alt="" />
              </div>
              <div className="review__top-opinion">
                <p>
                  <span>
                    <FaQuoteLeft />
                  </span>
                  {reviewOpinion1}
                  <span>
                    <FaQuoteRight />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="review__bottom-container">
            <div className="review__bottom">
              <div className="review__bottom-img">
                <img src={ReviewAvatar6} alt="" />
              </div>
              <div className="review__bottom-profile">
                <div className="review__bottom-name">
                  <p>{reviewName6}</p>
                </div>
                <div className="review__bottom-bio">
                  <p>{reviewBio6}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="review__card">
          <div className="review__top-container">
            <div className="review__top">
              <div className="review__top-img">
                <img src={Review7} alt="" />
              </div>
              <div className="review__top-opinion">
                <p>
                  <span>
                    <FaQuoteLeft />
                  </span>
                  {reviewOpinion1}
                  <span>
                    <FaQuoteRight />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="review__bottom-container">
            <div className="review__bottom">
              <div className="review__bottom-img">
                <img src={ReviewAvatar7} alt="" />
              </div>
              <div className="review__bottom-profile">
                <div className="review__bottom-name">
                  <p>{reviewName7}</p>
                </div>
                <div className="review__bottom-bio">
                  <p>{reviewBio7}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="review__card">
          <div className="review__top-container">
            <div className="review__top">
              <div className="review__top-img">
                <img src={Review8} alt="" />
              </div>
              <div className="review__top-opinion">
                <p>
                  <span>
                    <FaQuoteLeft />
                  </span>
                  {reviewOpinion1}
                  <span>
                    <FaQuoteRight />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="review__bottom-container">
            <div className="review__bottom">
              <div className="review__bottom-img">
                <img src={ReviewAvatar8} alt="" />
              </div>
              <div className="review__bottom-profile">
                <div className="review__bottom-name">
                  <p>{reviewName8}</p>
                </div>
                <div className="review__bottom-bio">
                  <p>{reviewBio8}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
