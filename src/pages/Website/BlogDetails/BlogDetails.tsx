import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import cx from "./BlogDetails.module.scss";
import st from "../../../assets/stylesheet/style.module.scss";

import { Container, Form, Col, Row } from "react-bootstrap";
import { AnnaSmith } from "../../../assets/images";
import { Gray } from "../../../assets/images";
import { BlogImage } from "../../../assets/images";
import { romanImage } from "../../../assets/images";

import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn, FaLink, FaFacebookF } from "react-icons/fa";
import { Blog } from "../../../components/Website";


function BlogDetail(props: any) {

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  
  return (
    <>
      <section className={`${cx.bannerSection} ${st.fixSpace}`}>
        <img src={Gray} className={`${cx.backgroundImg}`} />
        <Container>
          <Row>
            <Col md={11} className={`${cx.contentBox}`}>
              <div className={`${cx.contentHeading}`}>
                <h1>MarginEdge Secures $45 Million to Accelerate Growth of Its Restaurant Management and Bill Payment Platform</h1>
                <p>14th December 2023</p>

                <div className={`${cx.NameBox}`}>
                  <img src={AnnaSmith} />
                  <div className={`${cx.NameList}`}>
                    <h3>Anna Smith</h3>
                    <p>Marketing Manager @  Sync Remote . <span>New York, United States</span></p>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={12}>
              <div className={`${cx.blogImages}`}>
                <img src={BlogImage} />
              </div>
            </Col>

            <Col className="col-3" md={1}>
              <div className={`${cx.socialIcon}`}>
                <div className={`${cx.socialBox}`}>
                  <p>Share it on:</p>
                  <ul>
                    <li>
                      <NavLink to="#">
                        <BsTwitter />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        <FaLinkedinIn />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        <FaFacebookF />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        <FaLink />
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col md={11} className={`col-9 m-auto`}>
              <Col md={11} className={`m-auto`}>
                <div className={`${cx.blogText}`}>
                  <h3>MarginEdge Secures $45 Million to Accelerate Growth of Its Restaurant Management and Bill Payment Platform. Restaurant technology solution provider MarginEdge has raised $45 million in a Series C funding round, only a few months after closing a Series B round. </h3>

                  <p>MarginEdge closed an oversubscribed $18 million Series B investment in September. Schooner Capital led the round with follow-on investments from all major and strategic investors to-date, including Osage Venture Partners, Gordon Food Service’s innovation arm Relish Works and Nigel Morris. The company secured a Series A funding round of $5 million in October 2019, as reported here, then an A2 in 2020.</p>
                  <p>The MarginEdge platform offers invoice processing, inventory management, recipe analysis, budgeting, performance tracking, and supplier bill payment capabilities. It aims to simplify the complex business of running a restaurant by providing real-time data and insights to enable better business decisions, drive cost efficiencies, and save time for operators.</p>
                </div>

                <div className={`${cx.blogText}`}>
                  <h3>“There’s several factors that investors look at that are very important, and one is the size of the market, meaning the number of restaurants MarginEdge can potentially work for,”</h3>
                  <h4>Bo Davis, CEO and Co-Founder of MarginEdge</h4>
                  <p>in a Spotlight Interview with Restaurant Technology News.</p>
                  <p>MarginEdge closed an oversubscribed $18 million Series B investment in September. Schooner Capital led the round with follow-on investments from all major and strategic investors to-date, including Osage Venture Partners, Gordon Food Service’s innovation arm Relish Works and Nigel Morris. The company secured a Series A funding round of $5 million in October 2019, as reported here, then an A2 in 2020.</p>
                  <p>The MarginEdge platform offers invoice processing, inventory management, recipe analysis, budgeting, performance tracking, and supplier bill payment capabilities. It aims to simplify the complex business of running a restaurant by providing real-time data and insights to enable better business decisions, drive cost efficiencies, and save time for operators.</p>
                </div>

                <div className={`${cx.blogImages}`}>
                  <img src={romanImage} />

                  <p>Image Source: A cafeteria in Seville</p>
                </div>

                <div className={`${cx.blogText}`}>
                  <h3>MarginEdge Secures $45 Million to Accelerate Growth of Its Restaurant Management and Bill Payment Platform. Restaurant technology solution provider MarginEdge has raised $45 million in a Series C funding round, only a few months after closing a Series B round. </h3>

                  <p>MarginEdge closed an oversubscribed $18 million Series B investment in September. Schooner Capital led the round with follow-on investments from all major and strategic investors to-date, including Osage Venture Partners, Gordon Food Service’s innovation arm Relish Works and Nigel Morris. The company secured a Series A funding round of $5 million in October 2019, as reported here, then an A2 in 2020.</p>
                  <p>The MarginEdge platform offers invoice processing, inventory management, recipe analysis, budgeting, performance tracking, and supplier bill payment capabilities. It aims to simplify the complex business of running a restaurant by providing real-time data and insights to enable better business decisions, drive cost efficiencies, and save time for operators.</p>
                </div>
              </Col>
            </Col>
          </Row>
        </Container>
      </section>

      
      <section className={`${cx.featuredSection} ${st.sectionPadding}`}>
        <Container>
          <Col lg={12} className={`${st.title} text-left mb-4`}>
            <h3 className={`${st.heading2}`}>You might be interested</h3>
          </Col>
          <Row>
            <Col md={4} lg={3} xl={3} xxl={3}><Blog /></Col>
            <Col md={4} lg={3} xl={3} xxl={3}><Blog /></Col>
            <Col md={4} lg={3} xl={3} xxl={3}><Blog /></Col>
            <Col md={4} lg={3} xl={3} xxl={3}><Blog /></Col>
          </Row>

          <Col lg={12} className={`text-center mt-4`}>
             <NavLink to="/blog" className={`btn ${st.btn2}`}>See all articles</NavLink>
          </Col>
        </Container>
      </section>
    </>
  );
}

export default BlogDetail;
