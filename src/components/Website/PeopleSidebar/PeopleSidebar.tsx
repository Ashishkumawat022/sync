import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import cx from "./PeopleSidebar.module.scss";

import { Container, Form, Col, Row, Collapse } from "react-bootstrap";
import { upload_icon } from "../../../assets/images";
import {
  MdOutlineEventAvailable,
  MdOutlineGroups,
  MdOutlineKeyboardArrowDown,
  MdOutlineStarPurple500,
} from "react-icons/md";
import { FiUsers } from "react-icons/fi";

const PeopleSidebar = (props: any) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={`${cx.people_sidbar}`}>
          <Col lg={12}>
            <div className={`${cx.sidbar_Menu}`}>
              <h5>Manage People</h5>
              <ul>
                <li>
                  <NavLink to="#">
                    <span><FiUsers /></span>
                    Connections
                  </NavLink>
                  <NavLink className={`${cx.countUser}`} to="#">1,029</NavLink>
                </li>
                <li>
                  <NavLink to="#">
                    <span><MdOutlineGroups /></span>
                    Groups
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#">
                  <span><MdOutlineEventAvailable/></span>
                    Events
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#">
                  <span><MdOutlineStarPurple500/></span>
                    Item placeholder
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className={`${cx.advertise_Menu} mt-4`}>
              <img src={upload_icon} alt="" />
              <h5>
                Advertisement <br />
                Area
              </h5>
            </div>
          </Col>
          <Col lg={6}>
            <div className={`${cx.advertise_Menu} mt-4`}>
              <img src={upload_icon} alt="" />
              <h5>
                Advertisement <br />
                Area
              </h5>
            </div>
          </Col>
          <Col lg={6}>
            <div className={`${cx.advertise_Menu} mt-4 mb-4`}>
              <img src={upload_icon} alt="" />
              <h5>
                Advertisement <br />
                Area
              </h5>
            </div>
          </Col>
      </div>
    </>
  );
};

export default PeopleSidebar;
