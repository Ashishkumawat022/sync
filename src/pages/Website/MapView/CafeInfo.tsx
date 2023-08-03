import cx from "./MapView.module.scss";
import {
  cafeImage,
  nextIcon,
  previousIcon,
  transparentStar,
  userProfile,
  location2,
  upload,
  Wifi,
  Multiple,
  BigTables,
  Outside,
  Accessibility,
  Small,
  Large,
  FreeParking,
  Quite,
  starIcon,
  closeIcon,
  coffeeShop1,
  location,
  cWifi,
  cAcceptCards,
  cBigTables,
  cCashlessPayment,
  cFreeParking,
  cLargeGroups,
  cMultipleSockets,
  cOutsideDining,
  cQuietVibe,
  cSmallGroups,
} from "../../../assets/images/index";
import { Col } from "react-bootstrap";
import { HiOutlineClock } from "react-icons/hi";
import { VscGlobe } from "react-icons/vsc";
import { MdArrowBackIosNew, MdClose, MdOutlineChevronLeft, MdOutlinePermPhoneMsg } from "react-icons/md";
import { NavLink } from "react-router-dom";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";

const CafeInfo = (props:any) => {


  const [toggle, setToggle] = useState(false);
  
  const option1 = {
    loop: true,
    items: 3,
    dots: false,
    nav: true,
    autoplay: false,
    navText:[`<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path></svg>`,`<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>`],
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 1,
      },
      768: {
        items: 1,
      },
    },
  };

  return (
    <div className={cx.cafeInfoContainer}>
      <div className={` ${cx.cafeInfoContainerInner}`}>
        <Col className={cx.cafeInfoImage}>
        <section className={`${cx.sliderSection}`}>
          <OwlCarousel className="owl-theme" {...option1}>
            <div className="item">
              <img src={coffeeShop1} />
            </div>
            <div className="item">
              <img src={coffeeShop1} />
            </div>
          </OwlCarousel>
          <div className={`${cx.overlay}`}>
            <div className={`${cx.visitorRating}`}>
              <p>
                Visitor
                <br />
                Ratings
              </p>
              <AiFillStar className={`${cx.starIcon}`} />
              <h4>4.5</h4>
            </div>
            <svg
              className={`${cx.bgShape}`}
              viewBox="0 0 199 137"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M198 0.5C198.22 1.77817 198.275 3.39435 198 5.08038V135.5C128.167 136 -9.00019 136.7 0.999812 135.5C10.9998 134.3 12.1666 125.667 11.5 121.5C11.3333 99.1667 11.1 50.6 11.5 35C11.9 19.4 24.6666 15.1667 31 15H49H184.5C193.915 15 197.234 9.76999 198 5.08038V0.5Z"
                fill="#FBFBFB"
              />
            </svg>
          </div>
          <button className={`btn ${cx.backArrow}`} onClick={()=>{props.handleCafeShow(false)
          props.handleListShow()
          }}><MdArrowBackIosNew /></button>
          <button className={`btn ${cx.closeArrow}`} onClick={()=>{props.handleCafeShow(false)
          props.handleListShow()
          }}><MdClose /></button>
        </section>
        </Col>
        <Col className={cx.cafeDetails}>
          <div className={cx.profileIcons}>
          <ul>
                <li>
                  <img src={userProfile} alt="" />
                </li>
                <li>
                  <img src={userProfile} alt="" />
                </li>
                <li>
                  <img src={userProfile} alt="" />
                </li>
                <li>
                  <img src={userProfile} alt="" />
                </li>
                <li>
                  <span>+10</span>
                </li>
                <button>
                  Friends were here
                </button>
              </ul>
            <div className={cx.actionBtn}>
              <button  className={`${cx.viewBtn} ${toggle===true ? cx.active : ""}`} onClick={()=>setToggle(!toggle)}><img src={toggle===true ? location2 : location} /></button> 
              <button><img src={upload} /></button>
            </div>
          </div>
          <Col className={cx.itemDetailsTitle}>
            <h3>James Brews & Coffee</h3>
            <span>
              Greater Boston, Boston
              <li>15km</li>
              <li>
                <span>Open</span>
              </li>
            </span>
          </Col>
          <Col
            className={`d-flex flex-row justify-content-between ${cx.cafeButtons}`}
          >
            <button>Save for later</button>
            <button>Get Directions</button>
          </Col>
          <Col
            className={`d-flex flex-row justify-content-between ${cx.cafeTimings} `}
          >
            <div>
              <span>
                <HiOutlineClock />
              </span>
              <p>09:00 - 19:00</p>
            </div>
            <div>
              <NavLink to="#">
              <span>
                <MdOutlinePermPhoneMsg />
              </span>
              <p>+43 663 302 192</p></NavLink>
            </div>
            <div><NavLink to="#">
              <span>
                <VscGlobe />
              </span>
              <p>Jamescoffeebrew.com</p></NavLink>
            </div>
          </Col>
        </Col>
        <Col className={cx.cafeAbout}>
          <h4>About</h4>
          <p>
            James Brews & Coffee is a cafe is designed with the modern, mobile
            workforce in mind. We provide a cozy, welcoming atmosphere where you
            can work comfortably for hours on end. We understand that working
            remotely can be a challenge
          </p>
          <ul>
            <li>
              Free Wi-Fi: Stay connected with high-speed internet access
              throughout the cafe.
            </li>
            <li>
              Power Outlets: We have plenty of outlets available for you to
              charge your devices.
            </li>

            <li>Comfortable Seating: Choose from a variety of seating</li>
          </ul>
        </Col>
        <Col className={cx.cafeAmenities}>
          <h4>Top Amenities</h4>
          <div className={`${cx.amenitiesItem}`}>
                    <ul>
                      <li>
                        <img src={cWifi} />
                        <span>Wifi</span>
                      </li>
                      <li>
                        <img src={cAcceptCards} />
                        <span>Accept Cards</span>
                      </li>
                      <li>
                        <img src={cBigTables} />
                        <span>Big Tables</span>
                      </li>
                      <li>
                        <img src={cCashlessPayment} />
                        <span>Cashless Payment</span>
                      </li>
                      <li>
                        <img src={cFreeParking} />
                        <span>Free Parking</span>
                      </li>
                      <li>
                        <img src={cLargeGroups} />
                        <span>Large Groups</span>
                      </li>
                      <li>
                        <img src={cMultipleSockets} />
                        <span>Multiple Sockets</span>
                      </li>
                      <li>
                        <img src={cOutsideDining} />
                        <span>Outside Dining</span>
                      </li>
                      <li>
                        <img src={cQuietVibe} />
                        <span>Quiet Vibe</span>
                      </li>
                      <li>
                        <img src={cSmallGroups} />
                        <span>Small Groups</span>
                      </li>
                    </ul>
          </div>
        </Col>
        <Col className={cx.userReviews}>
          <Col className={cx.reviewFont}>
            <h4><NavLink to="/all-reviews">All reviews</NavLink></h4>
            <p><NavLink to="#">Give a review</NavLink></p>
          </Col>

          <Col className={cx.userReview}>
            <div className={cx.starRating}>
              <img src={starIcon} /> <img src={starIcon} />
              <img src={starIcon} /> <img src={starIcon} />
              <img src={starIcon} />
              <p>(5.0)</p>
            </div>
            <div className={cx.reviewMessage}>
              <h5>Exceptional service!</h5>
              <p>
                This cozy restaurant has left the best impressions! Hospitable
                hosts, delicious dishes, beautiful presentation, wide wine list
                and wonderful dessert. I recommend to everyone! I would like to
                come back here again and again.
              </p>
            </div>
            <div className={`d-flex flex-row ${cx.reviewer}`}>
              <img src={userProfile} alt="" />
              <div>
                <h4>Tony Fowler</h4>
                <p>
                  Social Media Influencer
                  <li>New York, United States</li>
                </p>
                <p>14th March 2023</p>
              </div>
            </div>
          </Col>
          <div className={cx.borderline}></div>
          <Col className={cx.userReview}>
            <div className={cx.starRating}>
              <img src={starIcon} /> <img src={starIcon} />
              <img src={starIcon} /> <img src={starIcon} />
              <img src={starIcon} />
              <p>(5.0)</p>
            </div>
            <div className={cx.reviewMessage}>
              <h5>Exceptional service!</h5>
              <p>
                This cozy restaurant has left the best impressions! Hospitable
                hosts, delicious dishes, beautiful presentation, wide wine list
                and wonderful dessert. I recommend to everyone! I would like to
                come back here again and again.
              </p>
            </div>
            <div className={`d-flex flex-row ${cx.reviewer}`}>
              <img src={userProfile} alt="" />
              <div>
                <h4>Tony Fowler</h4>
                <p>
                  Social Media Influencer
                  <li>New York, United States</li>
                </p>
                <p>14th March 2023</p>
              </div>
            </div>
          </Col>
        </Col>
      </div>
    </div>
  );
};

export default CafeInfo;
