import React, { useEffect, useState } from "react";
import cx from "./Modal.module.scss";

import st from "../../../assets/stylesheet/style.module.scss";

import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import { InstaStory, PinSmall, mapImage, userProfile } from "../../../assets/images";
import MapContainer from "../../../pages/Website/MapView/MapContainer";
import SetDistanceM from "./SetDistanceM";

const PinAddressM = (props: any) => {
  let { pinshow, handlepinClose } = props;
  



  return (
    <>
      <Modal
        centered
        show={pinshow}
        onHide={handlepinClose}
        className={`${cx.modalCts} ${cx.modalMin}`}
        aria-labelledby="example-modal-sizes-title-xl"
        size="xl"
      >
        <Modal.Header style={{ justifyContent: "Left", alignItems: "center" }}>
          <Modal.Title>Pin your address on the map</Modal.Title>
          <button
            className={`${cx.closeIcon}`}
            title="Close"
            onClick={handlepinClose}
            style={{top:"15px",right:"7px"}}
          >
            <MdClose />
          </button>
        </Modal.Header>
        <Modal.Body style={{padding:"15px 15px"}}>
          <Col lg={12} className={cx.selectOnMap}>
          <div className={cx.mapView}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.38256273864!2d75.65046982658124!3d26.88544791782309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1681195962845!5m2!1sen!2sin" loading="lazy"></iframe>
          </div>
        <div className="d-flex mt-3">
          <div>
            <img src={PinSmall} alt="" />
          </div>
          <p>1800 Cedar Lane, Boston, Chelsea</p>
        </div>
      </Col>
      <Col lg={12}>
      <div className={` ${cx.btnSubmit} text-center mt-4`}>
              <button className={`btn ${st.btn2}`}  >Confirm address</button>
            </div>
            </Col>
        </Modal.Body>
      </Modal>
      
    </>
  );
};

export default PinAddressM;
