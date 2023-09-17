import React from "react";
import "./CarrouselDark.css";
import dark from "../../asset/Dark.png";
import transt from "../../asset/Rectangle.png";
export default function CarrouselDark() {
  return (
    <section className="carrousel-dark">
      <img src={dark} className="dark" alt="" />
      <div className="d-flex justify-content-center ">
      <div className="container-im-text ">
        <img src={transt} alt="" />
        <div className="cont-text-trans">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          aliquam accusantium. Officia, nulla quam fugiat culpa odit qui
          ducimus!
        </div>
      </div>
      <div className="container-im-text ">
        <img src={transt} alt="" />
        <div className="cont-text-trans">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          aliquam accusantium. Officia, nulla quam fugiat culpa odit qui
          ducimus!
        </div>
      </div>
      <div className="container-im-text ">
        <img src={transt} alt="" />
        <div className="cont-text-trans">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          aliquam accusantium. Officia, nulla quam fugiat culpa odit qui
          ducimus!
        </div>
      </div>
      </div>
    </section>
  );
}
