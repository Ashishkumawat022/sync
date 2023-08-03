import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import cx from "./Header.module.scss";
import { FiMenu } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useScrollHandler } from '../../../hooks/use-scroll'
import "bootstrap/dist/css/bootstrap.min.css";
import { Logo,  profileImg, profile_icon } from "../../../assets/images";
import { Login } from "../Modals";
import { MdOutlineClose } from "react-icons/md";

interface headerMain {
  showHeaderClass?:string
}
export default function Header(props:headerMain) {

const [showLogin, setLoginShow] = useState(false);
const handleLoginClose = () => setLoginShow(false);
const handleLoginShow = () => setLoginShow(true);

let {showHeaderClass} = props
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <>
      <header className={`${cx.main_header}  ${scroll ? cx.affix:""} ${showHeaderClass}`} >
        <Navbar className={`navbar navbar-expand-lg ${cx.ak_menu}`}>
          <div className={`${cx.mobile_topbar}`}></div>
          <Container fluid>
            <NavLink className="navbar-brand" to="/">
              <img src={Logo} className={` ${cx.logo}`} />
            </NavLink>

            <button className={`navbar-toggler ${cx.mobile_menu}`} onClick={handleShow}>
              <FiMenu />
            </button>
            <Navbar.Collapse id="basic-navbar-nav"
              className={` ${show && cx.slide_effect}`}
            >
              <div className={`${cx.menu_box}`}>
                <div className={`${cx.mobile_logo}`}>
                <NavLink to="/">
                  <img src={Logo} className={` ${cx.logo}`} />
                </NavLink>
                  <button className={`${cx.mobile_close}`} onClick={handleClose}>
                    <MdOutlineClose />
                  </button>
                </div>
                <Nav className="navbar-nav float-start">
                  <li className="nav-item">
                    <NavLink to="/cafe-listing" onClick={handleClose}>Places</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/map-view" onClick={handleClose}>My Map</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/people" onClick={handleClose}>People</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/blog" onClick={handleClose}>Blog</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/about-us" onClick={handleClose}>About</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/contact-us" onClick={handleClose}>Contact us</NavLink>
                  </li>
                </Nav>
                <Nav className="navbar-nav float-end">
                  <li className="nav-item">
                    <NavLink to="/cafe-form" onClick={handleClose}>Recommend</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/cafe-owner" onClick={handleClose}>For Business</NavLink>
                  </li>
                  <li className="nav-item">
                  </li>
                  {/* <li className={`nav-item ${cx.mobileBtns}  ${cx.loginBtns}`}>
                    <NavLink to="#" className="btn" onClick={handleLoginShow}>Login</NavLink>
                    <NavLink to="#" className={`btn2 ${cx.mobileShowing}`} onClick={handleLoginShow}>Signup</NavLink>
                  </li> */}

                  {/* After Login */}
                  <li className={`nav-item ${cx.mobileBtns}`}>
                    <NavLink to="/my-profile" className="btn">My Profile</NavLink>
                    <NavLink to="#" className={`btn2 ${cx.mobileShowing}`} onClick={handleClose}>Log out</NavLink>
                  </li>

                  <li>
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <div className={`${cx.imgUser}`}><img src={profile_icon} /></div>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <ul>
                          <li><NavLink to="/my-profile" onClick={handleClose}>My Profile</NavLink></li>
                          <li><NavLink to="/saved-cafes" onClick={handleClose}>Saved Cafes</NavLink></li>
                          <li><NavLink to="/notifications" onClick={handleClose}>Notifications</NavLink></li>
                          <li><NavLink to="/edit-account" onClick={handleClose}>Account Settings</NavLink></li>
                          <li><NavLink to="/" onClick={handleClose}>Logout</NavLink></li>
                        </ul>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li> 
                </Nav>
              </div>

              <div className={`${cx.hide_box} ${cx.mobile_close}`} onClick={handleClose}></div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>


      <Login showLogin={showLogin} handleLoginClose={handleLoginClose} handleLoginShow={handleLoginShow}/> 
    </>
  );
}
