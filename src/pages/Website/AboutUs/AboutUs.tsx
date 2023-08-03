import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import cx from "./AboutUs.module.scss";
import st from "../../../assets/stylesheet/style.module.scss";

import { Container, Form, Col, Row } from "react-bootstrap";
import { Carlos, Haley, Yellow } from "../../../assets/images";
import { Boy } from "../../../assets/images";
import { Gril } from "../../../assets/images";

const AboutUs = (props: any) => {

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  
  return (
    <>
      <section className={`${cx.bannerSection} ${cx.section_padding}`}>
        <img src={Yellow} className={`${cx.backgroundImg}`} />
        <Container>
          <Row>
            <Col md={10} lg={8} xl={8} xxl={8} className={`m-auto ${cx.contentBox}`}>
              <div className={`${cx.contentHeading}`}>
                <h1>About us</h1>
              </div>
            </Col>

            <Col md={10} lg={8} xl={8} xxl={8} className={`m-auto`}>
              <div className={`${cx.blogText}`}>
                <h3>We are remote workers who have always loved to travel and discover new places - even if those new places are in our own city!</h3>

                <p>We noticed from personal experience that although we love working from cafes, it can be a big hassle to try and figure out which ones are remote work-friendly – AKA, have good WiFi, a nice table layout, and plenty of charger outlets, among other things.</p>
                <p>We decided to create a platform that shows which cafes people can work from in their city and which cafes others are working from. With both a map and catalog, remote workers have easy access to specific information they need to know about a cafe before going to work from there. </p>
                <p>The map also shows which cafes their friends and coworkers are working from, making it easy to get that social interaction and sense of connection that so many feel they’ve been lacking because of remote work.</p>
              </div>

              <div className={`m-auto ${cx.coFounder}`}>
                  <div className={`${cx.FounderImg}`}>
                    <img src={Carlos} />
                    <img src={Haley} />
                  </div>
                  <h5>Carlos Guisado & Haley Grant</h5>
                  <p>Co-Founders</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutUs;
