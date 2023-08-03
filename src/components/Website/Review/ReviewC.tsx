import React from "react";
import cx from "./ReviewC.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import {
  appStore,
  card1,
  card2,
  card3,
  card4,
  coffeeShop1,
  coworking,
  googlePlay,
  location,
  logoNotchMobile,
  moon,
  slVector,
  star,
  star2,
} from "../../../assets/images";
import review_icon from "../../../assets/images/review_icon.png";
import { BsStarFill } from "react-icons/bs";

import st from "../../../assets/stylesheet/style.module.scss";
import { FaArrowRight } from "react-icons/fa";
import { AiTwotoneStar } from "react-icons/ai";

// const coffeShop = [
// 	{
// 	image:coffeeShop1,
// 	location:"Greater Boston, Boston",
// 	shopName:"James Brews & Coffee"
// },
// 	{
// 	image:coffeeShop2,
// 	location:"Urban Coffee",
// 	shopName:"James Brews & Coffee"
// },
// 	{
// 	image:coffeeShop3,
// 	location:"Greater Boston, Boston",
// 	shopName:"James Brews & Coffee"
// },
// 	{
// 	image:coffeeShop4,
// 	location:"Greater Boston, Boston",
// 	shopName:"James Brews & Coffee"
// },

// ]

const ReviewC = () => {
  return (
    <>
      <section className={`${cx.cardSection} ${st.sectionPaddingBottom}`}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={`${cx.cardBox}`}>
                <div className={`${cx.cardBox_head}`}>
                <div className={`${cx.reviewComment}`}>
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
                        </div>

                  <p>
                    Exceptional service! This cozy restaurant has left the best
                    impressions!{" "}
                  </p>
                </div>
                <div className={`${cx.overlay}`}>
                  <NavLink to="#" className={`${cx.nextBtn}`}>
                    {/* <FaArrowRight /> */}
                    4.5
                  </NavLink>
                  <svg
                    className={`${cx.bgShape}`}
                    width="91"
                    height="89"
                    viewBox="0 0 91 89"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 0.499915C0.413197 0.489838 0.852842 0.489388 1.31458 0.499915H89.5C90 35.1666 90.7 100.8 89.5 86C88.3 71.2 73 67.8333 65.5 68C59.3333 67.6667 44.8 67.2 36 68C27.2 68.8 24.3333 62.3333 24 59V50C24.1667 42.6666 24.1 25.1999 22.5 13.9999C20.9967 3.47716 8.48891 0.663489 1.31458 0.499915H0Z"
                      fill="white"
                    />
                  </svg>
                </div>

                <div className={`${cx.overlay2}`}>
                  <div className={`${cx.nextBtn}`}>
                    <img src={review_icon} alt="" />
                  </div>
                  <svg
                    className={`${cx.bgShape}`}
                    width="91"
                    height="89"
                    viewBox="0 0 91 89"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 0.499915C0.413197 0.489838 0.852842 0.489388 1.31458 0.499915H89.5C90 35.1666 90.7 100.8 89.5 86C88.3 71.2 73 67.8333 65.5 68C59.3333 67.6667 44.8 67.2 36 68C27.2 68.8 24.3333 62.3333 24 59V50C24.1667 42.6666 24.1 25.1999 22.5 13.9999C20.9967 3.47716 8.48891 0.663489 1.31458 0.499915H0Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className={`${cx.cardBox_head2}`}>
                  <h4>Tony Fowler</h4>

                  <p>
                    Social Media Influencer @ ABSCBN <br />
                    New York, United States
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ReviewC;
