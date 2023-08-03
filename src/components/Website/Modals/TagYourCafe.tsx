import React, { useEffect, useState } from "react";
import m from "./Modal.module.scss";

import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import { FiSearch} from "react-icons/fi";
import {  coffeeShop1, upload_icon } from "../../../assets/images";

const TagYourCafe = (props: any) => {
  let { shows, handleCloses } = props;

  return (
    <>
      <Modal
        centered
        scrollable
        show={shows}
        onHide={handleCloses}
        className={`${m.modalCts} ${m.modalMin}`}
      >
        <Modal.Header style={{ justifyContent: "center" }}>
          <Modal.Title>Tag your cafe</Modal.Title>
          <button
            className={`${m.closeIcon}`}
            title="Close"
            onClick={handleCloses}
          >
            <MdClose />
          </button>
        </Modal.Header>
        <Modal.Body>
          <div className={`${m.formContact}`}>
            <div className={`${m.formBox}`}>
                                           
               <Row>
                <Col lg={12}>
                  <div className={`${m.tag_your_cafe}`}>

                    <div className={`${m.tag_your_cafe_search}`}>

                        <input type="search" placeholder="Search for cafe" />
                        <FiSearch className={`${m.cafe_search_icon}`}/>
                        <button>Done</button>
                    </div>


                    {/* TAGGED BADGE */}

                    <p>Tagged</p>
                    <div className={`${m.cafe_tagged_list}`}>
                        <p> <MdClose className={`${m.tagged_icon}`} />James Brews & Coffee</p>
                    </div>

                    <p>Suggestions</p>
                  

                    <div>
                        <div  className={`${m.tag_your_cafe_list}`}>
                            <img src={coffeeShop1}  />
                            <div className={`${m.tag_your_cafe_list_detail}`}>
                                <h3>James Brews & Coffee</h3>
                                <p>Greater Boston, Boston</p>
                            </div>
                        </div>
                        <div  className={`${m.tag_your_cafe_list}`}>
                            <img src={coffeeShop1}  />
                            <div className={`${m.tag_your_cafe_list_detail}`}>
                                <h3>Urban Coffee</h3>
                                <p>Greater Boston, Boston</p>
                            </div>
                        </div>
                        <div  className={`${m.tag_your_cafe_list}`}>
                            <img src={coffeeShop1}  />
                            <div className={`${m.tag_your_cafe_list_detail}`}>
                                <h3>Farina Pizzeria & Pasta</h3>
                                <p>Greater Boston, Boston</p>
                            </div>
                        </div>
                        <div  className={`${m.tag_your_cafe_list}`}>
                            <img src={coffeeShop1}  />
                            <div className={`${m.tag_your_cafe_list_detail}`}>
                                <h3>Farina Pizzeria & Pasta</h3>
                                <p>Greater Boston, Boston</p>
                            </div>
                        </div>
                    </div>
                    
                  </div>
                </Col>

              
              </Row>   



            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TagYourCafe;
