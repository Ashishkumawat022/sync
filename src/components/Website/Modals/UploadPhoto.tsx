import React, { useEffect, useState } from "react";
import m from "./Modal.module.scss";
import st from "../../../assets/stylesheet/style.module.scss";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import { Photo11, Photo4, TagCafe, upload_icon } from "../../../assets/images";
import { NavLink } from "react-router-dom";
import TagYourCafe from "./TagYourCafe";

const UploadPhoto = (props: any) => {
  let { show, handleClose } = props;

  
  const [shows, setShows] = useState(false);
  const handleCloses = () => setShows(false);
  const handleShows = () => setShows(true);

  return (
    <>
      <Modal
        centered
        scrollable
        show={show}
        onHide={handleClose}
        className={`${m.modalCts} ${m.modalMin}`}
      >
        <Modal.Header style={{ justifyContent: "center" }}>
          <Modal.Title>Upload Photo</Modal.Title>
          <button
            className={`${m.closeIcon}`}
            title="Close"
            onClick={handleClose}
          >
            <MdClose />
          </button>
        </Modal.Header>
        <Modal.Body>
          <div className={`${m.formContact}`}>
            <div className={`${m.formBox}`}>
              <Row>
                <Col lg={12}>
                  <div className={`${m.upload_profile}`} >
                    <div className={`${m.upload_profile_icon} position-relative`}>
                    <img src={upload_icon} className="mb-3" />
                    <input type="file" />
                    <p>Drag and drop an image, or  <span>  Browse</span></p>
                    </div>
                  </div>
                </Col>

                <Col lg={12} className="mt-3">
               
                    <Form.Group>
                        <Form.Control as="textarea" placeholder="Write something about your post" className="border-0" rows={3} />
                      </Form.Group> 
                   
                    </Col>



                <Col lg={12} className="mt-4">
               
                    <div className={` ${m.tagged_btn}`}>
                     
                      <NavLink to="#" 
                      onClick={handleShows}
                      >
                        <p>Tag your cafe</p>
                        
                      <img src={TagCafe} className={`${m.cafe_tages} `}/>
                    </NavLink>
                    </div>
                    </Col>
                <Col lg={12} className="mt-4 text-end">
                  <div className={` ${m.btnSubmit}`}>
                    <button className={`btn ${st.btn2}`}>Post</button>
                  </div>
                </Col>
              </Row>   



              {/* after upload photo */}

               {/* <Row>
                <Col lg={12}>
                  <div className={`${m.upload_profile_after}`}>
                    <div
                      className={`${m.upload_profile_image} position-relative`}
                    >
                      <img src={Photo11} />
                      <button className={`${m.closeimgIcon}`}>
                        <MdClose />
                      </button>  */}

                      {/* tagged badge */}
                      {/* 
                      <div className={`${m.cafe_tagged_list}`}>
                        <p> James Brews & Coffee</p>
                      </div> */}
                       {/* <p>
                        I really like this fancy cafe where I’ve been working
                        since last week! Cool interior! The wifi speed is
                        amazing too!
                      </p>
                    </div>
                  </div>
                </Col>

                 <Col lg={12} className="mt-4">
               
                    <div className={` ${m.tagged_btn}`}>
                     
                      <NavLink to="#" 
                      onClick={handleShows}
                      >
                        <p>Tag your cafe</p>
                      <img src={TagCafe} className={`${m.cafe_tages} `}/>
                    </NavLink>
                    </div>
                    </Col>
                <Col lg={12} className="mt-4 text-end">
                  <div className={` ${m.btnSubmit}`}>
                    <button className={`btn ${st.btn2}`}>Post</button>
                  </div>
                </Col>
              </Row>  */}

            </div>
          </div>
        </Modal.Body>
      </Modal>
      
      <TagYourCafe shows={shows} handleCloses={handleCloses} />
    </>
  );
};

export default UploadPhoto;
