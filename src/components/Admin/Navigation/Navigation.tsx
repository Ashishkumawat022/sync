import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { headerClass } from "../../../constants/ui";
import cx from "./Navigation.module.scss";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";

export default function AdminNavigation() {
  let location = useLocation();
  return (
    <div className={`${cx.wrapper}`}>
      <Header />
      <Sidebar />
      <Outlet />
      <Footer />
    </div>
  );
}
