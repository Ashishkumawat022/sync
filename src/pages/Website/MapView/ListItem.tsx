import React, { useState } from "react";
import cx from "./Listitem.module.scss";
import {
  mapThumbnail,
  starIcon,
  upload,
  userProfile,
  PlayIcon,
  location,
  coffeeShop1,
  location2,
  reelPlay,
} from "../../../assets/images";
import { Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FriendListM, InstagramReel,  PinAddressM, PickupAddressM, ShareLocationM } from "../../../components/Website/Modals";


const ListItem = (props: any) => {

  
  const [locationshow, setlocationShow] = useState(false);
  const handlelocationClose = () => setlocationShow(false);
  const handlelocationShow = () => setlocationShow(true);
  
  const [friendshow, setfriendShow] = useState(false);
  const handlefriendClose = () => setfriendShow(false);
  const handlefriendShow = () => setfriendShow(true);
  
  const [searchshow, setsearchShow] = useState(false);
  const handlesearchClose = () => setsearchShow(false);
  const handlesearchShow = () => setsearchShow(true);

  const [instagramshow, setInstagramShow] = useState(false);
  const handleInstagramClose = () => setInstagramShow(false);
  const handleInstagramShow = () => setInstagramShow(true);

  const [toggle, setToggle] = useState(false);

  


  return (
    <>
      <div className={cx.cardListItem}>
        <div className={cx.listImage}>
          <img className={cx.imgBox} src={coffeeShop1} alt="" />
          <NavLink to="#" className={cx.playIcon} onClick={()=>handleInstagramShow()}><img src={reelPlay} /></NavLink>
          <div className={cx.overlay}>
            <NavLink to="#" className={`${cx.viewBtn} ${toggle===true ? cx.active : ""}`} onClick={()=>setToggle(!toggle)}><img src={toggle===true ? location2 : location} /></NavLink> 
            <svg className={cx.shape} viewBox="0 0 83 77" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0.0876543C1.02954 -0.0188502 2.27839 -0.0391463 3.6064 0.0876543H83C82.8333 28.5877 82.3 83.5876 81.5 75.5876C80.7 67.5876 72.8333 65.921 69 66.0876C57.8333 65.921 33.3 65.6876 24.5 66.0876C15.7 66.4876 14.1667 57.921 14.5 53.5876V10.5877C14.5 3.03254 8.5129 0.556137 3.6064 0.0876543H0Z" fill="#FEFCFC"/>
            </svg>
          </div>
        </div>
        <div className={cx.itemDetails}>
          <div>
            <div>
              <img src={starIcon} />
              <p>4.5 <span className={cx.reviewCount}>. (153 Reviews)</span></p>
            </div>
            <NavLink to="#" onClick={handlelocationShow}>
               <img src={upload} alt="" />
            </NavLink>
          </div>
          <div className={cx.itemDetailsTitle}>
            <h3>
              <NavLink to="/cafe-details">
              James Brews & Coffee
              </NavLink>
            </h3>
            <span>
              <NavLink to="/cafe-details">
              Greater Boston, Boston
              </NavLink>
            
              <li>15km</li>
              <li>
                <span style={{ color:'#45D6AD' }}>Open</span>
              </li>
            </span>
            {/* <div className={cx.profileIcons}>
              <ul>
                <li>
                  <img src={userProfile} alt="" />
                </li>
                <li>
                  <img src={userProfile} alt="" />
                </li>
                <li>
                  <img src={userProfile} alt="" />
                </li>
                <li>
                  <img src={userProfile} alt="" />
                </li>
                <li>
                  <span>+10</span>
                </li>
                <button onClick={handlefriendShow}>
                  Friends were here
                </button>
              </ul>
            </div> */}
          </div>
        </div>
      </div>

      <InstagramReel show={instagramshow} handleClose={handleInstagramClose} />

      <ShareLocationM locationshow={locationshow} handlelocationClose={handlelocationClose} />

      <FriendListM friendshow={friendshow} handlefriendClose={handlefriendClose} />
    </>
  );
};

export default ListItem;
