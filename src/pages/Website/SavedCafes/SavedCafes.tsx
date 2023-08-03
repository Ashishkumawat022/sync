import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import cx from "./SavedCafes.module.scss";
import st from "../../../assets/stylesheet/style.module.scss";


import { Container, Form, Col, Row } from "react-bootstrap";
import { nextIcon } from "../../../assets/images";
import { CoffeeShop } from "../../../components/Website";

import { IoIosArrowBack } from "react-icons/io";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const SavedCafes = (props: any) => {

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
                <h5>Saved Cafes</h5>
              </div>
            </Col>
            <Col md={4} lg={3} xl={3} xxl={3}><CoffeeShop status="saved" /></Col>
            <Col md={4} lg={3} xl={3} xxl={3}><CoffeeShop status="saved" /></Col>
            <Col md={4} lg={3} xl={3} xxl={3}><CoffeeShop status="saved" /></Col>
            <Col md={4} lg={3} xl={3} xxl={3}><CoffeeShop status="saved" /></Col>
          </Row>

        </Container>
      </section>
    </>
  );
};

export default SavedCafes;
