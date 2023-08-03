import React, { useEffect, useState } from "react";
import m from "./Modal.module.scss";
import st from "../../../assets/stylesheet/style.module.scss";

import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { Checkbox } from "@mantine/core";

const EditAboutM = (props: any) => {
  let { aboutshow, handleaboutClose } = props;

  return (
    <>
      <Modal
        centered
        scrollable
        show={aboutshow}
        onHide={handleaboutClose}
        className={`${m.modalCts} ${m.modalMin}`}
      >
        <Modal.Header style={{ justifyContent: "left", alignItems: "center" }}>
          <Modal.Title>Edit About</Modal.Title>
          <button
            className={`${m.closeIcon}`}
            title="Close"
            onClick={handleaboutClose}
            style={{ right: "9px", top: "15px" }}
          >
            <MdClose />
          </button>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col lg={12}>
              <div className={`${m.formContact}`}>
                <div className={`${m.formBox}`}>
                  <Form>
                    <Form.Group className="mb-4 position-relative">
                      <Form.Control
                        as="textarea"
                        placeholder="Type your message here"
                        rows={5}
                      />
                    </Form.Group>
                  </Form>
                </div>
              </div>
            </Col>
            <Col lg={12} className="text-end">
              <div className={` ${m.btnSubmit}`}>
                <button className={`btn ${st.btn2}`}>Save</button>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditAboutM;
