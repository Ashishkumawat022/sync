import React, { Fragment, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { headerClass } from "../../../constants/ui";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import cx from "./Navigation.module.scss";

export default function Navigation() {
    const hideFooter = window.location.pathname.includes("/map-view") || window.location.pathname.includes("/cafe-register") || window.location.pathname.includes("/cafe-listing");
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    let location = useLocation();
    console.log(window.location.href, location.pathname.length, "useNavigate");
    return (
      <div className={`${cx.wrapper}`}>
        {location.pathname.length === 1 || window.location.pathname.includes("/cafe-register") ? (
          <Header />
        ) : (
          <Header showHeaderClass="headerInner" />
        )}
        <div className={hideFooter ? "" : cx.mainBody}>
            <Outlet />
        </div>
        {!hideFooter && <Footer />}
      </div>
    );
  }