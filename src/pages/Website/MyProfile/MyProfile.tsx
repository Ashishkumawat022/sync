import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import cx from "./MyProfile.module.scss";
import st from "../../../assets/stylesheet/style.module.scss";

import { Container, Form, Col, Row } from "react-bootstrap";
import { MdAddCall } from "react-icons/md";
// images
import { Banner1, EditProfileIcon,  Logo, Photo1, Photo10, Photo11, Photo12, Photo2, Photo3, Photo4, Photo5, Photo6, Photo7, Photo8, Photo9, coffeeShop1, myprofilephone, nextIcon, previousIcon, profile_icon, reviewImg, userProfile } from "../../../assets/images";

import { Textarea } from "@mantine/core";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { MyReviews } from "../../../components/Website";
import { ContactDetailsM, EditAboutM, EditinfoM, ImageViewsM, UploadBanner } from "../../../components/Website/Modals";

const MyProfile = (props: any) => {

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  
  
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const [contactshow, setContactShow] = useState(false);
const handlecontactClose = () => setContactShow(false);
const handlecontactShow = () => setContactShow(true);

const [aboutshow, setAboutShow] = useState(false);
const handleaboutClose = () => setAboutShow(false);
const handleaboutShow = () => setAboutShow(true);

const [imageshow, setImageShow] = useState(false);
const handleimageClose = () => setImageShow(false);
const handleimageShow = () => setImageShow(true);

const [uploadimageshow, setUploadimageShow] = useState(false);
const handleUploadimageClose = () => setUploadimageShow(false);
const handleUploadimageShow = () => setUploadimageShow(true);

  const options = {
    loop: true,
    items: 4,
    navText:[`<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path></svg>`,`<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>`],
    dots: false,
    nav: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 1,
      },
      768: {
        items: 4,
      },
    },
  };


  return (
    <>
      <section className={`${cx.bannerSection} ${cx.section_padding}`}>
        <Container>
          <Row>
            <Col lg={8}>
              <div className={`${cx.contentBox}`}>
                <div className={`${cx.topbannerbg}`}>
                  <img src={Banner1} className={`${cx.banner}`} />
                  <NavLink to="#" className={`${cx.editIcon}`} onClick={handleUploadimageShow}><img src={EditProfileIcon} /></NavLink>
                </div>

                <Row>
                  <Col lg={12}>
                    <div className={` ${cx.user_profile}`}>
                      <img src={profile_icon} className={` ${cx.profileImg}`} />
                      <div className={` ${cx.user_detail}`}>
                        <h3>Anna Smith</h3>
                        <div className={` ${cx.edit_icon2}`}>
                        <NavLink to="#" onClick={handleShow}><img src={EditProfileIcon} /></NavLink>
                        </div>
                        <div className={` ${cx.user_details}`}>
                          <h5> Marketing Manager @ Sync Remote</h5>
                          <div className={` ${cx.user_details_body}`}>
                            <p>New York, United States <span className={`${cx.bullet}`}></span></p>
                            <NavLink to="#" onClick={handlecontactShow}>Contact details</NavLink>
                            </div>
                        </div>
                        <hr />
                        <div className={` ${cx.profileIcons}`}>
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
                          {/* <li>
                            <span>+10</span>
                          </li> */}
                          <button>
                          127 Connections
                          </button>
                        </ul>
                        </div>

                      </div>
                    </div>
                  </Col>
                </Row>
              </div>

              <div className={`${cx.contentBox} mt-4`}>
                <div className={`${cx.about_sec}`}>
                  <div className={`${cx.about_sec_head}`}>
                    <h3>About</h3>

                    <NavLink to="#" onClick={handleaboutShow}>
                    <img
                      src={EditProfileIcon}
                      className={` ${cx.edit_icon2}`}
                    />
                    </NavLink>
                  </div>
                  <div>
                    <p>
                      As a Marketing Manager, I am a highly motivated and
                      results-driven professional with extensive experience in
                      developing and implementing successful marketing
                      strategies. I am skilled in identifying market trends and
                      consumer behavior, and I am dedicated to utilizing this
                      knowledge to drive sales and revenue growth.{" "}
                    </p>
                    <p>
                      am committed to staying up-to-date with the latest
                      industry trends and continuously expanding my knowledge to
                      create innovative and effective marketing strategies. I am
                      passionate about achieving business objectives and
                      exceeding expectations, and I am confident in my ability
                      to drive success for any organization.
                    </p>
                  </div>
                </div>
              </div>

              <div className={`${cx.contentBox} mt-4`}>
                <div className={`${cx.map_sec}`}>
                  <div className={`${cx.map_sec_head}`}>
                    <h3>Your work hotspots!</h3>

                    <NavLink to="/map-view">See all</NavLink>
                  </div>
                  <div  className={`${cx.map_view}`}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28470.648190513606!2d75.7496977!3d26.877109199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1680524324849!5m2!1sen!2sin"
                      width="100%"
                      height="460"
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>

              <div className={`${cx.contentBox} mt-4`}>
                <div className={`${cx.about_sec}`}>
                  <div className={`${cx.about_sec_head}`}>
                    <h3>Photos</h3>

                    <NavLink to="/photos">See all</NavLink>
                  </div>
                  <div className={`${cx.about_sec_images}`}>
                  <Row>
                      <Col lg={3} md={6}  className="col-6 m-0 p-0">
                        <NavLink to="#" onClick={handleimageShow}>
                        <img src={Photo1} />
                        </NavLink>
                       
                      </Col>
                      <Col lg={3} md={6}  className="col-6 m-0 p-0">
                      <NavLink to="#" onClick={handleimageShow}>
                        <img src={Photo2} />
                        </NavLink>
                      </Col>
                      <Col lg={3} md={6}  className="col-6 m-0 p-0">
                      <NavLink to="#" onClick={handleimageShow}>
                        <img src={Photo3} />
                        </NavLink>
                      </Col>
                      <Col lg={3} md={6}  className="col-6 m-0 p-0">
                      <NavLink to="#" onClick={handleimageShow}>
                        <img src={Photo4} />
                        </NavLink>
                      </Col>
                      <Col lg={3} md={6}  className="col-6 m-0 p-0">
                      <NavLink to="#" onClick={handleimageShow}>
                        <img src={Photo5} />
                        </NavLink>
                      </Col>
                      <Col lg={3} md={6}  className="col-6 m-0 p-0">
                      <NavLink to="#" onClick={handleimageShow}>
                        <img src={Photo6} />
                        </NavLink>
                      </Col>
                      <Col lg={3} md={6}  className="col-6 m-0 p-0">
                      <NavLink to="#" onClick={handleimageShow}>
                        <img src={Photo7} />
                        </NavLink>
                      </Col>
                      <Col lg={3} md={6}  className="col-6 m-0 p-0">
                      <NavLink to="#" onClick={handleimageShow}>
                        <img src={Photo8} />
                        </NavLink>
                      </Col>
                      <Col lg={3} md={6}  className="col-6 m-0 p-0">
                      <NavLink to="#" onClick={handleimageShow}>
                        <img src={Photo9} />
                        </NavLink>
                      </Col>
                      <Col lg={3} md={6}  className="col-6 m-0 p-0">
                      <NavLink to="#" onClick={handleimageShow}>
                        <img src={Photo10} />
                        </NavLink>
                      </Col>
                      <Col lg={3} md={6}  className="col-6 m-0 p-0">
                      <NavLink to="#" onClick={handleimageShow}>
                        <img src={Photo11} />
                        </NavLink>
                      </Col>
                      <Col lg={3} md={6}  className="col-6 m-0 p-0">
                      <NavLink to="#" onClick={handleimageShow}>
                        <img src={Photo12} />
                        </NavLink>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <div className={` ${cx.contentBox}`}>
                <div className={` ${cx.saved_cafes}`}>
                  <h3>Saved Cafe</h3>
                  <p>Recent Saved Cafes</p>

                  <div className={` ${cx.saved_cafes_cards}`}>
                    <div>
                      <img src={coffeeShop1} />
                    </div>
                    <div className={` ${cx.saved_cards_detail}`}>
                      <h3><NavLink to="#">James Coffee & Br...</NavLink></h3>
                      <p>Greater Boston, Boston...</p>
                      <p>15km</p>

                      <NavLink className={` ${cx.linkBtn}`} to="#">Get directions</NavLink>
                    </div>
                  </div>
                  <div className={` ${cx.saved_cafes_cards}`}>
                    <div>
                      <img src={coffeeShop1} />
                    </div>
                    <div className={` ${cx.saved_cards_detail}`}>
                      <h3><NavLink to="#">James Coffee & Br...</NavLink></h3>
                      <p>Greater Boston, Boston...</p>
                      <p>15km</p>

                      <NavLink className={` ${cx.linkBtn}`} to="#">Get directions</NavLink>
                    </div>
                  </div>
                  <div className={` ${cx.saved_cafes_cards}`}>
                    <div>
                      <img src={coffeeShop1} />
                    </div>
                    <div className={` ${cx.saved_cards_detail}`}>
                      <h3><NavLink to="#">James Coffee & Br...</NavLink></h3>
                      <p>Greater Boston, Boston...</p>
                      <p>15km</p>

                      <NavLink className={` ${cx.linkBtn}`} to="#">Get directions</NavLink>
                    </div>
                  </div>
                  <p className="text-center mb-0 mt-3"><NavLink className={` ${cx.linkBox}`} to="/saved-cafes">See all</NavLink></p>
                </div>
              </div>
              <div className={`${cx.mobileHide} ${cx.contentBox} mt-4`}>
                <img src={reviewImg} style={{ width: "100%" }} />
              </div>

              <div className={`${cx.mobileHide} ${cx.contentBox} mt-4`}>
                <div className={` ${cx.advertise_area}`}>
                  <div className={` ${cx.advertise_area_cards}`}>
                    <img src={coffeeShop1} />

                    <div className={` ${cx.advertise_cards_detail}`}>
                      <h3>
                        Advertisement <br />
                        Area
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${cx.mobileHide} ${cx.contentBox} mt-4`}>
                <div className={` ${cx.advertise_area}`}>
                  <div className={` ${cx.advertise_area_cards}`}>
                    <img src={coffeeShop1} />

                    <div className={` ${cx.advertise_cards_detail}`}>
                      <h3>
                        Advertisement <br />
                        Area
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={`${cx.reviewSection} ${st.sectionPaddingBottom}`}>
        <Container>
          <Col lg={12}>
            <div className="d-flex justify-content-between">
            <h5>My Reviews</h5>
            <NavLink className={`${cx.linkBox}`} to="/all-reviews">See All</NavLink>
            </div>
          </Col>
          <Row className={`${cx.sliderRow}`}>
          <OwlCarousel className="owl-theme" {...options}>
            <div className="item wow fadeInUp">
              <MyReviews status="inactive" />
            </div>
            <div className="item wow fadeInUp">
              <MyReviews status="inactive" />
            </div>
            <div className="item wow fadeInUp">
              <MyReviews status="inactive" />
            </div>
            <div className="item wow fadeInUp">
              <MyReviews status="inactive" />
            </div>
            <div className="item wow fadeInUp">
              <MyReviews status="inactive" />
            </div>
          </OwlCarousel>
          </Row>

          <Col lg={12} className={`text-center mt-4 wow fadeInUp`}>
            <NavLink to="/all-reviews" className={`btn ${st.btn2}`}>See more Reviews</NavLink>
          </Col>
        </Container>
      </section>

      <EditinfoM show={show} handleClose={handleClose} />
      <EditAboutM aboutshow={aboutshow} handleaboutClose={handleaboutClose} />
      <ContactDetailsM contactshow={contactshow} handlecontactClose={handlecontactClose} />
      <ImageViewsM imageshow={imageshow} handleimageClose={handleimageClose} />
      
      <UploadBanner uploadimageshow={uploadimageshow} handleUploadimageClose={handleUploadimageClose} />
    </>

  );
};

export default MyProfile;
