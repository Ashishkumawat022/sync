import React, { useEffect, useState } from "react";
import cx from "./Modal.module.scss";


import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import { InstaStory, PinSmall, mapImage, userProfile } from "../../../assets/images";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaTelegramPlane,
    FaRedditAlien,
  } from "react-icons/fa";
  import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
  import { FiLink } from "react-icons/fi";
  
import { RiWhatsappFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const ShareLocationM = (props: any) => {
  return (
    <>
      <Modal
        centered
        scrollable
        show={props.locationshow}
        onHide={props.handlelocationClose}
        className={`${cx.modalCts} ${cx.modalMin}`}
      >
        <Modal.Header style={{ justifyContent: "center", alignItems: "center" }}>
          <Modal.Title>Share this cafe to your friends!</Modal.Title>
          <button
            className={`${cx.closeIcon}`}
            title="Close"
            onClick={props.handlelocationClose}
          >
            <MdClose />
          </button>
        </Modal.Header>
        <Modal.Body>
          <Row>
        <Col lg={12}>
            <div className={`${cx.share_Location} `}>
                <ul>
                    <li>
                      <NavLink to="#">
                        <span className={`${cx.shareIcon} `}><FaFacebookF /></span>Share to Facebook
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        <span className={`${cx.shareIcon} `}><AiFillInstagram /></span>Share to Instagram
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        <span className={`${cx.shareIcon} `}><AiOutlineTwitter /></span>Share to Twitter
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        <span className={`${cx.shareIcon} `}><FaLinkedinIn /></span>Share to LinkedIn
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        <span className={`${cx.shareIcon} `}><FiLink /></span>Copy Link
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        <span className={`${cx.shareIcon} `}><RiWhatsappFill /></span>Share to Whatsapp
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        <span className={`${cx.shareIcon} `}><FaTelegramPlane /></span>Share to Telegram
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        <span className={`${cx.shareIcon} `}><FaRedditAlien /></span>Share to Reddit
                      </NavLink>
                    </li>

                </ul>
            </div>
        </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ShareLocationM;
