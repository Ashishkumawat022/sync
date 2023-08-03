import { MdClose } from "react-icons/md";
import st from "../../../assets/stylesheet/style.module.scss";

import cx from "./Modal.module.scss";
import { PinSmall } from "../../../assets/images";
import { Col, Modal } from "react-bootstrap";
import PickupAddressM from "./PickupAddressM";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const ChooseAddress = (props: any) => {
  let { show, handleClose } = props;
  
  const [locationshow, setlocationShow] = useState(false);
  const handlelocationClose = () => setlocationShow(false);
  const handlelocationShow = () => setlocationShow(true);
  return (
    <>
      <Modal
        centered
        scrollable
        show={show}
        aria-labelledby="example-modal-sizes-title-xl"
        size="xl"
        onHide={handleClose}
        className={`${cx.modalCts} ${cx.modalMin}`}
      >
        <Modal.Header
          style={{ justifyContent: "left", alignItems: "center" }}
        >
          <Modal.Title> Choose your address</Modal.Title>
          <button
            className={`${cx.closeIcon}`}
            title="Close"
            onClick={handleClose}
            style={{top:"15px",right:"7px"}}
          >
            <MdClose />
          </button>
        </Modal.Header>

        <Modal.Body style={{padding:"15px 15px"}}>

          <div className={` ${cx.friendlistContainer}`}>
            <div className={` ${cx.addresListContainer}`}>
              <div className={cx.addresListContainerInner}>
                <button
                  className={`d-flex flex-row  align-items-center ${cx.addressContainer} ${cx.active}`}
                >
                  <img src={PinSmall} alt="" />
                  <p>
                    3358 Jarvis Street, Buffalo, New York, 14216,United States
                    of America
                  </p>
                </button>

                <button
                  className={`d-flex flex-row  align-items-center ${cx.addressContainer}`}
                  disabled
                >
                  <img src={PinSmall} alt="" />
                  <p style={{color:"#BABABA"}}>
                    3358 Jarvis Street, Buffalo, New York, 14216,United States
                    of America
                  </p>
                </button>
              </div>
            </div>

            <div className={`${cx.addLocationBtn} text-center mt-4`}>

            
                <NavLink to="#"  onClick={()=>{handleClose() 
                handlelocationShow()}}> Add Another Address</NavLink>
            </div>
          </div>


        </Modal.Body>
      </Modal>

      <PickupAddressM locationshow={locationshow} handlelocationClose={handlelocationClose} />
    </>
  );
};

export default ChooseAddress;
