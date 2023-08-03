import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import cx from "./Notifications.module.scss";
import st from "../../../assets/stylesheet/style.module.scss";

import { Container, Form, Col, Row, Button } from "react-bootstrap";
import { NadineLustre } from "../../../assets/images";

const Notifications = (props: any) => {

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  
  return (
    <>
      <section className={`${cx.NotificationSection} ${st.sectionPaddingBottom}`}>
        <Container>
          <Row>
            <Col lg={8} md={12} sm={12}>
              <div className={`${cx.notificationBox}`}>
                <div className={`${cx.notificationHeading}`}>
                  <h5>Notifications</h5>
                </div>

                <div className={`${cx.notificationStart}`}>
                  <div className={`${cx.notificationShow} ${cx.borderBottom}`}>
                    <div className={`${cx.notificationName}`}>
                      <img src={NadineLustre}  />
                      <div className={`${cx.textAlign}`}>
                        <h4>Nadine Lustre</h4>
                        <p>Sent you an invitation</p>
                      </div>
                    </div>
                    <div className={`${cx.notificationButton}`}>
                        <button className={`btn ${st.btn2}`}>Ignore</button>
                        <button className={`btn ${st.btn2} ${cx.acceptBtn}`}>Accept</button>
                    </div>
                  </div>
                  <div className={`${cx.notificationShow} ${cx.borderBottom}`}>
                    <div className={`${cx.notificationName}`}>
                      <img src={NadineLustre}  />
                      <div className={`${cx.textAlign}`}>
                        <h4>Anna Smith</h4>
                        <p>Invited you to a group</p>
                      </div>
                    </div>
                    <div className={`${cx.notificationButton}`}>
                        <button className={`btn ${st.btn2}`}>Ignore</button>
                        <button className={`btn ${st.btn2} ${cx.acceptBtn}`}>Accept</button>
                    </div>
                  </div>
                  <div className={`${cx.notificationShow} ${cx.borderBottom}`}>
                    <div className={`${cx.notificationName}`}>
                      <img src={NadineLustre}  />
                      <div className={`${cx.textAlign}`}>
                        <h4>Justin Chase</h4>
                        <p>Left a reply on  a thread you commented</p>
                      </div>
                    </div>
                    <div className={`${cx.notificationButton}`}>
                        <button className={`btn ${st.btn2} ${cx.acceptBtn}`}>See reply</button>
                    </div>
                  </div>
                  <div className={`${cx.notificationShow}`}>
                    <div className={`${cx.notificationName}`}>
                      <img src={NadineLustre}  />
                      <div className={`${cx.textAlign}`}>
                        <h4>James Coffee & Brews</h4>
                        <p>Updated their cafe informations</p>
                      </div>
                    </div>
                    <div className={`${cx.notificationButton}`}>
                        <button className={`btn ${st.btn2} ${cx.acceptBtn}`}>See Cafe</button>
                    </div>
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

export default Notifications;
