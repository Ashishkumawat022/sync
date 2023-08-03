import React, { useEffect } from "react";
import cx from './Footer.module.scss';
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { LogoFooter, PlaneIcon } from "../../../assets/images";
import { FaRegPaperPlane } from "react-icons/fa";



const Footer = () => {

  return (
    <>
      <footer className={`${cx.spaceBox} ${cx.fixedFooter}`}>
        <div className={`${cx.mainFooter}`}>
        <Container>
          <Row className={`align-items-center`}>
            <Col lg={12}>
              <div className={`${cx.newsLetter}`}>
                <p>Subscribe to newsletter</p>
                <h3>Let’s Sync!</h3>
                <div className={`${cx.subscription}`}>
                  <input type="email" className="form-control" placeholder="Type your email here" />
                  <button className={`btn ${cx.submitBtn}`}><img src={PlaneIcon} /></button>
                </div>
              </div>
              <div className={`${cx.footerCenter}`}>
                <Row>
                  <Col md={4} lg={4}>
                    <div className={`${cx.footerCenterText}`}>
                      <h2>making remote <br />work feel less<br /> remote.</h2>
                      <img src={LogoFooter} />
                    </div>
                  </Col>
                  <Col md={8} lg={8} className={`${cx.socialOrder}`}>
                    <div className={`${cx.socialLinks}`}>
                      <ul>
                        <li>
                          <NavLink to="/404">Instagram</NavLink>
                        </li>
                        <li>
                          <NavLink to="/404">Twitter</NavLink>
                        </li>
                        <li>
                          <NavLink to="/404">Facebook</NavLink>
                        </li>
                        <li>
                          <NavLink to="/404">Linkedin</NavLink>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>



          <div className={`${cx.footerBottom}`}>
            <Row className="align-items-center">
              <Col lg={4} className={`${cx.ftOrder}`}>
                <div className={`${cx.copyright}`}>
                  <p>© All Right Reserved. 2023, SyncCo.</p>
                </div>
              </Col>
              <Col lg={4}>
                  <ul className={`${cx.ftMenu} justify-content-center`}>
                    <li>
                      <NavLink to="/cafe-listing">Cafes</NavLink>
                    </li>
                    <li>
                      <NavLink to="/404">Map</NavLink>
                    </li>
                    <li>
                      <NavLink to="/blog">Blog</NavLink>
                    </li>
                    <li>
                      <NavLink to="/about-us">About</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact-us">Contact us</NavLink>
                    </li>
                  </ul>
              </Col>
              <Col lg={4}>
                  <ul className={`${cx.ftMenu} justify-content-end`}>
                    <li>
                      <NavLink to="/404">Terms & Conditions</NavLink>
                    </li>
                    <li>
                      <NavLink to="/404">Cookies</NavLink>
                    </li>
                  </ul>
              </Col>
            </Row>
          </div>

        </Container>
      </div>
      </footer>
    </>
  );
};

export default Footer;
