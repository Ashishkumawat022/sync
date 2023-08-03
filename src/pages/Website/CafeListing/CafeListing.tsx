import { Col, Container, Row } from "react-bootstrap";
import cx from "./CafeListing.module.scss";
import {
  GridView,
  MapView2,
} from "../../../assets/images/index";
import { useEffect, useState } from "react";

import {
  ChooseAddress,
  FilterList,
} from "../../../components/Website/Modals";
import { NavLink } from "react-router-dom";
import { CoffeeShop, SearchFilter } from "../../../components/Website";
import MapContainer from "../MapView/MapContainer";
import { FaAngleLeft } from "react-icons/fa";

const CafeListing = () => {

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  

  const [isToggle, setIsToggle] = useState(false);
  const [showCafeDetails, setShowCafeDetails] = useState(false)
  const [showCafeList, setShowCafeList] = useState(true)
  const handleToggle = () => setIsToggle(!isToggle);
  const handleListClose = () => setShowCafeList(false);
  const handleListShow = () => setShowCafeList(true);
  const handleCafeShow = (status:boolean) => setShowCafeDetails(status)
  return (
    <>
    
      <SearchFilter />
      <div className={`${cx.mapViewSection}`}>

<div className={`${cx.leftContainer}`}>
          <div className={cx.searchResult}>
            <p>Search results based on: </p>
            <h4>1800 Cedar Lane, Boston, Chelsea</h4>
            <hr/>
          </div> 
            <div className={cx.listContainer}>
              <Row>
                <Col md={6} lg={6} xl={6} xxl={6}><CoffeeShop status="inactive" /></Col>
                <Col md={6} lg={6} xl={6} xxl={6}><CoffeeShop status="inactive" /></Col>
                <Col md={6} lg={6} xl={6} xxl={6}><CoffeeShop status="inactive" /></Col>
                <Col md={6} lg={6} xl={6} xxl={6}><CoffeeShop status="inactive" /></Col>
                <Col md={6} lg={6} xl={6} xxl={6}><CoffeeShop status="inactive" /></Col>
                <Col md={6} lg={6} xl={6} xxl={6}><CoffeeShop status="inactive" /></Col>
                <Col md={6} lg={6} xl={6} xxl={6}><CoffeeShop status="inactive" /></Col>
                <Col md={6} lg={6} xl={6} xxl={6}><CoffeeShop status="inactive" /></Col>
                <Col md={6} lg={6} xl={6} xxl={6}><CoffeeShop status="inactive" /></Col>
                <Col md={6} lg={6} xl={6} xxl={6}><CoffeeShop status="inactive" /></Col>
                <Col md={6} lg={6} xl={6} xxl={6}><CoffeeShop status="inactive" /></Col>
                <Col md={6} lg={6} xl={6} xxl={6}><CoffeeShop status="inactive" /></Col>
                <Col md={6} lg={6} xl={6} xxl={6}><CoffeeShop status="inactive" /></Col>
                <Col md={6} lg={6} xl={6} xxl={6}><CoffeeShop status="inactive" /></Col>
              </Row>
            </div>
        </div>


        <div className={cx.mapBody}>
          <div className={cx.mapBox}>
            <button className={cx.listShowBtn}>
              <FaAngleLeft /> <span>Show list</span>
            </button>
            <MapContainer />
          </div>
        </div>
      </div>


    </>
    
  );
};

export default CafeListing;
