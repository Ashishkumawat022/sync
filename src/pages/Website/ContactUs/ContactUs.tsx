import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import cx from "./ContactUs.module.scss";
import st from "../../../assets/stylesheet/style.module.scss";

import { Container, Form, Col, Row, Button } from "react-bootstrap";
import { ContactHeader } from "../../../assets/images";

import {ThankYou} from "../../../components/Website/Modals";

const ContactUs = (props: any) => {
  
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

  return (
    <>
    <div className={`${cx.spaceBox}`}>
      <section className={`${cx.bannerSection}`}>
        <img src={ContactHeader}  />
        <Container>
          <Row>
            <Col md={8} className={`m-auto ${cx.contentBox}`}>
              <div className={`${cx.contentHeading}`}>
                <h1>Contact Us</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>

      <section className={`${cx.contactForm}`}>
        <Container>
          <Row>
            <Col md={6}>
              <div className={`${cx.contactMessage}`}>
                  <h3>Do you have any questions or suggestions on mind?</h3>
                  <p>At Sync, we highly appreciate feedback and suggestions directly from our users so that we could establish a connection to make our product a better platform for every one.</p>
                  <p>Let’s Sync!</p>
              </div>
            </Col>

            <Col md={6}>
              <div className={`${cx.formContact}`}>
                  <p>* Answer required</p>
                  <div className={`${cx.formBox}`}>
                    <Form>
                      <Form.Group className="mb-4 position-relative">
                        <Form.Label>First Name*</Form.Label>
                        <Form.Control type="type" placeholder="Your Name" />
                      </Form.Group>
                      <Form.Group className="mb-4 position-relative">
                        <Form.Label>Last Name*</Form.Label>
                        <Form.Control type="type" placeholder="Your Last Name" />
                      </Form.Group>
                      <Form.Group className="mb-4 position-relative">
                        <Form.Label>Headline*</Form.Label>
                        <Form.Control type="type" placeholder="Your Position" />
                      </Form.Group>
                      <Form.Group className="mb-4 position-relative">
                        <Form.Control as="textarea" placeholder="Type your message here" rows={3} />
                      </Form.Group>
                     
                    </Form>
                    <div className={` ${cx.btnSubmit}`}>
                      <button className={`btn ${st.btn2}`} onClick={handleShow}>Submit</button>
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

export default ContactUs;
