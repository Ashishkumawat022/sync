import React from "react";
import st from "../../../assets/stylesheet/AdminStyle.module.scss";
import { Col } from "react-bootstrap";
import { profile_icon, BlogImage } from "../../../assets/images";
import cx from "./User.module.scss";
import { AiOutlineHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();
  const Listitem = ({ item }: any) => {
    return (
      <div className={`d-flex ${cx.itemWrapper}`}>
        <p>{item.key}:</p>
        <span>{item.value}</span>
      </div>
    );
  };
  return (
    <section className={` ${st.pageWrapper}`}>
      <div className={`${st.pageWrapperInside}`}>
        <Col className={cx.buttonsContainer}>
          <button
            type="button"
            onClick={() => {
              navigate("/admin");
            }}
          >
            <AiOutlineHome />
          </button>
          /
          <button
            type="button"
            onClick={() => {
              navigate("/admin/users");
            }}
          >
            Users
          </button>
          /
          <button type="button" className={cx.active}>
            Username
          </button>
        </Col>
        <div
          className={`d-flex flex-column justify-content-center align-items-center ${cx.userDetailsWrapper}`}
        >
          <Col md={12} sm={12}>
            <div className={`d-flex align-items-center ${cx.userInfo}`}>
              <div>
                <img
                  src={profile_icon}
                  height="100px"
                  width="100px"
                  style={{ borderRadius: "50px", marginRight: " 20px" }}
                />
              </div>
              <div className={cx.userDetails}>
                <h5>Anna Smith</h5>
                <p>Marketing Manager @ Sync Remote . New York, United States</p>
                <span>144 connections</span>
              </div>
            </div>
          </Col>
          <Col
            md={12}
            className={`d-flex justify-content-between gap-2 ${cx.userDescription}`}
          >
            <Col md={6} sm={12}>
              <div className={`${cx.aboutDetails} ${cx.userInfo}`}>
                <h4>Profile details</h4>

                <Listitem item={{ key: "Birthday", value: "12 Apr" }} />
                <Listitem item={{ key: "Country", value: "Canada" }} />
                <Listitem
                  item={{ key: "Contact No", value: "+91 82122 12121" }}
                />
                <p className={cx.detailsCategory}>Company details</p>
                <Listitem
                  item={{
                    key: "School/Company name",
                    value: "School/Company name",
                  }}
                />
                <Listitem
                  item={{ key: "Position", value: "School/Company names" }}
                />
                <p className={cx.detailsCategory}>Address details</p>
                <Listitem
                  item={{
                    key: "Address",
                    value: "Address",
                  }}
                />
                <Listitem item={{ key: "City", value: "City" }} />
                <Listitem item={{ key: "Postal Code", value: "Postal Code" }} />
              </div>
            </Col>
            <Col md={6} sm={12}>
              <div className={`${cx.aboutDetails}  ${cx.userInfo}`}>
                <h4>About</h4>
                <p>
                  As a Marketing Manager, I am a highly motivated and
                  results-driven professional with extensive experience in
                  developing and implementing successful marketing strategies. I
                  am skilled in identifying market trends and consumer behavior,
                  and I am dedicated to utilizing this knowledge to drive sales
                  and revenue growth.
                </p>
                <p>
                  I am committed to staying up-to-date with the latest industry
                  trends and continuously expanding my knowledge to create
                  innovative and effective marketing strategies. I am passionate
                  about achieving business objectives and exceeding
                  expectations, and I am confident in my ability to drive
                  success for any organization.
                </p>
                {/* <img src={BlogImage} alt="" width="100%" /> */}
              </div>
            </Col>
          </Col>
        </div>
      </div>
    </section>
  );
};

export default User;
