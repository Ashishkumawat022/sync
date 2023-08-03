import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import cx from "./CafeDetails.module.scss";
import st from "../../../assets/stylesheet/style.module.scss";

import { Container, Form, Col, Row } from "react-bootstrap";
import {
  MdAddCall,
  MdOutlineAccessTime,
  MdOutlineChevronLeft,
  MdOutlineFileUpload,
  MdOutlineLocationOn,
  MdOutlineWifi,
} from "react-icons/md";
// images
import {
  socket,
  outside_dining,
  wifi,
  Small,
  large,
  table,
  Quite,
  Accessibility,
  free,
  time,
  number,
  menu,
  webbrowser,
  reviewImg,
  review_icon,
  coffeeShop1,
  previousIcon,
  nextIcon,
  location,
  location2,
  cafeImg,
  upload,
  cWifi,
  cAcceptCards,
  cBigTables,
  cCashlessPayment,
  cFreeParking,
  cLargeGroups,
  cQuietVibe,
  cOutsideDining,
  cSmallGroups,
  cMultipleSockets,
} from "../../../assets/images";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { BsFillStarFill, BsStarFill } from "react-icons/bs";

const LeaveReview = (props: any) => {

  
	const {status} = props
	const [cafeStatus,setCafeStatus] = useState<string>(status)
  const [reviewButtons, setReviewButtons] = useState<any>({
    step1: true,
    step2: false,
    step3:false
  })
  return (
    <>
<div className={` ${cx.contentBox}`}>

{reviewButtons.step1===true &&  <Row>
    <Col lg={12}>
      <div className={`${cx.contentHeading2}`}>
        <p>Leave a review</p>
        <h1>Have you worked here? Tell us how you like it!</h1>
      </div>
      <div className={`${cx.rating_btn}`}>
        <ul>
          <li>
            <button>1</button>
          </li>
          <li>
            <button>2</button>
          </li>
          <li>
            <button>3</button>
          </li>
          <li>
            <button>4</button>
          </li>
          <li>
            <button>5</button>
          </li>
        </ul>
        <p>From 1 (poor) to 5 (Excellent)</p>
      </div>
    </Col>
    <Col lg={12} className={`${cx.form_box}`}>
      <Form.Group className="text-center mt-2">
        <Form.Label className="mb-3">
          Anything you wanna add? (Optional)
        </Form.Label>
        <Form.Control
          type="text"
          as={"textarea"}
          rows={4}
          cols={10}
          placeholder="Type your message here"
        />
      </Form.Group>
    </Col>
    <Col lg={12} className={`text-center mt-4`}>
      <button className={`btn ${st.btn2}`} style={{ width:'100%' }} onClick={()=>{
        setReviewButtons((prev:any)=>{
          return {...prev, step1:false, step2:true}
        })
      }}>Submit</button>
    </Col>
  </Row>}

  
 {reviewButtons.step2===true && <Row>
    <Col lg={12}>
      <div className={`${cx.contentHeading2}`}>
        <p>Leave a review</p>
        <h1>Tell us a bit more!</h1>
      </div>

      <div className={`${cx.ratingBox}`}>
        <p>How was the WiFi quality?</p>
        <div className={`${cx.ratingStar}`}>
          <button className={`${cx.active}`}><BsFillStarFill /></button>
          <button><BsFillStarFill /></button>
          <button><BsFillStarFill /></button>
          <button><BsFillStarFill /></button>
          <button><BsFillStarFill /></button>
        </div>
      </div>
      
      <div className={`${cx.ratingBox}`}>
        <p>How was the outlet availability?</p>
        <div className={`${cx.ratingStar}`}>
          <button className={`${cx.active}`}><BsFillStarFill /></button>
          <button><BsFillStarFill /></button>
          <button><BsFillStarFill /></button>
          <button><BsFillStarFill /></button>
          <button><BsFillStarFill /></button>
        </div>
      </div>
      
      <div className={`${cx.ratingBox}`}>
        <p>How would you rate the overall atmosphere?</p>
        <div className={`${cx.ratingStar}`}>
          <button className={`${cx.active}`}><BsFillStarFill /></button>
          <button><BsFillStarFill /></button>
          <button><BsFillStarFill /></button>
          <button><BsFillStarFill /></button>
          <button><BsFillStarFill /></button>
        </div>
      </div>
    </Col>
    <Col lg={12} className={`text-center mt-5`}>
      <button className={`btn ${st.btn2}`} style={{ width:'100%' }} onClick={()=>{
        setReviewButtons((prev:any)=>{
          return {...prev, step2:false, step3:true}
        })
      }}>Submit</button>
    </Col>
  </Row>}

  
 {reviewButtons.step3===true && <Row>
    <Col lg={12}>
      <div className={`${cx.contentHeading2} mt-5`}>
        <h1>🎉  <br/>Your review has been added. <br/>Thank you!</h1>
      </div>
    </Col>
    <Col lg={12} className={`text-center mt-5`}>
      <button className={`btn ${st.btn2}`} style={{ width:'100%' }}>Recommend to friends</button>
    </Col>
  </Row>}

</div>
           
    </>
  );
};

export default LeaveReview;
