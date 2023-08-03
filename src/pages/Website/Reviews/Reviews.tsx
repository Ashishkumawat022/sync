import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import cx from "./Reviews.module.scss";
import st from "../../../assets/stylesheet/style.module.scss";

import { Container, Form, Col, Row, Button, Collapse } from "react-bootstrap";
import { reviewsHeader, NadineLustre } from "../../../assets/images";

import { ThankYou } from "../../../components/Website/Modals";

import { AiTwotoneStar } from "react-icons/ai";
import { IoIosArrowUp } from "react-icons/io";

const Reviews = (props: any) => {
  
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <>
      <div className={`${cx.spaceBox}`}>
        <section className={`${cx.bannerSection}`}>
          <img src={reviewsHeader} />
          <Container>
            <Row>
              <Col md={8} className={`${cx.contentBox}`}>
                <div className={`${cx.contentHeading}`}>
                  <h1>James Brews & Cafe</h1>
                  <NavLink to="/cafes">Visit Cafe Profile</NavLink>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>

      <section className={`${cx.reviewSection} ${st.sectionPaddingBottom}`}>
        <Container>
          <Row>
            <Col md={12} xl={12}>
              <div className={`${cx.reviewStart}`}>
                <h3>All Reviews</h3>
                <div className={`${cx.reviewFilter}`}>
                  <h5>Filter</h5>
                  <div className={`${cx.reviewDropdonw}`}>
                    <Form.Group>
                      <Form.Select>
                        <option>Date posted</option>
                        <option>Recent</option>
                        <option>Later</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group>
                      <Form.Select>
                        <option>Gallery</option>
                        <option>With Photos</option>
                        <option>Without</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={8} md={12} xl={8} sm={12}>

              <div className={`${cx.reviewContent}`}>
                <div className={`${cx.nameImgBox}`}>
                  <img src={NadineLustre} />
                  <div className={`${cx.nameText}`}>
                    <h5>Tony Fowler</h5>
                    <p>
                      Social Media Influencer .{" "}
                      <span>New York, United States</span>
                    </p>
                  </div>
                </div>
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
                    <li className="ms-1" style={{color:"#878787", fontSize:'14px', position:'relative', top:'1.5px'}}>
                    (5.0)
                    </li>
                  </ul>
                 
                  <h5>Exceptional service!</h5>
                  <p>
                    This cozy restaurant has left the best impressions!
                    Hospitable hosts, delicious dishes, beautiful presentation,
                    wide wine list and wonderful dessert. I recommend to
                    everyone! I would like to come back here again and again.
                  </p>
                  <NavLink to="#" className={`${cx.replyBtn}`}>Reply</NavLink>

                  <div className={`${cx.replayBox}`}>
                    <NavLink to="#" className={`${cx.replayDropdown}`}
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                      >
                      <IoIosArrowUp/> 2 Replies
                    </NavLink>
                    <Collapse in={open}>
                      <div id="example-collapse-text">
                        <div className={`${cx.commentCard}`}>
                          <div className={`${cx.commentCardHeader}`}>
                            <img src={NadineLustre} className={`${cx.profileImg}`} />
                            <div className={`${cx.commentCardBody}`}>
                              <h5>Beatrice Rice</h5>
                              <p>Social Media Influencer .New York, United States</p>
                              </div>
                          </div>
                          <div className={`${cx.commentCardMessage}`}>
                             <p>Best thing in the world ❤️</p>
                             <NavLink to="#" className={`${cx.replyBtn}`}>Reply</NavLink>
                          </div>
                        </div>
                        
                        <div className={`${cx.commentCard}`}>
                          <div className={`${cx.commentCardHeader}`}>
                            <img src={NadineLustre} className={`${cx.profileImg}`} />
                            <div className={`${cx.commentCardBody}`}>
                              <h5>Beatrice Rice</h5>
                              <p>Social Media Influencer .New York, United States</p>
                              </div>
                          </div>
                          <div className={`${cx.commentCardMessage}`}>
                             <p>In addition, they have a very relaxing music while you are working! </p>
                             <NavLink to="#" className={`${cx.replyBtn}`}>Reply</NavLink>
                          </div>
                        </div>

                        {/* Reply Box Start */}
                          <div className={`${cx.replyForm}`}>
                            <img src={NadineLustre} />
                            <span>@Justin Chase</span>
                            <input type="text" className={`form-control ${cx.formBox}`} />
                          </div>
                          <div className={`${cx.revieBtn}`}>
                            <button className={`btn ${cx.btn2}`}>Cancel</button>
                            <button className={`btn ${st.btn2}`}>Send</button>
                          </div>
                        {/* Reply Box End */}

                      </div>
                    </Collapse>
                  </div>
                </div>
              </div>

              
              <div className={`${cx.reviewContent}`}>
                <div className={`${cx.nameImgBox}`}>
                  <img src={NadineLustre} />
                  <div className={`${cx.nameText}`}>
                    <h5>Vic Sotto</h5>
                    <p>
                      Social Media Influencer .{" "}
                      <span>New York, United States</span>
                    </p>
                  </div>
                </div>
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
                    <li className="ms-1" style={{color:"#878787", fontSize:'14px', position:'relative', top:'1.5px'}}>
                    (5.0)
                    </li>
                  </ul>
                 
                  <h5>Good coffee and cozy cafe!</h5>
                  <p>It’s a great experience. The ambiance is very welcoming and charming. Amazing wines, food and service.  Staff are extremely knowledgeable and make great recommendations.</p>
                  <NavLink to="#" className={`${cx.replyBtn}`}>Reply</NavLink>

                  <div className={`${cx.replayBox}`}>
                    <NavLink to="#" className={`${cx.replayDropdown}`}
                        onClick={() => setOpen1(!open1)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open1}
                      >
                      <IoIosArrowUp/> 2 Replies
                    </NavLink>
                    <Collapse in={open1}>
                      <div id="example-collapse-text">
                        <div className={`${cx.commentCard}`}>
                          <div className={`${cx.commentCardHeader}`}>
                            <img src={NadineLustre} className={`${cx.profileImg}`} />
                            <div className={`${cx.commentCardBody}`}>
                              <h5>Beatrice Rice</h5>
                              <p>Social Media Influencer .New York, United States</p>
                              </div>
                          </div>
                          <div className={`${cx.commentCardMessage}`}>
                             <p>Best thing in the world ❤️</p>
                             <NavLink to="#" className={`${cx.replyBtn}`}>Reply</NavLink>
                          </div>
                        </div>
                        
                        <div className={`${cx.commentCard}`}>
                          <div className={`${cx.commentCardHeader}`}>
                            <img src={NadineLustre} className={`${cx.profileImg}`} />
                            <div className={`${cx.commentCardBody}`}>
                              <h5>Beatrice Rice</h5>
                              <p>Social Media Influencer .New York, United States</p>
                              </div>
                          </div>
                          <div className={`${cx.commentCardMessage}`}>
                             <p>In addition, they have a very relaxing music while you are working! </p>
                             <NavLink to="#" className={`${cx.replyBtn}`}>Reply</NavLink>
                          </div>
                        </div>

                        {/* Reply Box Start */}
                          <div className={`${cx.replyForm}`}>
                            <img src={NadineLustre} />
                            <span>@Justin Chase</span>
                            <input type="text" className={`form-control ${cx.formBox}`} />
                          </div>
                          <div className={`${cx.revieBtn}`}>
                            <button className={`btn ${cx.btn2}`}>Cancel</button>
                            <button className={`btn ${st.btn2}`}>Send</button>
                          </div>
                        {/* Reply Box End */}

                      </div>
                    </Collapse>
                  </div>
                </div>
              </div>

              
              
              <div className={`${cx.reviewContent}`}>
                <div className={`${cx.nameImgBox}`}>
                  <img src={NadineLustre} />
                  <div className={`${cx.nameText}`}>
                    <h5>Vic Sotto</h5>
                    <p>
                      Social Media Influencer .{" "}
                      <span>New York, United States</span>
                    </p>
                  </div>
                </div>
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
                    <li className="ms-1" style={{color:"#878787", fontSize:'14px', position:'relative', top:'1.5px'}}>
                    (5.0)
                    </li>
                  </ul>
                 
                  <h5>Good coffee and cozy cafe!</h5>
                  <p>It’s a great experience. The ambiance is very welcoming and charming. Amazing wines, food and service.  Staff are extremely knowledgeable and make great recommendations.</p>
                  <NavLink to="#" className={`${cx.replyBtn}`}>Reply</NavLink>

                  <div className={`${cx.replayBox}`}>
                    <NavLink to="#" className={`${cx.replayDropdown}`}
                        onClick={() => setOpen2(!open2)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open2}
                      >
                      <IoIosArrowUp/> 2 Replies
                    </NavLink>
                    <Collapse in={open2}>
                      <div id="example-collapse-text">
                        <div className={`${cx.commentCard}`}>
                          <div className={`${cx.commentCardHeader}`}>
                            <img src={NadineLustre} className={`${cx.profileImg}`} />
                            <div className={`${cx.commentCardBody}`}>
                              <h5>Beatrice Rice</h5>
                              <p>Social Media Influencer .New York, United States</p>
                              </div>
                          </div>
                          <div className={`${cx.commentCardMessage}`}>
                             <p>Best thing in the world ❤️</p>
                             <NavLink to="#" className={`${cx.replyBtn}`}>Reply</NavLink>
                          </div>
                        </div>
                        
                        <div className={`${cx.commentCard}`}>
                          <div className={`${cx.commentCardHeader}`}>
                            <img src={NadineLustre} className={`${cx.profileImg}`} />
                            <div className={`${cx.commentCardBody}`}>
                              <h5>Beatrice Rice</h5>
                              <p>Social Media Influencer .New York, United States</p>
                              </div>
                          </div>
                          <div className={`${cx.commentCardMessage}`}>
                             <p>In addition, they have a very relaxing music while you are working! </p>
                             <NavLink to="#" className={`${cx.replyBtn}`}>Reply</NavLink>
                          </div>
                        </div>

                        {/* Reply Box Start */}
                          <div className={`${cx.replyForm}`}>
                            <img src={NadineLustre} />
                            <span>@Justin Chase</span>
                            <input type="text" className={`form-control ${cx.formBox}`} />
                          </div>
                          <div className={`${cx.revieBtn}`}>
                            <button className={`btn ${cx.btn2}`}>Cancel</button>
                            <button className={`btn ${st.btn2}`}>Send</button>
                          </div>
                        {/* Reply Box End */}

                      </div>
                    </Collapse>
                  </div>
                </div>
              </div>

            </Col>
          </Row>
        </Container>
      </section>
      <ThankYou show={show} handleClose={handleClose} />
    </>
  );
};

export default Reviews;
