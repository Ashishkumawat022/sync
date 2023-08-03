import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import cx from "./Photos.module.scss";
import st from "../../../assets/stylesheet/style.module.scss";


import { Container, Form, Col, Row } from "react-bootstrap";
import { coffeeShop1, location, Filled, location2 } from "../../../assets/images";
import { CoffeeShop } from "../../../components/Website";

import { HiPlus } from "react-icons/hi";
import { AiTwotoneStar } from "react-icons/ai";


import { Photo1, Photo2, Photo3, Photo4, Photo5, Photo6, Photo7, Photo8, Photo9, Photo10, Photo11, Photo12, Photo13, Photo14, Photo15, } from "../../../assets/images";


import { IoIosArrowBack } from "react-icons/io";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { TagYourCafe, UploadPhoto } from "../../../components/Website/Modals";

const Photos = (props: any) => {

    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
      
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <div className={`${cx.fixSpace}`}></div>
      
      <section className={`${cx.featuredSection}`}>
        <Container>
            <div className={`${cx.photoSection}`}>
              <Col lg={12}>
                  <div className={`${cx.photoHeading}`}>
                      <h3>Photos</h3>
                      <div className={`${cx.addPhoto}`}>
                        <button className={`btn ${st.uploadBtn}`} onClick={handleShow}><HiPlus/> Add Photos
                         {/* <input type="file" /> */}
                         </button>
                      </div>
                  </div>
              </Col>
              <Row xs={3} md={5} lg={5}>
                <Col className={`p-0 ${cx.imgSize}`}>
                    <div className={`${cx.photoImg}`}>
                        <img src={Photo1} />
                    </div>
                </Col>
                <Col className={`p-0 ${cx.imgSize}`}>
                    <div className={`${cx.photoImg}`}>
                        <img src={Photo2} />
                    </div>
                </Col>
                <Col className={`p-0 ${cx.imgSize}`}>
                    <div className={`${cx.photoImg}`}>
                        <img src={Photo3} />
                    </div>
                </Col>
                <Col className={`p-0 ${cx.imgSize}`}>
                    <div className={`${cx.photoImg}`}>
                        <img src={Photo4} />
                    </div>
                </Col>
                <Col className={`p-0 ${cx.imgSize}`}>
                    <div className={`${cx.photoImg}`}>
                        <img src={Photo5} />
                    </div>
                </Col>
                <Col className={`p-0 ${cx.imgSize}`}>
                    <div className={`${cx.photoImg}`}>
                        <img src={Photo6} />
                    </div>
                </Col>
                <Col className={`p-0 ${cx.imgSize}`}>
                    <div className={`${cx.photoImg}`}>
                        <img src={Photo7} />
                    </div>
                </Col>
                <Col className={`p-0 ${cx.imgSize}`}>
                    <div className={`${cx.photoImg}`}>
                        <img src={Photo8} />
                    </div>
                </Col>
                <Col className={`p-0 ${cx.imgSize}`}>
                    <div className={`${cx.photoImg}`}>
                        <img src={Photo9} />
                    </div>
                </Col>
                <Col className={`p-0 ${cx.imgSize}`}>
                    <div className={`${cx.photoImg}`}>
                        <img src={Photo10} />
                    </div>
                </Col>
                <Col className={`p-0 ${cx.imgSize}`}>
                    <div className={`${cx.photoImg}`}>
                        <img src={Photo11} />
                    </div>
                </Col>
                <Col className={`p-0 ${cx.imgSize}`}>
                    <div className={`${cx.photoImg}`}>
                        <img src={Photo12} />
                    </div>
                </Col>
                <Col className={`p-0 ${cx.imgSize}`}>
                    <div className={`${cx.photoImg}`}>
                        <img src={Photo13} />
                    </div>
                </Col>
                <Col className={`p-0 ${cx.imgSize}`}>
                    <div className={`${cx.photoImg}`}>
                        <img src={Photo14} />
                    </div>
                </Col>
                <Col className={`p-0 ${cx.imgSize}`}>
                    <div className={`${cx.photoImg}`}>
                        <img src={Photo15} />
                    </div>
                </Col>
              </Row>
            </div>
        </Container>
      </section>
      <UploadPhoto show={show} handleClose={handleClose} />
    </>
  );
};

export default Photos;
