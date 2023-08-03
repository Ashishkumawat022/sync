import React, { useEffect, useState } from "react";
import m from "./Modal.module.scss";
import st from "../../../assets/stylesheet/style.module.scss";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import { Photo11, Photo4, TagCafe, upload_icon } from "../../../assets/images";
import { NavLink } from "react-router-dom";
import TagYourCafe from "./TagYourCafe";

const UploadBanner = (props: any) => {
  let { uploadimageshow, handleUploadimageClose } = props;

  
  const [shows, setShows] = useState(false);
  const handleCloses = () => setShows(false);
  const handleShows = () => setShows(true);

  return (
    <>
      <Modal
        centered
        scrollable
        show={uploadimageshow}
        onHide={handleUploadimageClose}
        className={`${m.modalCts} ${m.modalMin}`}
      >
        <Modal.Header style={{ justifyContent: "center" }}>
          <Modal.Title>Upload Photo</Modal.Title>
          <button
            className={`${m.closeIcon}`}
            title="Close"
            onClick={handleUploadimageClose}
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
                    <p>Drag and drop an image, or <span style={{ marginLeft:'1px' }}>Browse</span></p>
                    </div>
                  </div>
                </Col>

               
                <Col lg={12} className="mt-4 text-end">
                  <div className={` ${m.btnSubmit}`}>
                    <button className={`btn ${st.btn2} ${st.active}`}>Upload</button>
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

export default UploadBanner;
