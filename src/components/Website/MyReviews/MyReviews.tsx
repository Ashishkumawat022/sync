import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import cx from "./MyReviews.module.scss";
import st from "../../../assets/stylesheet/style.module.scss";

import { Container, Form, Col, Row } from "react-bootstrap";
import {
  coffeeShop1,
  location,
  Filled,
  location2,
} from "../../../assets/images";
import { CoffeeShop } from "../../../components/Website";

import { BsStarFill } from "react-icons/bs";
import { AiTwotoneStar } from "react-icons/ai";

import { IoIosArrowBack } from "react-icons/io";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const MyReviews = (props: any) => {
	const {status} = props
	const [cafeStatus,setCafeStatus] = useState<string>(status)

  return (
    
    <>
      <div className={`${cx.coffeShop}`}>
        <div className={`${cx.coffeShopImg}`}>
          <img src={coffeeShop1} className={`${cx.image}`} />
          <div className={`${cx.overlay}`}>
            <img src={Filled} className={`${cx.shapeBg}`} />
            {cafeStatus === "inactive" && <NavLink to="#" onClick={()=>{setCafeStatus("active")}} className={`${cx.viewBtn}`}><img src={location} /></NavLink> }
            {cafeStatus === "active" && <NavLink to="#" onClick={()=>{setCafeStatus("inactive")}} className={`${cx.viewBtn} ${cx.active}`}><img src={location2} /></NavLink>}
          </div>
        </div>
        <div className={`${cx.coffeShopBody}`}>
          <h3>
            <NavLink to="#/cafe-details">Café Los Dos</NavLink>
          </h3>
          <p>Greater Boston, Boston</p>
          <span className={`${cx.rating}`}>
            <BsStarFill /> 4.5
          </span>
        </div>
      </div>
      <div className={`${cx.reviewBox}`}>
        <div className={`${cx.reviewRate}`}>
          <div className={`${cx.reviewStar}`}>
            <ul>
              <li>
                <AiTwotoneStar />
              </li>
              <li>
                <AiTwotoneStar />
              </li>
              <li>
                <AiTwotoneStar />
              </li>
              <li>
                <AiTwotoneStar />
              </li>
              <li>
                <AiTwotoneStar />
              </li>
            </ul>
            <h5>
              Exceptional service! This cozy restaurant has left the
              best impressions!{" "}
            </h5>
          </div>
          <div className={`${cx.ratingNumber}`}>
            <span>4.5</span>
          </div>
        </div>
        <p>
          {" "}
          I always feel welcomed when I come to this cafe. The staff are
          friendly and the atmosphere is cozy. 😍😍
        </p>
        <div className={`${cx.seeReview}`}>
          <NavLink to="/reviews">See review</NavLink>
        </div>
      </div>
    </>
  );
};

export default MyReviews;
