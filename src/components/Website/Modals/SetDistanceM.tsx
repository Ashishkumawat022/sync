import React, { useEffect, useState } from "react";
import cx from "./Modal.module.scss";

import st from "../../../assets/stylesheet/style.module.scss";

import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import { Slider } from "@mui/material";

const SetDistanceM = (props: any) => {
  let { distanceShow, handledistanceShowClose } = props;

  return (
    <>
      <Modal
        centered
        show={distanceShow}
        onHide={handledistanceShowClose}
        className={`${cx.modalCts} ${cx.modalMin}`}
        aria-labelledby="example-modal-sizes-title-xl"
        size="xl"
      >
        <Modal.Header style={{ justifyContent: "Left", alignItems: "center" }}>
          <Modal.Title>Set distance</Modal.Title>
          <button
            className={`${cx.closeIcon}`}
            title="Close"
            onClick={handledistanceShowClose}
            style={{ top: "15px", right: "7px" }}
          >
            <MdClose />
          </button>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col lg={12}>
              <div className={`${cx.distanceBox}`}>
              <Form.Label  className={`${cx.setDistance} `}>
                <span>Within 10 miles</span>
                <span>200 miles</span>
                <span>300 miles</span>
                 </Form.Label>
              <Slider
                aria-label="Temperature"
                defaultValue={30}
                // getAriaValueText={valuetext}
                color="secondary"
                style={{color:"#738801"}}
              />
              </div>
            </Col>
            <Col lg={12}>
              <div className={` ${cx.btnSubmit} text-center mt-4`}>
                <button className={`btn ${st.btn2}`}>Confirm </button>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SetDistanceM;
