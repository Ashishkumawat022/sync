import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import cx from "./Business.module.scss";
import st from "../../../assets/stylesheet/style.module.scss";
import Accordion from "react-bootstrap/Accordion";

import Radio from "../../../components/Website/Forms/Radio";

import { Container, Form, Col, Row, Modal } from "react-bootstrap";
import {
  Logo,
  Union_shape1,
  Union_shape2,
  blue_star,
  cafe_view,
  join_community,
  remote_work,
  Yellow_shape,
  right_icon,
  slVector,
  ourMission,
  ourVision,
  cafeViewGreen,
  cafeViewYellow,
  cafeViewPurple,
} from "../../../assets/images";
import { RxCross1 } from "react-icons/rx";
import { BiUpload } from "react-icons/bi";

const Business = (props: any) => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <>
      <div className={`${cx.spaceBox}`}>
        <section className={`${cx.bannerSection}`}>
          <div className={`${cx.shapeTouch}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 170">
              <path
                fill="#fefcfc"
                id="startp"
                d="M41.40094,132.5l-.04614,.04163c-21.13678,.79645-38.35895,16.84418-40.99341,37.45837h-.36139V0H270c-24.40985,1.70758-43.93091,21.74066-45.83258,46.09766l-.16742,36.40234c0,27.61426-22.38574,50-50,50H41.40094Z"
                data-original="M0,0H0V0Z"
              ></path>
            </svg>
          </div>
          <Container>
            <Row className="align-items-end">
              <Col md={7} lg={7} xl={7} xxl={7}>
                <div className={`${cx.contentBox}`}>
                  <h1 className={`${cx.slTitle} wow fadeInUp`}>
                    Are you open to <br />
                    remote workers?
                    <br /> let’s Sync!
                  </h1>
                  <p className=" wow fadeInUp">
                    Sync is a web app that makes it easy for people
                    <br /> to find cafes near them that are truly remote work{" "}
                    <br /> friendly. Add your cafe to the Sync app for <br />{" "}
                    absolutely no charge and let remote workers <br /> know that
                    you’re open for their business.
                  </p>
                  <NavLink className={`btn ${st.btn1} wow fadeInUp`} to="/">
                    Add my cafe to Sync!
                  </NavLink>
                  {/* <ul className={`${cx.downloads} wow slideInLeft`}>
                  <li><NavLink to="#" title="App Store"><img src={appStore}/></NavLink></li>
                  <li><NavLink to="#" title="Google Play"><img src={googlePlay}/></NavLink></li>
                 </ul> */}
                </div>
              </Col>
            </Row>
          </Container>
          <div className={`${cx.imgBox}`}>
            <img src={slVector} />
          </div>
        </section>

        <section className={`${cx.Join_community_sec}`}>
          <Container>
            <Row>
              <Col lg={12}>
                <div className={`${cx.Join_community_img}`}>
                  <img src={join_community} />

                  <div className={`${cx.Join_community_img_text}`}>
                    <h3>
                      Join our community
                      <br />
                      of remote work
                      <br />
                      friendly cafes
                    </h3>
                    <h5>
                      You want people to work from your cafe. <br /> People are
                      looking for cafes to work from. <br /> We’re here to help
                      you both Sync!
                    </h5>
                    <p>
                      Sync is a platform that shows which cafes people <br />{" "}
                      can work from in their city. With both a map and <br />{" "}
                      catalog, remote workers can search for cafes while <br />{" "}
                      filtering by their specific needs, like strong WiFi,{" "}
                      <br /> how loud or quiet the environment is, what the
                      table <br /> layout looks like, and more.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>

      <section className={`${cx.community_bottom_img}`}>
        <img src={Union_shape1} className={`${cx.shapeBg}`} />
        <div className={`${cx.community_bottom_bg}`}>
          <Container>
            <h3 className={`${cx.titleHeero}`}>
              Here are some of the cool <br /> ways people can engage <br />
              with your cafe on Sync!
            </h3>

            <div className={`${cx.community_bottom}`}>
              <Row className="align-items-center">
                <Col lg={6}  className={`${cx.orderImgs}`}>
                  <div>
                    <h5>
                      They can “Save for later” your cafe, which will
                      automatically save it to their map.
                    </h5>
                  </div>
                </Col>
                <Col lg={6} >
                  <div>
                    <img src={cafe_view} />
                  </div>
                </Col>
              </Row>
            </div>

            <div className={`${cx.community_bottom1}`}>
              <Row className="align-items-center">
                <Col lg={6}  className={`${cx.orderImgs}`}>
                  <div className={`${cx.leftBg}`}>
                    <h5>
                      They can rate and write reviews based on their experience
                      working from your cafe.
                    </h5>
                  </div>
                </Col>
                <Col lg={6}  >
                  <div>
                    <img src={cafeViewGreen} />
                  </div>
                </Col>
              </Row>
            </div>
            <div className={`${cx.community_bottom2}`}>
              <Row className="align-items-center">
                <Col lg={6} className={`${cx.orderImgs}`}>
                  <div className={`${cx.leftBg}`}>
                    <h5>
                      They can “share” your cafe <br />
                      to their network.
                    </h5>
                  </div>
                </Col>
                <Col lg={6} >
                  <div>
                    <img src={cafeViewYellow} />
                  </div>
                </Col>
              </Row>
            </div>
            <div className={`${cx.community_bottom3}`}>
              <Row className="align-items-center">
                <Col lg={6}  className={`${cx.orderImgs}`}>
                  <div>
                    <h5>
                      They can see which of their <br /> friends and coworkers
                      are <br /> working from your cafe.
                    </h5>
                  </div>
                </Col>
                <Col lg={6}>
                  <div>
                    <img src={cafeViewPurple} />
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </section>

      <section className={`${cx.why_join_sync}`}>
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h3>
                Why join Sync? <br />
                great question!
              </h3>
            </Col>
            <Col lg={4} className="mt-4">
              <div className={`${cx.why_join_card}`}>
                <img src={right_icon} />{" "}
                <p>
                  Let the world – or at least, your city – know that you are
                  remote work-friendly.
                </p>
              </div>
            </Col>
            <Col lg={4} className="mt-4">
              <div className={`${cx.why_join_card}`}>
                <img src={right_icon} /> <p>More exposure = More customers!</p>
              </div>
            </Col>
            <Col lg={4} className="mt-4">
              <div className={`${cx.why_join_card}`}>
                <img src={right_icon} />{" "}
                <p>Share any updates or promotions you’re offering.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={`${cx.what_next}`}>
        <div className={`${cx.what_next_heading}`}>
          <h3>“I’m in! what’s next?”</h3>
          <p>
            To get your cafe on our platform, all you have to do <br />
            is fill out a short form to provide us with some key details <br />
            about your business.{" "}
          </p>
        </div>

        <div className={`${cx.what_next_head}`}>
          <img src={Union_shape2} className={`${cx.shapeBg}`} />
          <div className={`${cx.what_nextBody}`}>
            <h5 className={`${cx.titleHeero}`}>
              Keep in mind, the Sync web app is still in <br /> development and
              will be available very soon.
            </h5>
            <Container>
              <Col lg={6} className="m-auto">
                <div className={`${cx.businessForm}`}>
                  <div className={`${cx.titleBox}`}>
                    <h5>Please fill out this form.</h5>
                    <button className={`${cx.closeBtn}`}>
                      <RxCross1 />
                    </button>
                  </div>

                  <div className={`${cx.formBody}`}>
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Contact Information</Accordion.Header>
                        <Accordion.Body>
                          <div className={`${cx.formContact}`}>
                            <div className={`${cx.formBox}`}>
                              <Form.Group className="mb-4 position-relative">
                                <Form.Label>First Name*</Form.Label>
                                <Form.Control
                                  type="type"
                                  placeholder="Your Name"
                                />
                              </Form.Group>
                              <Form.Group className="mb-4 position-relative">
                                <Form.Label>Last Name*</Form.Label>
                                <Form.Control
                                  type="type"
                                  placeholder="Surname*"
                                />
                              </Form.Group>
                              <Form.Group className="mb-4 position-relative">
                                <Form.Label>Role in the business</Form.Label>
                                <Form.Control
                                  type="type"
                                  placeholder="Type your role here"
                                />
                              </Form.Group>
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          Business Information
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className={`${cx.formContact}`}>
                            <div className={`${cx.formBox2}`}>
                              <Col lg={12}>
                                <Form.Label>Hours of operation</Form.Label>
                              </Col>

                              <Row className="align-items-center mb-4">
                                <Col lg={3} className="col-5">
                                  <Form.Group>
                                    <Form.Control
                                      className="text-center"
                                      type="text"
                                      placeholder="00:00"
                                    />
                                  </Form.Group>
                                </Col>
                                <Col lg={1} className="text-center col-2">
                                  -
                                </Col>
                                <Col lg={3} className="col-5">
                                  <Form.Group>
                                    <Form.Control
                                      className="text-center"
                                      type="text"
                                      placeholder="00:00"
                                    />
                                  </Form.Group>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg={12} className="mb-4">
                                  <Form.Group style={{ textAlign: "left" }}>
                                    <Form.Label>
                                      Time limit for customers with laptops (if
                                      any)
                                    </Form.Label>
                                    <Form.Select required>
                                      <option value="">Select duration</option>
                                      <option value="1">Option 1</option>
                                    </Form.Select>
                                  </Form.Group>
                                </Col>

                                <Col lg={12} className="mb-4">
                                  <Form.Group style={{ textAlign: "left" }}>
                                    <Form.Label>
                                      Minimum amount customers must spend to
                                      work from your business (If Any)
                                    </Form.Label>
                                    <Form.Select required>
                                      <option value="">Select</option>
                                      <option value="1">Option 1</option>
                                    </Form.Select>
                                  </Form.Group>
                                </Col>

                                <Col lg={12} className="mb-4">
                                  <Form.Group>
                                    <Form.Label>
                                      Rate the amount of charger outlets you
                                      have from 1-5 (5 being the best)
                                    </Form.Label>
                                    <ul className={`${cx.amountRate}`}>
                                      <li>
                                        <button>1</button>
                                      </li>
                                      <li>
                                        <button>2</button>
                                      </li>
                                      <li>
                                        <button>3</button>
                                      </li>
                                      <li>
                                        <button>4</button>
                                      </li>
                                      <li>
                                        <button>5</button>
                                      </li>
                                    </ul>
                                  </Form.Group>
                                </Col>

                                <Col lg={12} className="mb-4">
                                  <Form.Group>
                                    <Form.Control
                                      as="textarea"
                                      placeholder="Add your comment (optional)."
                                      rows={6}
                                    />
                                  </Form.Group>
                                </Col>
                              </Row>
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="2">
                        <Accordion.Header>Amenities</Accordion.Header>
                        <Accordion.Body>
                          <div className={`${cx.formContact}`}>
                            <div className={`${cx.formBox2}`}>
                              <Row>
                                <Col lg={12} className="mb-4">
                                  <Form.Label>Free wifi?</Form.Label>
                                  <Form.Group>
                                    <div className="d-flex">
                                      <label
                                        className={`${cx.radioCheckbox} ${st.radio}`}
                                      >
                                        <Radio /> Yes
                                      </label>
                                      <label
                                        className={`${cx.radioCheckbox} ${st.radio}`}
                                      >
                                        <Radio /> No
                                      </label>
                                      <label
                                        className={`${cx.radioCheckbox} ${st.radio}`}
                                      >
                                        <Radio /> For customers only
                                      </label>
                                    </div>
                                  </Form.Group>
                                </Col>

                                <Col lg={12} className="mb-4">
                                  <Form.Group>
                                    <Form.Label>
                                      Rate the amount of charger outlets you
                                      have from 1-5 (5 being the best)
                                    </Form.Label>
                                    <ul className={`${cx.amountRate}`}>
                                      <li>
                                        <button>1</button>
                                      </li>
                                      <li>
                                        <button>2</button>
                                      </li>
                                      <li>
                                        <button>3</button>
                                      </li>
                                      <li>
                                        <button>4</button>
                                      </li>
                                      <li>
                                        <button>5</button>
                                      </li>
                                    </ul>
                                  </Form.Group>
                                </Col>
                                <Col lg={12} className="mb-4">
                                  <Form.Group style={{ textAlign: "left" }}>
                                    <Form.Label>
                                      Wifi type (Optional)
                                    </Form.Label>
                                    <Form.Select required>
                                      <option value="">Select broadband</option>
                                      <option value="1">Option 1</option>
                                    </Form.Select>
                                  </Form.Group>
                                </Col>

                                <Col lg={12} className="mb-4">
                                  <h5
                                    style={{
                                      fontWeight: "600",
                                      fontSize: "18px",
                                    }}
                                    className="mb-3"
                                  >
                                    Describe the atmosphere
                                  </h5>
                                  <Form.Group>
                                    <Form.Control
                                      as="textarea"
                                      placeholder="Is it a  quiet or noisy environment? is it a good place for customers to take meetings? etc.."
                                      rows={6}
                                    />
                                  </Form.Group>
                                </Col>
                              </Row>
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>Upload Photos </Accordion.Header>
                        <Accordion.Body>
                          <div className={`${cx.formContact}`}>
                            <div className={`${cx.formBox2}`}>
                              <Row>
                                <Col lg={12} className="mb-4">
                                  <Form.Group>
                                    <Form.Label>
                                      This will be displayed on your listing and
                                      will give the first impression for users.
                                    </Form.Label>
                                    <div className={`${cx.fileUpload}`}>
                                      <div className={`${cx.uploadBody}`}>
                                        <BiUpload />
                                        <p>Drag or drop here</p>
                                        <span>or</span>
                                        <button>
                                          Browse File <input type="file" />
                                        </button>
                                      </div>
                                    </div>
                                    <div className={`${cx.uploadData}`}>
                                      <p>
                                        Accepted file types: .jpg and .png only
                                        (Less than 200kb)
                                      </p>
                                      {/* <label className={`${cx.filePath}`}>
                                        <button className={`${cx.closeBtn}`}><RxCross1 /></button>
                                        Image 1.jpg
                                      </label> */}
                                    </div>
                                  </Form.Group>
                                </Col>
                              </Row>
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    <div className={`mt-3 ${cx.btnSubmit} text-center`}>
                      <button className={`btn ${st.btn2}`}>Submit</button>
                    </div>
                  </div>
                </div>
              </Col>
            </Container>
          </div>
        </div>
      </section>

      <div className={`${cx.spaceBox}`}>
        <section className={`${cx.our_vision_sec}`}>
          <Container>
            <div className={`${cx.our_vision}`}>
              <Row>
                <Col lg={6}>
                  <div className={`${cx.our_vision_card}`}>
                    <img src={ourMission} alt="" />
                    <div style={{ paddingTop: "44px" }}>
                      <h5>Our Mission</h5>
                      <p>
                        We make it easy for people to find remote work-friendly
                        cafes and to see which cafes their friends, coworkers,
                        and classmates are working from.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className={`${cx.our_vision_card}`}>
                    <img src={ourVision} alt="" />
                    <div style={{ paddingTop: "140px" }}>
                      <h5>Our Vision</h5>
                      <p>
                        We aim to create a world in which remote work feels less
                        remote
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={12} className="mt-4">
                  <div className={`${cx.our_vision_card}`}>
                    <div>
                      <h3>
                        Questions, comments, concerns, <br />
                        or simply want to say “hey?”
                      </h3>
                    </div>
                    <div className={`${cx.our_vision_card_top}`}>
                      <p>
                        Feel free to set up a call with us by booking a slot on{" "}
                        <br />
                        our calendly! We’d love to hear from you and get <br />{" "}
                        your thoughts!
                      </p>

                      <NavLink
                        to="/contact-us"
                        className={`btn ${st.btn1} wow fadeInUp`}
                      >
                        Let’s Sync!
                      </NavLink>
                    </div>
                  </div>
                </Col>

                <Col lg={6} md={12}>
                  <div className={`${cx.our_vision_bottom}`}>
                    <h3>
                      making remote <br />
                      work feel less
                      <br /> remote.
                    </h3>
                    <div className={`${cx.copygiht}`}>
                      <img src={Logo} />
                      <p>© All Rights Reserved. 2023, Sync Co.</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
          <div className={`${cx.our_vision_bottom_right}`}>
            <img src={remote_work} />
          </div>
        </section>
      </div>
    </>
  );
};

export default Business;
