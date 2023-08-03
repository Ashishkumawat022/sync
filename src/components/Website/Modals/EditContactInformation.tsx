import React, { useEffect, useState } from "react";
import m from "./Modal.module.scss";
import st from "../../../assets/stylesheet/style.module.scss";

import { Modal, Button, Row, Col, Form } from "react-bootstrap";

import { MdClose } from "react-icons/md";

import PhoneNumber from "../PhoneNumber/PhoneNumber";

const EditContactInformation = (props: any) => {
  let { editshow, handleeditClose } = props;

  
  return (
    <>
      <Modal
        centered
        scrollable
        show={editshow}
        onHide={handleeditClose}
        className={`${m.modalCts} ${m.modalMin}`}
      >
        <Modal.Header style={{ justifyContent: "left", alignItems: "center" }}>
          <Modal.Title>Edit Contact Information</Modal.Title>
          <button
            className={`${m.closeIcon}`}
            title="Close"
            onClick={handleeditClose}
            style={{ right: "9px", top: "15px" }}
          >
            <MdClose />
          </button>
        </Modal.Header>
        <Modal.Body>
          <div className={`${m.formContact}`}>
            <div className={`${m.formBox}`}>
              <Form>
                <Row>
                  <Col lg={12}>
                    <Form.Group className="mb-4 position-relative">
                      <Form.Label>Phone Number*</Form.Label>
                      <PhoneNumber />
                    </Form.Group>
                  </Col>

                  <Col lg={12}>
                    <Form.Group className="mb-4 position-relative">
                      <Form.Label>Landline</Form.Label>
                      <Form.Control  className={`${m.removeArrow}`}
                        type="number"
                        placeholder="Type your landline number"
                      />
                    </Form.Group>
                  </Col>

                  <Col lg={12}>
                    <Form.Group className="mb-4 position-relative">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        as="textarea"
                        placeholder="Type your address here"
                        rows={4}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6}>
                    <Form.Group className="mb-4 position-relative">
                      <Form.Label>Birthday Month</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                  <Col lg={6}>
                    <Form.Group className="mb-4 position-relative">
                      <Form.Label>Day</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                  <Col lg={12} className="mb-4">
                    <h3>Website</h3>
                  </Col>
                  
                  <Col lg={12}>
                    <Form.Group className="mb-4 position-relative">
                      <Form.Label>Website</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>

                  <Col lg={12} className="mt-3">
                    <div className={`${m.btnSubmit} text-end`}>
                      <button className={`btn ${st.btn2}`} style={{ width:'auto' }}>Save</button>
                    </div>
                  </Col>

                </Row>
              </Form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditContactInformation;
