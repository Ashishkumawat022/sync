import { Col, Container, Row } from "react-bootstrap";
import cx from "./MapView.module.scss";
import {
  GridView,
  MapView2,
} from "../../../assets/images/index";
import ListItem from "./ListItem";
import { useEffect, useState } from "react";

import {
  ChooseAddress,
  FilterList,
} from "../../../components/Website/Modals";
import { NavLink } from "react-router-dom";
import MapContainer from "./MapContainer";
import CafeInfo from "./CafeInfo";
import { SearchFilter } from "../../../components/Website";

const MapView = () => {

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

      {showCafeList &&
<div className={`${cx.leftContainer}`}>
          <div className={cx.searchResult}>
            <p>Search results based on: </p>
            <h4>1800 Cedar Lane, Boston, Chelsea</h4>
            <hr/>
          </div> 
            <div className={cx.listContainer}>
              <ListItem handleCafeShow={handleCafeShow} handleListClose={handleListClose} />
              <ListItem handleCafeShow={handleCafeShow} handleListClose={handleListClose}/>
              <ListItem handleCafeShow={handleCafeShow} handleListClose={handleListClose}/>
            </div>
        </div>}

        {showCafeDetails && <div className={`${cx.leftContainer}`}>
          <CafeInfo handleCafeShow={handleCafeShow} handleListShow={handleListShow}/>
        </div>}

        <div className={cx.mapBody}>
          <div className={cx.mapBox}>
            <MapContainer />
          </div>
        </div>
      </div>


    </>
    
  );
};

export default MapView;
