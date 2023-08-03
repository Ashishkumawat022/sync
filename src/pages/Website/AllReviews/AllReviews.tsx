import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import cx from "./AllReviews.module.scss";
import st from "../../../assets/stylesheet/style.module.scss";


import { Container, Form, Col, Row } from "react-bootstrap";
import { coffeeShop1, location, Filled, location2 } from "../../../assets/images";
import { CoffeeShop, MyReviews } from "../../../components/Website";

import { BsStarFill } from "react-icons/bs";
import { AiTwotoneStar } from "react-icons/ai";


import { IoIosArrowBack } from "react-icons/io";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { HiPlus } from "react-icons/hi";

const AllReviews = (props: any) => {

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  
  return (
    <>
    <div className={`${cx.fixSpace}`}></div>
      
      <section className={`${cx.featuredSection}`}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={`${cx.savedCafe}`}>
                <div className={`${cx.backIcon}`}>
                    <NavLink to="#" >
                        <IoIosArrowBack/>
                        <span>Back to my profile</span>
                    </NavLink>
                </div>
                <h5>All Reviews</h5>
              </div>
              
            </Col>

            <Col lg={12} className={`${cx.blogFilter}`}>
              <ul>
                <p>Filter by:</p>
                <li className={`${cx.active}`}><button className={`${cx.actionBtn}`}>All</button></li>
                <li><button className={`${cx.actionBtn}`}>Recent</button></li>
                <li><button className={`${cx.actionBtn}`}>Later</button></li>
              </ul>
              <button className={`btn ${st.uploadBtn}`}><HiPlus/> Add <input type="file" /></button>
            </Col>

            <Col md={4} lg={3} xl={3} xxl={3}>
            <MyReviews status="inactive" />
            </Col>
            <Col md={4} lg={3} xl={3} xxl={3}>
            <MyReviews status="inactive" />
            </Col>
            <Col md={4} lg={3} xl={3} xxl={3}>
            <MyReviews status="inactive" />
            </Col>
            <Col md={4} lg={3} xl={3} xxl={3}>
            <MyReviews status="inactive" />
            </Col>
            <Col md={4} lg={3} xl={3} xxl={3}>
            <MyReviews status="inactive" />
            </Col>
            <Col md={4} lg={3} xl={3} xxl={3}>
            <MyReviews status="inactive" />
            </Col>
            <Col md={4} lg={3} xl={3} xxl={3}>
            <MyReviews status="inactive" />
            </Col>
            <Col md={4} lg={3} xl={3} xxl={3}>
            <MyReviews status="inactive" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AllReviews;
