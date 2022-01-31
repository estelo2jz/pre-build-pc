import React from "react";
import { Parallax } from "react-parallax";

import Products from "../Products/Products";
import FortniteBG from "./fortnite.jpg";
import "./styles/parallax.scss";

const BestSellers = () => {
  return (
    // <Parallax
    //   className="image"
    //   blur={0}
    //   bgImage={FortniteBG}
    //   strength={800}
    //   bgImageStyle={{ minheight: "100%" }}
    // >
    // </Parallax>
    <div>
      <div className="content">
        <Products />
      </div>
    </div>
  );
};

export default BestSellers;
