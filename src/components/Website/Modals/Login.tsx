import React, { useEffect, useState } from "react";
import m from "./Modal.module.scss";
import st from "../../../assets/stylesheet/style.module.scss";
import { NavLink } from "react-router-dom";
import {
  Modal, Button, Row, Col, Form
} from "react-bootstrap";
import { MdClose, } from "react-icons/md";
import { AiFillApple, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import Signup from "./Signup";

const Login = (props: any) => {

  const [showSignup, setSignupShow] = useState(false);
  const handleSignupClose = () => setSignupShow(false);
  const handleSignupShow = () => setSignupShow(true);

  let { showLogin, handleLoginClose } = props;
  
  const [show, setShow] = useState(true);
  return (
    <>
      <Modal
        centered scrollable
        show={showLogin}
        onHide={handleLoginClose}
        className={`${m.modalCts} ${m.modalSmall} ${m.loginPopup}`}
      >
        <Modal.Header>
          <Modal.Title>Log in to Sync Remote</Modal.Title>
          <button
            className={`${m.closeIcon}`}
            title="Close"
            onClick={handleLoginClose}
          >
            <MdClose />
          </button>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col lg={12}>
              <div className={`${st.formBox}`}>
                <Form.Control type="email" placeholder="Your email" />
              </div>
            </Col>
            <Col lg={12}>
              <div className={`${st.formBox}`}>
                  <div className="position-relative">
                    <input className="form-control" placeholder="Your password"
                      type={show ? "password" : "text"} />{show ? (
                        <AiFillEye className={`${st.eyeIcon}`}
                          onClick={() => {
                            setShow(false);
                          }}
                        />
                      ) : (
                        <AiFillEyeInvisible className={`${st.eyeIcon}`}
                          onClick={() => {
                            setShow(true);
                          }}
                        />
                      )}
                  </div>
                  <p className={`${m.forgotPassword}`}><NavLink to="#">Forgot Password ?</NavLink></p>
              </div>
            </Col>
            
            <Col lg={12}>
            <button className={`btn ${st.btn2} mt-3`} style={{ width:'100%' }}>Log in</button>
             <p className={`${m.linkS}`}>Don't have an account? <NavLink to="#" onClick={()=>{handleSignupShow()
            handleLoginClose()
            }}>Signup</NavLink></p>
              <hr />
                <div className={`${m.socialBox}`}>
                  <p>or sign up using</p>
                  <ul className={`btn ${m.socialSignup}`} >
                    <li><NavLink to="#"><FaFacebookF /></NavLink></li>
                    <li><NavLink to="#"><FaGoogle /></NavLink></li>
                    <li><NavLink to="#" style={{ fontSize:'20px' }}><AiFillApple /></NavLink></li>
                  </ul>
                </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      
      <Signup showSignup={showSignup} handleSignupClose={handleSignupClose} handleLoginShow={props.handleLoginShow}/> 
    </>
  );
};

export default Login;
