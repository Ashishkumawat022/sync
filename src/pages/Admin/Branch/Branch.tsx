import React, { Fragment, useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import st from "../../../assets/stylesheet/AdminStyle.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./Branch.module.scss";
import table from "../../../assets/stylesheet/datatable.module.scss";
import {
  Card,
  Button,
  Row,
  Col,
  Modal,
  Form,
  Dropdown,
  Nav,
  Tab,
} from "react-bootstrap";

import DataGrid from "./DataGrid";
import DataGrid2 from "./DataGrid2";
import {
  AddBranch,
  AddCustomer,
  AddEmployee,
} from "../../../components/Admin/Modals";

export default function Branch() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [assignshow, setassignShow] = useState(false);
  const handleassignClose = () => setassignShow(false);
  const handleassignShow = () => setassignShow(true);

  return (
    <>
      <section className={`${st.pageWrapper}`}>
        <div className={`${st.pageTitle}`}>
          <div className={`${st.pageTitleRow}`}>
            <div className={`${st.rowTitleLeft}`}>
              <h5>Cafe List</h5>
            </div>
          </div>
        </div>
        <div className={`${st.pageWrapperInside}`}>
          <Card>
            <Card.Body>
              <div className={`${table.dataTable}`}>
                <DataGrid />
              </div>
            </Card.Body>
          </Card>
        </div>
      </section>

      <AddCustomer show={show} handleClose={handleClose} />
    </>
  );
}
