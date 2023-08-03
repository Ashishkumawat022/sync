import React, { Fragment, useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import st from "../../../assets/stylesheet/AdminStyle.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./Dashboard.module.scss";
import { Card, Button, Row, Col, Modal, Form, Dropdown } from "react-bootstrap";
import { AddMoney } from "../../../components/Admin/Modals";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  changeLoginState,
  loginMessage,
} from "../../../redux_toolkit/reducer/registrationReducer";
import { profile_icon } from "../../../assets/images";
import NumberAnimator from "./NumberAnimator";
import { FaUserCircle } from "react-icons/fa";
import {
  AiFillShop,
  AiOutlineDashboard,
  AiOutlineFileText,
  AiOutlineShop,
} from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import { HiDocumentText } from "react-icons/hi";

const ListItem = () => {
  return (
    <div
      className={`d-flex align-items-center justify-content-between ${cx.listItem}`}
    >
      <div className={`d-flex  ${cx.cafeDetail}`}>
        <img
          src={profile_icon}
          height="50px"
          style={{ borderRadius: "25px", marginRight: "25px" }}
        />
        <div className=" py-10">
          <h3>Cafe name</h3>
          <p>Cafe description</p>
        </div>
      </div>
      <div style={{ fontSize: "14px", wordSpacing: "3px" }}>11 APR 2023</div>
      <div className={cx.dualButtons}>
        <button>Reject</button>
        <button>Approve</button>
      </div>
    </div>
  );
};
export default function Dashboard() {
  const registrationState = useSelector(
    (state: any) => state.registrationReducer
  );
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (registrationState.loginState === 1) {
      setShowToast(true);
      dispatch(changeLoginState());
    }
  }, [registrationState.loginState]);

  useEffect(() => {
    if (showToast === true) {
      toast.success(loginMessage.message);
      setShowToast(false);
    }
  }, [showToast]);

  return (
    <>
      <ToastContainer autoClose={3000} />
      <section className={`${st.pageWrapper}`}>
        {/* <div className={`${st.pageTitle}`}>
          <div className={`${st.pageTitleRow}`}>
            <div className={`${st.rowTitleLeft}`}>
              <h5>Dashboard</h5>
            </div>
            <div className={`${st.rowTitleRight}`}></div>
          </div>
        </div> */}

        <div className={`${st.pageWrapperInside}`}>
          <Card>
            <Card.Body>
              <Row>
                <Col lg={4} md={6}>
                  <div className={`${cx.contentBox} ${cx.countCardBox1}`}>
                    <p>
                      <HiOutlineUserGroup
                        style={{
                          fontSize: "20px",
                          color: "#496089",
                          margin: "0 5px 5px ",
                        }}
                      />
                      Total Users
                    </p>
                    <NumberAnimator n={122250} />
                  </div>
                </Col>
                <Col lg={4} md={6}>
                  <div className={`${cx.contentBox} ${cx.countCardBox2}`}>
                    <p>
                      <AiOutlineShop
                        style={{
                          fontSize: "20px",
                          margin: "0 5px 5px ",
                          color: "#738801",
                        }}
                      />
                      Total Cafes
                    </p>
                    <NumberAnimator n={1250} />
                  </div>
                </Col>
                <Col lg={4} md={6}>
                  <div className={`${cx.contentBox} ${cx.countCardBox3}`}>
                    <p>
                      <AiOutlineFileText
                        style={{
                          fontSize: "20px",
                          margin: "0 5px 5px",
                          color: "#8B81B3",
                        }}
                      />
                      Total Blogs
                    </p>
                    <NumberAnimator n={3353} />
                  </div>
                </Col>
              </Row>
              <Col md={12} className={cx.listContainer}>
                <div className={` ${cx.titleContainer} `}>
                  <h5>Cafe requests</h5>
                </div>
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
              </Col>
            </Card.Body>
          </Card>
        </div>
      </section>

      <AddMoney show={show} handleClose={handleClose} />
    </>
  );
}
