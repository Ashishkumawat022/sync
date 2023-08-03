import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import cx from "./PeopleCard.module.scss";

import {  Col, Row } from "react-bootstrap";
import { profile_icon } from "../../../assets/images";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BiNetworkChart } from "react-icons/bi";
import {  MdClose } from "react-icons/md";


const PeopleCard = (props: any) => {
  return (
    <>
      <div className={`${cx.people_card}`}>
        <Row>
          <Col lg={12}>
        <div  className={`${cx.user_card}`}>
            <div  className={`${cx.card_head}`}>
                <img src={profile_icon}  />
                <MdClose className={`${cx.close_icon}`}/>
            </div>
            <div className={`${cx.user_card_detail}`}>
                <h5>Shasha Batumbakal</h5>
                <p>Student @ New York State University</p>
                <p>  < BiNetworkChart/> <span>Mutual Connections </span></p>
                <button> <AiOutlineUserAdd/>
                <span>Connect </span></button>
                   
            </div>
        </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default PeopleCard;
