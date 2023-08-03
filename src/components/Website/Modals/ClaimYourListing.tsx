import React, { useEffect, useState } from "react";
import m from "./Modal.module.scss";
import st from "../../../assets/stylesheet/style.module.scss";

import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";
import CoffeeShop from "../CoffeeShop/CoffeeShop";
import { coffeeShop1 } from "../../../assets/images";
import { Checkbox } from "../Forms";
import { BiBorderBottom } from "react-icons/bi";

const ClaimYourListing = (props: any) => {
  let { show, handleClose } = props;

  return (
    <>
      <Modal
        centered
        scrollable
        show={show}
        onHide={handleClose}
        className={`${m.modalCts} ${m.modalMin}`}
      >
        <Modal.Header
          style={{ justifyContent: "center", alignItems: "center" , borderBottom:"none"}}
        >
          <Modal.Title>Claim your listing</Modal.Title>
          <button
            className={`${m.closeIcon}`}
            title="Close"
            onClick={handleClose}
            style={{ right: "9px", top: "0px" }}
          >
            <MdClose />
          </button>
        </Modal.Header>
        <Modal.Body  style={{padding:"0px 14px"}}>
          <div className={`${m.formContact}`}>
            <div className={`${m.formBox}`}>
              <Row>
                <Col lg={12} className="border-bottom">
                  <div className={`${m.ClaimYourListing}`}>
                    <img src={coffeeShop1} />
                    <div>
                      <h5>James Brews & Coffee</h5>
                      <p>Boston, United States</p>
                    </div>
                  </div>
                </Col>

                <Col lg={12}>
                  <div className={`${m.listingForm}`}>
                    <p>
                      In order to increase security levels, prevent instances of
                      fraud and ensure <br /> the best experience for all
                      business representatives, Tripadvisor requires <br />
                      business registration and verification.
                    </p>

                    <div className={`${m.listingFormBox}`}>
                      <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Full Name*" />
                      </Form.Group>
                    </div>
                    <div className={`${m.listingFormBox}`}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="number"
                          placeholder="Business Phone*"
                          
                        />
                      </Form.Group>
                    </div>
                    <div className={`${m.listingFormBox}`}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="email"
                          placeholder="Business Email*"
                        />
                      </Form.Group>
                    </div>
                    <div className={`${m.listingFormBox}`}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="text"
                          placeholder="Role at business*"
                        />
                      </Form.Group>
                    </div>

                    <ul className={`${m.policyList}`}>
                      <li>
                        <label className={`${st.checkbox}`}>
                          <Checkbox />
                          Get notified by email about new reviews, best
                          practices, and more to help you improve your online
                          reputation and build your business.
                        </label>
                      </li>

                      <h5>
                        Please click the statements below to indicate you
                        understand and accept these terms.
                      </h5>

                      <li>
                        <label className={`${st.checkbox}`}>
                          <Checkbox />I certify that I am an authorized
                          representative or affiliate of this establishment and
                          have the authority to register as a business
                          representative. The information I have entered into
                          this form is neither false nor fraudulent. I also
                          understand that Sync Remote may disclose my name and
                          affiliation to other verified representatives of this
                          establishment.
                        </label>
                      </li>
                      <li>
                        <label className={`${st.checkbox}`}>
                          <Checkbox />I have read and accept Sync Remote’s <NavLink to="#"> Terms
                          of Use  </NavLink>and  <NavLink to="#"> Privacy Policy. </NavLink>
                        </label>
                      </li>
                    </ul>
                  </div>
                </Col> 
                <Col lg={12} className="text-center mb-4">
                  <div className={` ${m.btnSubmit}`}>
                    <button className={`btn ${st.btn2}`}>Done</button>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          
          
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ClaimYourListing;
