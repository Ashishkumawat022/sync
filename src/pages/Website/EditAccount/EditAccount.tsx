import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import cx from "./EditAccount.module.scss";
import st from "../../../assets/stylesheet/style.module.scss";

import { Container, Form, Col, Row, Button } from "react-bootstrap";
import { FaceBook } from "../../../assets/images";

import { IoIosArrowBack } from "react-icons/io";
import { HiPlus } from "react-icons/hi";
import Radio from "../../../components/Website/Forms/Radio";
import Checkbox from "../../../components/Website/Forms/Checkbox";
import YesNo from "../../../components/Website/Forms/YesNo";

const EditAccount = (props: any) => {

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  
  return (
    <>
      <section className={`${cx.EditAccountSection} ${st.sectionPaddingBottom}`}>
        <Container>
          <Row>
            <Col lg={8} md={12} sm={12}>
              <div className={`${cx.backIcon}`}>
                  <NavLink to="#" >
                      <IoIosArrowBack/>
                      <span>Back to my profile</span>
                  </NavLink>
              </div>
              <div className={`${cx.EditAccountBox}`}>
                <div className={`${cx.EditAccountHeading}`}>
                  <h5>Edit Account Settings</h5>
                </div>
                <div className={`${cx.EditAccountTable}`}>
                    <div className={`${cx.formBox}`}>
                      <Form>
                        <Form.Group className={`mb-3 position-relative ${cx.emailFiled}`}>
                          <div className={`${cx.emailRadio}`}>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="anna.smith@syncremote.co" />
                          </div>
                          <label className={`${st.radio}`}>
                            <Radio />
                          </label>
                        </Form.Group>

                        <div className={`${cx.primaryEmail}`}>
                          <p>Primary Email Address</p>

                          <button type="button">
                            <HiPlus />
                            Add email address
                          </button>
                        </div>

                        <Form.Group className={`mb-3 position-relative ${cx.emailFiled}`}>
                          <div className={`${cx.emailRadio}`}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="*********" />
                          </div>
                        </Form.Group>

                        <div className={`${cx.primaryEmail}`}>
                          <NavLink to="#" >
                            Reset my password
                          </NavLink>
                        </div>
                      </Form>
                    </div>

                    <div className={`${cx.locationSettings}`}>
                        <h5>Location Settings</h5>

                        <div className={`${cx.locationText}`}>
                          <p>Would you like to allow us to access your current location?</p>
                          <YesNo />
                        </div>

                        <div className={`${cx.locationText}`}>
                          <p>Would you like to allow us to access your current location?</p>
                          <YesNo />
                        </div>

                        <div className={`mt-4 ${cx.locationSettings}`}>
                          <h5>Facebook Setting</h5>
                          <p>If you have a Facebook account, you might be using it to personalize your Sync experience. You can change this settings at any time.</p>
                          <div className={`${cx.facebookIcon}`}>
                            <img src={FaceBook} />
                            <h6>Facebook Connect</h6>
                          </div>
                          <p>Your Facebook Connect status: <span> Connected</span></p>

                          <div className={`${cx.disConnect}`}>
                            <NavLink to="#" >
                              Disconnect
                            </NavLink>
                          </div>
                        </div>

                        <div className={`${cx.checkBoxSection}`}>
                          <div className={`${cx.checkBox}`}>
                            <label className={`${st.checkbox}`}>
                              <Checkbox /> 
                              <p>Show information about your Facebook friends while you browse Sync</p>
                            </label>
                          </div>
                          <div className={`${cx.checkBox}`}>
                            <label className={`${st.checkbox}`}>
                              <Checkbox /> 
                              <p>Show information about your Facebook friends while you browse Sync</p>
                            </label>
                          </div>
                        </div>

                        <div className={`mt-4 ${cx.locationSettings}`}>
                          <h5>Google Setting</h5>
                          <p className="mt-4">Your Facebook Connect status: <span> Connected</span></p>
                          <div className={`${cx.disConnect}`}>
                            <NavLink to="#" >
                              Disconnect
                            </NavLink>
                          </div>
                        </div>
                    </div>
                    <div className={` ${cx.btnSubmit}`}>
                      <button className={`btn ${st.btn2}`}>Save</button>
                    </div>
                </div>

              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default EditAccount;
