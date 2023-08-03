import React, { useEffect, useState } from "react";
import m from "./Modal.module.scss";
import st from "../../../assets/stylesheet/style.module.scss";

import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";
import EditContactInformation from "./EditContactInformation";
import { Checkbox } from "../Forms";

const EditinfoM = (props: any) => {
  let { show, handleClose } = props;
  
const [editshow, setEditShow] = useState(false);
const handleeditClose = () => setEditShow(false);
const handleeditShow = () => setEditShow(true);


  return (
    <>
      <Modal
        centered
        scrollable
        show={show}
        onHide={handleClose}
        className={`${m.modalCts} ${m.modalMin}`}
      >
        <Modal.Header style={{ justifyContent: "left", alignItems: "center" }}>
          <Modal.Title>Edit Intro</Modal.Title>
          <button
            className={`${m.closeIcon}`}
            title="Close"
            onClick={handleClose}
            style={{ right: "9px", top: "15px" }}
          >
            <MdClose />
          </button>
        </Modal.Header>
        <Modal.Body>
              <div className={`${m.formContact}`}>
                <p className="mb-4">* Answer required</p>
                <div className={`${m.formBox}`}>
                  <Form>
                    
                    <Form.Group className="mb-4 position-relative">
                      <Form.Label>First Name*</Form.Label>
                      <Form.Control type="type" placeholder="First Name*" />
                    </Form.Group>
                    
                    <Form.Group className="mb-4 position-relative">
                      <Form.Label>Last Name*</Form.Label>
                      <Form.Control type="type" placeholder="Surname*" />
                    </Form.Group>

                    <Form.Group className="mb-4 position-relative">
                      <Form.Label>Headline*</Form.Label>
                      <Form.Control type="type" placeholder="Headline*" />
                    </Form.Group>

                    {/* <Form.Group className="mb-4 position-relative">
                      <Form.Label>Gender Pronouns</Form.Label>
                      <Form.Select required>
                        <option value="">Select Item</option>
                        <option value="1">Option 1</option>
                      </Form.Select>
                    </Form.Group> */}

                    {/* <Form.Group className="mb-4 position-relative">
                        <Form.Control as="textarea" placeholder="Type your message here" rows={3} />
                      </Form.Group> */}

                    <h3>Company</h3>
                    <Form.Group className="mb-4 mt-4 position-relative">
                      <Form.Label>Company / School*</Form.Label>
                      <Form.Control type="type" placeholder="Type your company / school’s name*" />
                    </Form.Group>

                    <Form.Group className="mb-4 mt-4 position-relative">
                      <Form.Label>Position*</Form.Label>
                      <Form.Select required>
                        <option value="">Select Item</option>
                        <option value="1">Option 1</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-4 mt-4">
                    <label className={`${st.checkbox} ${m.checkboxLabel}`}>
                      <Checkbox /> Show current company position in my profile  
                    </label> 
                     </Form.Group>

                    <Form.Group className="mb-4 mt-4 position-relative">
                      <Form.Label>Industry*</Form.Label>
                      <Form.Select required>
                        <option value="">Select Item</option>
                        <option value="1">Option 1</option>
                      </Form.Select>
                    </Form.Group>

                    <h3>Education</h3>
                    <Form.Group className="mb-4 mt-4 position-relative">
                      <Form.Label>School*</Form.Label>
                      <Form.Select required>
                        <option value="">Type your school’s name</option>
                        <option value="1">School 1</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-4 mt-4">
                    <label className={`${st.checkbox} ${m.checkboxLabel}`}>
                      <Checkbox /> Show education in my intro   
                    </label> 
                    </Form.Group>

                    <h3>Location</h3>
                    <Form.Group className="mb-4 mt-3 position-relative">
                      <Form.Select required>
                        <option value="">Select Country / Region*</option>
                        <option value="India">India</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-4  position-relative">
                      <Form.Control type="number" placeholder="Postal Code"  className={`${m.removeArrow}`} />
                    </Form.Group>
                    <Form.Group className="mb-4  position-relative">
                      <Form.Select required>
                        <option value="">City</option>
                        <option value="1">Option 1</option>
                      </Form.Select>
                    </Form.Group>
                    <div className={` ${m.contactInfo}`}>
                      <h5>Contact info</h5>
                      <p>Add or edit your contact details, and more</p>
                      <NavLink to="#" onClick={()=>{handleeditShow()
                      handleClose()
                      }}>Edit contact information</NavLink>
                    </div>

                    
            <Col lg={12} className="mt-4 text-end">
              <div className={` ${m.btnSubmit}`}>
                <button className={`btn ${st.btn2}`}>Save</button>
              </div>
            </Col>
                  </Form>
                </div>
              </div>
         
        
        </Modal.Body>
      </Modal>
      
      <EditContactInformation editshow={editshow} handleeditClose={handleeditClose} />
    </>
  );
};

export default EditinfoM;
