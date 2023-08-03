import React, { useEffect, useState } from "react";
import m from "./Modal.module.scss";

import st from "../../../assets/stylesheet/style.module.scss";

import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import {
  InstaStory,
  PinSmall,
  dropDownIcon,
  mapImage,
  searchIcon,
  userProfile,
} from "../../../assets/images";
import PinAddressM from "./PinAddressM";
import { NavLink } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";

const PickupAddressM = (props: any) => {

  const [pinshow, setpinShow] = useState(false);
  const handlepinClose = () => setpinShow(false);
  const handlepinShow = () => setpinShow(true);

  const [showdropdown ,setshowdropdown]=useState(false);

  const showdropdownF =()=>{
    setshowdropdown(!showdropdown)
  }


  return (
    <>
      <Modal
        centered
        show={props.locationshow}
        onHide={props.handlelocationClose}
        className={`${m.modalCts} ${m.modalMin}`}
        aria-labelledby="example-modal-sizes-title-xl"
        size="xl"
      >
        <Modal.Header
          style={{ justifyContent: "left", alignItems: "center" }}
        >
          <Modal.Title>Add or search your address</Modal.Title>
          <button
            className={`${m.closeIcon}`}
            title="Close"
            onClick={props.handlelocationClose}
            style={{top:"15px",right:"7px"}}
          >
            <MdClose />
          </button>
        </Modal.Header>
        <Modal.Body style={{padding:"10px 10px"}}>
          <Row>
            <Col lg={12}>
              <div className={`${m.searchBar}`}>
                <div className={`${m.searchBarLarge}`}>
                 
                  <input
                    type="text"
                    placeholder="Search or start typing your location"
                    onClick={showdropdownF}
                  />
                  
                  <button>
                  <RiSearchLine/>
                  </button>

                  { showdropdown &&
                  <div className={`${m.searchBarLargeDropdown}`} >
                    <ul>
                      <li>123 Block, Chelsea, Boston, United States</li>
                      <li>Location address goes here</li>
                      <li>Location address goes here</li>
                      <li>123 Block, Chelsea, Boston, United States</li>
                      <li>Location address goes here</li>
                      <li>Location address goes here</li>
                     
                      <li>123 Block, Chelsea, Boston, United States</li>
                      <li>Location address goes here</li>
                      <li>Location address goes here</li>
                     
                    </ul>
                  </div>}
                  
                </div>
               
              </div>
            </Col>
            <Col lg={12}>
                
            <div className={`${m.addLocationBtn} text-center mt-4`}>
              <NavLink to="#"  onClick={()=>{
                props.handlelocationClose();
                handlepinShow();
              }}> Or set your location on the map </NavLink>

            </div>

            </Col>
          </Row>
        </Modal.Body>
      </Modal>
      <PinAddressM pinshow={pinshow} handlepinClose={handlepinClose} />
    </>
  );
};

export default PickupAddressM;
