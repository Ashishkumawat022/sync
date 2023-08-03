import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import cx from "./SearchFilter.module.scss";

import { Container, Form, Col, Row } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import {
  cWifi,
  cMultipleSockets,
  cQuietVibe,
  cBigTables,
  cOutsideDining,
  cSmallGroups,
  cLargeGroups,
  cFreeParking,
  cAcceptCards,
  cCashlessPayment,
  filterIcon,
  dropDownIcon,
  searchIcon,
  searchIconDark,
  MapView2,
  GridView,
} from "../../../assets/images";
import { ChooseAddress, SetDistanceM } from "../Modals";

const SearchFilter = (props: any) => {
  const options = {
    loop: false,
    items: 6,
    dots: false,
    nav: true,
    autoplay: false,
    navText: [
      `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path></svg>`,
      `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>`,
    ],
    responsive: {
      0: {
        items: 4,
      },
      480: {
        items: 4,
      },
      768: {
        items: 7,
      },
      992: {
        items: 7,
      },
      1200: {
        items: 11,
      },
    },
  };

  const [show, setShow] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  const [showCafeDetails, setShowCafeDetails] = useState(false)
  const [showCafeList, setShowCafeList] = useState(true)
  const handleToggle = () => setIsToggle(!isToggle);
  const handleListClose = () => setShowCafeList(false);
  const handleListShow = () => setShowCafeList(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCafeShow = (status:boolean) => setShowCafeDetails(status)


  
  const [distanceShow, setdistanceShow] = useState(false);
  const handledistanceShowClose = () => setdistanceShow(false);
  const handledistanceShowShow = () => setdistanceShow(true);

  return (
    <>
    
    <div className={`${cx.fixSpace}`}></div>
      <div className={`${cx.searchSection}`}>
        <Container fluid>
          <div className={`${cx.searchBar}`}>
            <div className={`${cx.textField}`}>
              <label>Location</label>
              <input type="text" className="form-control" placeholder="Search"  />
              <button onClick={handleShow} className={`${cx.arrowBtn}`}>
                <img src={dropDownIcon} />
              </button>
            </div>
            
            <div className={`${cx.textField} ${cx.distanceBox} ${cx.darkFont}`}>
              <label>Distance</label>
              <input type="text" className="form-control" placeholder="Set distance" value="Set distance"    onClick={ handledistanceShowShow}/>
            </div>

            <div className={`${cx.textField2}`}>
              <button className={`btn ${cx.submitBtn}`}>
                <img src={searchIconDark} /> <span>Search</span>
              </button>
            </div>
          </div>


          <div className={`${cx.carouselVisibility}`}>
            <div className={`${cx.visibility}`}>
              <label>Visibility</label>
              <ul>
                <li><button>All</button></li>
                <li><button>My friends</button></li>
              </ul>
            </div>
            <div className={`${cx.owlCtsCarsol}`}>

            <OwlCarousel className={`owl-theme`} {...options}>
              <div className="item">
                  <button className={`${cx.iconList}`}>
                    <img src={cWifi} />
                    <h6>Wifi</h6>
                  </button>
                </div>
              <div className="item">
                  <button className={`${cx.iconList}`}>
                      <img src={cMultipleSockets} />
                      <h6>Multiple Sockets</h6>
                    </button>
                </div>
              <div className="item">
                  <button className={`${cx.iconList}`}>
                      <img src={cQuietVibe} />
                      <h6>Quiet Vibes</h6>
                    </button>
                </div>
              <div className="item">
                  <button className={`${cx.iconList}`}>
                      <img src={cBigTables} />
                      <h6>Big Tables</h6>
                    </button>
                </div>
              <div className="item">
                  <button className={`${cx.iconList}`}>
                      <img src={cOutsideDining} />
                      <h6>Outside Dining</h6>
                    </button>
                </div>
              <div className="item">
                  <button className={`${cx.iconList}`}>
                      <img src={cSmallGroups} />
                      <h6>Small Groups</h6>
                    </button>
              </div>
              <div className="item">
              <button className={`${cx.iconList}`}>
                      <img src={cLargeGroups} />
                      <h6>Large Groups</h6>
                      </button>
              </div>
              <div className="item">
              <button className={`${cx.iconList}`}>
                      <img src={cFreeParking} />
                      <h6>Free Parking</h6>
                    </button>
              </div>

              <div className="item">
              <button className={`${cx.iconList}`}>
                      <img src={cAcceptCards} />
                      <h6>Accept Cards</h6>
                      </button>
              </div>

              <div className="item">
              <button className={`${cx.iconList}`}>
                      <img src={cCashlessPayment} />
                      <h6>Cashless Payment</h6>
                      </button>
              </div>

              <div className="item">
              <button className={`${cx.iconList}`}>
                      <img src={cWifi} />
                      <h6>Wifi</h6>
                      </button>
              </div>
              <div className="item">
                  <button className={`${cx.iconList}`}>
                      <img src={cMultipleSockets} />
                      <h6>Multiple Sockets</h6>
                    </button>
              </div>
              <div className="item">
                  <button className={`${cx.iconList}`}>
                      <img src={cQuietVibe} />
                      <h6>Quiet Vibes</h6>
                </button>
              </div>
              <div className="item">
                  <button className={`${cx.iconList}`}>
                      <img src={cBigTables} />
                      <h6>Big Tables</h6>
                      </button>
              </div>
              <div className="item">
                  <button className={`${cx.iconList}`}>
                      <img src={cOutsideDining} />
                      <h6>Outside Dining</h6>
                      </button>
              </div>
            </OwlCarousel>
            </div>
            </div>
        </Container>
      </div>

      
      <div className={`${cx.buttonSize}`}>
        <div className={`${cx.twoButton}`}>
          <NavLink to="/map-view" className={`${cx.viewBtn}`}>
            <img src={MapView2} />
            Map view
          </NavLink>
          <NavLink to="/cafe-listing" className={`${cx.viewBtn}`}>
            <img src={GridView} />
            Grid view
          </NavLink>
        </div>
      </div>


      <ChooseAddress show={show} handleClose={handleClose} />
      
      <SetDistanceM distanceShow={distanceShow} handledistanceShowClose={handledistanceShowClose}/>
    </>
  );
};

export default SearchFilter;
