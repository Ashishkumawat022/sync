import React, { useEffect, useState } from "react";
import m from "./Modal.module.scss";

import { Modal, Button, Row, Col, Form } from "react-bootstrap";

import { MdClose } from "react-icons/md";
import { EditProfileIcon } from "../../../assets/images";
import EditContactInformation from "./EditContactInformation";
import { NavLink } from "react-router-dom";


const ContactDetailsM= (props: any) => {
  let { contactshow, handlecontactClose } = props;

  
 
  const [editshow, setEditShow] = useState(false);
  const handleeditClose = () => setEditShow(false);
  const handleeditShow = () => setEditShow(true);

  return (
    <>
      <Modal
        centered
        scrollable
        show={contactshow}
        onHide={handlecontactClose}
        className={`${m.modalCts} ${m.modalMin}`}
      >
        <Modal.Header style={{ justifyContent: "left", alignItems: "center" }}>
          <Modal.Title>Anna Smith</Modal.Title>
          <button
            className={`${m.closeIcon}`}
            title="Close"
            onClick={handlecontactClose}
            style={{ right: "9px", top: "15px" }}
          >
            <MdClose />
          </button>
        </Modal.Header>
        <Modal.Body>
        <div className={`${m.formContact}`}>
                <div className={`${m.formBox}`}>
          <Row>
            <Col lg={12}>
                <div  className={`${m.contact_detail}`}>
              <h5>Contact Info</h5>
              <NavLink to="#"  onClick={()=>{handleeditShow()
              handlecontactClose()
              }}>
              <img src={EditProfileIcon} />
              </NavLink>
              </div>
              <div className={`${m.contact_user_detail}`}>
                <p>Email Address</p>
                <NavLink to="#" style={{textDecoration:"underline"}}>anna.smith@sync.co</NavLink>
                <p className="mt-2">Contact number</p>
                <NavLink to="#" style={{textDecoration:"underline"}}>+34 663 302 192</NavLink>
              </div>
                  
               
            </Col>
          
          
          </Row>
          </div>
              </div>
        </Modal.Body>
      </Modal>     
      
      <EditContactInformation editshow={editshow} handleeditClose={handleeditClose} />
    </>
  );
};

export default ContactDetailsM;
