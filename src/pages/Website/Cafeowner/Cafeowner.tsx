import React, { useEffect, useState } from "react";
import cx from "./Cafeowner.module.scss";
import st from "../../../assets/stylesheet/style.module.scss";
import { NavLink } from "react-router-dom";

import { Container, Form, Col, Row, Button } from "react-bootstrap";
import {
  coffeeShop1,
  hand_shake,
  headerBackground,
  image_end,
  image_left,
  image_right,
  join_community_bg,
  people,
  text_message,
} from "../../../assets/images";
import { HiLocationMarker } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import {} from "react-icons/hi";
import {
  ClaimYourListing,
  VerifyIdentityM,
} from "../../../components/Website/Modals";

const Cafeowner = (props: any) => {

  const [Veiifyshow, setVeiifyShow] = useState(false);
  const handleVeiifyClose = () => setVeiifyShow(false);
  const handleVeiifyShow = () => setVeiifyShow(true);

  // for dropdown

  const [showLocation, setshowLocation] = useState(false);
  const [businessListed, setbusinessListed] = useState(false);

  const showLocationDropdown = () => {
    setshowLocation(!showLocation);
  };

  const businessListedDropdown = () => {
    setbusinessListed(!businessListed);
  };
  // for dropdown

  const [afterShowModule, setafterShowModule] = useState(false);
  const [beforeModule, setbeforeModule] = useState(true);

  
  const afterShowModulef = () => {
    setafterShowModule(!afterShowModule);

    setbeforeModule(false)
  };


 


  return (
    <>
      <div className={`${cx.spaceBox} `}>
        <section className={`${cx.bannerSection}`}>
          <img src={headerBackground} />
          <Container>
            <Col md={8} className={`m-auto ${cx.contentBox}`}>
              <div className={`${cx.contentHeading}`}>
                <h1>expand your reach</h1>
                <p>Become a remote work hub, on your terms</p>
              </div>
            </Col>



            {/* before show */}
{ beforeModule && 
             <div className={`${cx.searchForm}`}>
              <h5>Is your business already listed?</h5>
              <Form>
                <div className={`${cx.searchFormBody}`}>
                  <Form.Group className={`${cx.formBox}`}>
                    <span className={`${cx.icon}`}>
                      <HiLocationMarker />
                    </span>
                    <Form.Control
                      type="search"
                      placeholder="Location"
                      onClick={showLocationDropdown}
                    />

                    {showLocation && (
                      <div className={`${cx.dropdownList}`}>
                        <h3>Location Results</h3>
                        <div>
                          <ul>
                            <li>
                              <HiLocationMarker
                                className={`${cx.locationIcon}`}
                              />
                              <div className={`${cx.locationList}`}>
                                <h5>Boston</h5>
                                <p>Massachusetts, United States </p>
                              </div>
                            </li>
                            <li>
                              <HiLocationMarker
                                className={`${cx.locationIcon}`}
                              />
                              <div className={`${cx.locationList}`}>
                                <h5>Boston</h5>
                                <p>Massachusetts, United States </p>
                              </div>
                            </li>
                            <li>
                              <HiLocationMarker
                                className={`${cx.locationIcon}`}
                              />
                              <div className={`${cx.locationList}`}>
                                <h5>Boston</h5>
                                <p>Massachusetts, United States </p>
                              </div>
                            </li>
                            <li>
                              <HiLocationMarker
                                className={`${cx.locationIcon}`}
                              />
                              <div className={`${cx.locationList}`}>
                                <h5>Boston</h5>
                                <p>Massachusetts, United States </p>
                              </div>
                            </li>
                            <li>
                              <HiLocationMarker
                                className={`${cx.locationIcon}`}
                              />
                              <div className={`${cx.locationList}`}>
                                <h5>Boston</h5>
                                <p>Massachusetts, United States </p>
                              </div>
                            </li>
                            <li>
                              <HiLocationMarker
                                className={`${cx.locationIcon}`}
                              />
                              <div className={`${cx.locationList}`}>
                                <h5>Boston</h5>
                                <p>Massachusetts, United States </p>
                              </div>
                            </li>
                            <li>
                              <HiLocationMarker
                                className={`${cx.locationIcon}`}
                              />
                              <div className={`${cx.locationList}`}>
                                <h5>Boston</h5>
                                <p>Massachusetts, United States </p>
                              </div>
                            </li>
                            <li>
                              <HiLocationMarker
                                className={`${cx.locationIcon}`}
                              />
                              <div className={`${cx.locationList}`}>
                                <h5>Boston</h5>
                                <p>Massachusetts, United States </p>
                              </div>
                            </li>
                            <li>
                              <HiLocationMarker
                                className={`${cx.locationIcon}`}
                              />
                              <div className={`${cx.locationList}`}>
                                <h5>Boston</h5>
                                <p>Massachusetts, United States </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </Form.Group>
                  <Form.Group className={`${cx.formBox}`}>
                    <span className={`${cx.icon}`} style={{ fontSize: "18px" }}>
                      <FaSearch />
                    </span>
                    <Form.Control
                      type="search"
                      placeholder="Business name"
                      onClick={businessListedDropdown}
                    />
                    {businessListed && (
                      <div className={`${cx.dropdownList}`}>
                        <h3>5 Results found</h3>
                        <div className={`${cx.userFound}`}>
                          <ul>
                            <li>
                              <img src={coffeeShop1} />
                              <div className={`${cx.locationList}`}>
                                <h5>James Brews & Coffee</h5>
                                <p>Boston, United States </p>
                              </div>
                            </li>
                            <li>
                              <img src={coffeeShop1} />
                              <div className={`${cx.locationList}`}>
                                <h5>James Brews & Coffee</h5>
                                <p>Boston, United States </p>
                              </div>
                            </li>
                            <li>
                              <img src={coffeeShop1} />
                              <div className={`${cx.locationList}`}>
                                <h5>James Brews & Coffee</h5>
                                <p>Boston, United States </p>
                              </div>
                            </li>
                            <li>
                              <img src={coffeeShop1} />
                              <div className={`${cx.locationList}`}>
                                <h5>James Brews & Coffee</h5>
                                <p>Boston, United States </p>
                              </div>
                            </li>
                            <li>
                              <img src={coffeeShop1} />
                              <div className={`${cx.locationList}`}>
                                <h5>James Brews & Coffee</h5>
                                <p>Boston, United States </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}  

                    {/* user not found */}
{/* 
                    <div className={`${cx.dropdownList}`}>
                      <h3>No results found</h3>
                      <div className={`${cx.notFound}`}>
                       <p>Can’t find your business?</p>
                       <NavLink to="#">List it now</NavLink>
                      </div>
                    </div>   */}
                    {/* user not  found end */}

                   </Form.Group>
                  <div className={`${cx.btnSubmit}`}>
                    <NavLink
                      to="#"
                      className={`btn ${st.btn2}`}
                      onClick={afterShowModulef}
                    >
                      Start searching now
                    </NavLink>
                  </div>
                </div>
              </Form>
            </div>  }

            {/* after show  */}
      { afterShowModule && 
             <div className={`${cx.searchbox}`}>
              <Row className="justify-content-center">
                <Col lg={8}>
                  <div className={` ${cx.searchtext}`}>
                    <div className={`${cx.searchitem}`}>
                      <div className={`${cx.searchmenu}`}>
                        <img src={coffeeShop1}  alt="" />
                        <div className={` ${cx.searchcontent}`}>
                          <h6>James Brews & Coffee</h6>
                          <span>Boston, United States</span>
                        </div>
                      </div>
                      <div className={`${cx.textnumber}`}>
                        <div className={`${cx.photonumber}`}>
                          <p>10</p>
                          <span>Photos</span>
                        </div>
                        <div className={`${cx.photonumber1}`}>
                          <p>16</p>
                          <span>Reviews</span>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className={` ${cx.text_content}`}>
                      <div className="mt-3">
                        <p> Not the your business? Kindly <NavLink to="#" >search again.</NavLink></p>
                      </div>
                      <div className={`${cx.btnSubmit}`}>
                        <button className={`btn ${st.btn2}`} onClick={handleVeiifyShow}>Claim your free lsiting</button>
                      </div>
                    </div>
                  </div>

                </Col>
              </Row>
            </div>  } 

          </Container>
        </section>
      </div>

      <section className={`${cx.cardSection}`}>
        <Container>
          <Row className={`${cx.cardRow}`}>
            <Col lg={6} md={6}>
              <div className={`${cx.imgBox}`}>
                <img src={image_left} alt="" />
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className={`${cx.contentBox}`}>
                <span>Manage</span>
                <h3>Take control of your business profile</h3>
                <p>
                  Customize your profile, upload photos, and include any <br />
                  information that you think people need to know before <br />
                  working from your business.
                </p>
              </div>
            </Col>
          </Row>

          <Row className={`${cx.cardRow}`}>
            <Col lg={6} md={6}>
              <div className={`${cx.contentBox}`}>
                <span>Connect</span>
                <h3>Engage with your customers</h3>
                <p>
                  Join the conversation by responding to reviews and see what
                  people are saying about your business.
                </p>
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className={`${cx.imgBox}`}>
                <img src={image_end} alt="" />
              </div>
            </Col>
          </Row>

          <Row className={`${cx.cardRow}`}>
            <Col lg={6} md={6}>
              <div className={`${cx.imgBox}`}>
                <img src={image_right} alt="" />
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className={`${cx.contentBox}`}>
                <span>Grow</span>
                <h3>Track your performance</h3>
                <p>
                  Access key insights to see how people are engaging with your
                  business on Sync.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={`${cx.chooseUsSection}`}>
        <Container>
          <div className={`${cx.titleBox}`}>
            <h2>Why Sync?</h2>
          </div>
          <Row>
            <Col lg={4} md={12}>
              <div className={`${cx.chooseUsCard}`}>
                <img src={hand_shake} className={`${cx.iconBox}`} />
                <div className={`${cx.chooseUsBody}`}>
                  <h4>
                    Let the world – or at least, your city – know that you are
                    remote work-friendly.
                  </h4>
                </div>
              </div>
            </Col>

            <Col lg={4} md={12}>
              <div
                className={`${cx.chooseUsCard}`}
                style={{ background: "#F9EBD7", color: "#B98900" }}
              >
                <img src={people} className={`${cx.iconBox}`} />
                <div className={`${cx.chooseUsBody}`}>
                  <h4>
                    More exposure = <br />
                    More customers!
                  </h4>
                </div>
              </div>
            </Col>

            <Col lg={4} md={12}>
              <div
                className={`${cx.chooseUsCard}`}
                style={{ background: "#AEE1EF", color: "#0989AD" }}
              >
                <img src={text_message} className={`${cx.iconBox}`} />
                <div className={`${cx.chooseUsBody}`}>
                  <h4>Share any updates or promotions you’re offering.</h4>
                </div>
              </div>
            </Col>
          </Row>

          <div className={`${cx.joinCommunity}`}>
            <img
              src={join_community_bg}
              className={`${cx.background}`}
              alt=""
            />
            <div className={`${cx.joinCommunityBody}`}>
              <h4>Join our community of remote work-friendly cafes</h4>
              <p>
                You want people to work from your cafe. People are looking for
                cafes to work from. We’re here to help you both Sync!
              </p>
              <p>
                Sync is a platform that shows which cafes people can work from
                in their city. With both a map and catalog, remote workers can
                search for cafes while filtering by their specific needs, like
                strong WiFi, how loud or quiet the environment is, what the
                table layout looks like, and more.{" "}
              </p>
              <NavLink to="#" className={`btn ${cx.btnSubmit}`}>
                Add my cafe to sync!
              </NavLink>
            </div>
          </div>
        </Container>
      </section>

      <VerifyIdentityM
        Veiifyshow={Veiifyshow}
        handleVeiifyClose={handleVeiifyClose}
      />
    </>
  );
};

export default Cafeowner;
