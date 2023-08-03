import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import cx from "./Blog.module.scss";
import st from "../../../assets/stylesheet/style.module.scss";

import { Container, Form, Col, Row, Button } from "react-bootstrap";
import { ContactHeader } from "../../../assets/images";
import { Boy } from "../../../assets/images";
import { Gril } from "../../../assets/images";

import { Blog } from "../../../components/Website";

const BlogPage = (props: any) => {

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  
  return (
    <>
      <section className={`${cx.featuredSection} ${st.sectionPaddingBottom}`}>
        <Container>
          <Col lg={12} className={`${cx.borderBottom}`}>
            <h2 className={`${st.heading}`}>Blog </h2>
          </Col>
          <Col lg={12} className={`${cx.blogFilter}`}>
            <ul>
              <p>Filter by:</p>
              <li className={`${cx.active}`}><button className={`${cx.actionBtn}`}>All</button></li>
              <li><button className={`${cx.actionBtn}`}>Recent</button></li>
            </ul>
          </Col>
          <Row>
            <Col md={4} lg={3} xl={3} xxl={3}><Blog /></Col>
            <Col md={4} lg={3} xl={3} xxl={3}><Blog /></Col>
            <Col md={4} lg={3} xl={3} xxl={3}><Blog /></Col>
            <Col md={4} lg={3} xl={3} xxl={3}><Blog /></Col>
            <Col md={4} lg={3} xl={3} xxl={3}><Blog /></Col>
            <Col md={4} lg={3} xl={3} xxl={3}><Blog /></Col>
            <Col md={4} lg={3} xl={3} xxl={3}><Blog /></Col>
            <Col md={4} lg={3} xl={3} xxl={3}><Blog /></Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BlogPage;
