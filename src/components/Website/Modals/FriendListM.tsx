import React, { useEffect, useState } from "react";
import m from "./Modal.module.scss";

import st from "../../../assets/stylesheet/style.module.scss";

import { Modal, Button, Row, Col, Form, Dropdown } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import { InstaStory, PinSmall, mapImage, userProfile } from "../../../assets/images";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaTelegramPlane,
    FaRedditAlien,
  } from "react-icons/fa";
  import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
  import { FiLink, FiMoreHorizontal } from "react-icons/fi";
  
import { RiWhatsappFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const ShareLocationM = (props: any) => {
  let { friendshow, handlefriendClose } = props;

  return (
    <>
      <Modal
        centered
        show={friendshow}
        onHide={handlefriendClose}
        className={`${m.modalCts} ${m.modalMin}`}
      >
        <Modal.Header style={{ justifyContent: "center", alignItems: "center" }}>
          <Modal.Title>Friends who have been here</Modal.Title>
          <button
            className={`${m.closeIcon}`}
            title="Close"
            onClick={handlefriendClose}
          >
            <MdClose />
          </button>
        </Modal.Header>
        <Modal.Body>

        <div className={` ${m.listContainer}`}>
        <div className={`d-flex flex-row justify-content-between ${m.friendListItem}`}>
          <div className={`d-flex flex-row align-items-center ${m.friendlistDetails}`}>
            <img src={userProfile} alt="" />
            <div>
              <h5>Nadine Lustre</h5>
              <p>Student @ New York State University</p>
            </div>
          </div>
          <div className={m.optionButton}>
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                <FiMoreHorizontal />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <ul>
                  <li><NavLink to="#">View Profile</NavLink></li>
                  <li><NavLink to="#">See Nadine’s Map</NavLink></li>
                </ul>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          
        </div>
        <div className={`d-flex flex-row justify-content-between ${m.friendListItem}`}>
          <div className={`d-flex flex-row align-items-center ${m.friendlistDetails}`}>
            <img src={userProfile} alt="" />
            <div>
              <h5>Nadine Lustre</h5>
              <p>Student @ New York State University</p>
            </div>
          </div>
          <div className={m.optionButton}>
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                <FiMoreHorizontal />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <ul>
                  <li><NavLink to="#">View Profile</NavLink></li>
                  <li><NavLink to="#">See Nadine’s Map</NavLink></li>
                </ul>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          
        </div>
        <div className={`d-flex flex-row justify-content-between ${m.friendListItem}`}>
          <div className={`d-flex flex-row align-items-center ${m.friendlistDetails}`}>
            <img src={userProfile} alt="" />
            <div>
              <h5>Nadine Lustre</h5>
              <p>Student @ New York State University</p>
            </div>
          </div>
          <div className={m.optionButton}>
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                <FiMoreHorizontal />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <ul>
                  <li><NavLink to="#">View Profile</NavLink></li>
                  <li><NavLink to="#">See Nadine’s Map</NavLink></li>
                </ul>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          
        </div>
        <div className={`d-flex flex-row justify-content-between ${m.friendListItem}`}>
          <div className={`d-flex flex-row align-items-center ${m.friendlistDetails}`}>
            <img src={userProfile} alt="" />
            <div>
              <h5>Nadine Lustre</h5>
              <p>Student @ New York State University</p>
            </div>
          </div>
          <div className={m.optionButton}>
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                <FiMoreHorizontal />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <ul>
                  <li><NavLink to="#">View Profile</NavLink></li>
                  <li><NavLink to="#">See Nadine’s Map</NavLink></li>
                </ul>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          
        </div>
      
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ShareLocationM;
