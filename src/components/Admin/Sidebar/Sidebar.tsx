import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import cx from "./Sidebar.module.scss";
import { useContext, useState } from "react";
import GlobalContext from "../../../store/global-context";
import { Accordion, Button } from "react-bootstrap";
import {
  AiOutlineDashboard,
  AiOutlineFileText,
  AiOutlineShop,
} from "react-icons/ai";
import { logoWhite } from "../../../assets/images";
import { FaRegListAlt, FaTicketAlt } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";

const Sidebar = (props: any) => {
  const param = useLocation();
  const globalCtx = useContext(GlobalContext);
  const [reportsList, setReportsList] = useState(
    param.pathname.includes("reports")
  );
  const [inventoryList, setInventoryList] = useState(
    param.pathname.includes("inventory")
  );
  const [menuList, setMenuList] = useState(param.pathname.includes("menu"));
  const [manageList, setManageList] = useState(
    param.pathname.includes("manage")
  );

  return (
    <>
      <aside
        className={`${cx.sidebarBody} ${globalCtx.showMenu ? cx.show : ""}`}
      >
        <div
          className={`${cx.hideBg}`}
          onClick={() => {
            globalCtx.displayMenu(globalCtx.showMenu);
          }}
        ></div>
        <div className={`${cx.sidebarMain}`}>
          <div className={`${cx.logoBox}`}>
            <NavLink className={`${cx.navlogo}`} to="/">
              <img src={logoWhite} className={`${cx.logoIcon}`} alt="logo" />
            </NavLink>
          </div>

          <div className={`${cx.menuList}`}>
            <ul className={`${cx.scroll}`}>
              <li>
                <NavLink className={`${cx.signleMenu}`} to="/admin/">
                  <div className={`${cx.menuIcon}`}>
                    <AiOutlineDashboard className={`${cx.Icon}`} />
                  </div>
                  <div className={`${cx.menuName}`}>Dashboard</div>
                </NavLink>
              </li>
              <li>
                <NavLink className={`${cx.signleMenu}`} to="/admin/cafes">
                  <div className={`${cx.menuIcon}`}>
                    <AiOutlineShop className={`${cx.Icon}`} />
                  </div>
                  <div className={`${cx.menuName}`}>Cafes</div>
                </NavLink>
              </li>
              <li>
                <NavLink className={`${cx.signleMenu}`} to="/admin/users">
                  <div className={`${cx.menuIcon}`}>
                    <HiOutlineUserGroup className={`${cx.Icon}`} />
                  </div>
                  <div className={`${cx.menuName}`}>Users</div>
                </NavLink>
              </li>
              <li>
                <NavLink className={`${cx.signleMenu}`} to="/admin/blogs">
                  <div className={`${cx.menuIcon}`}>
                    <AiOutlineFileText className={`${cx.Icon}`} />
                  </div>
                  <div className={`${cx.menuName}`}>Blogs</div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
