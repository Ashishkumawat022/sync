import React, { useState } from "react";
import st from "../../../assets/stylesheet/AdminStyle.module.scss";
import { Card } from "react-bootstrap";
import { AddCustomer } from "../../../components/Admin/Modals";
import UserDataGrid from "./DataGrid";
import table from "../../../assets/stylesheet/datatable.module.scss";
import { AiOutlineFileAdd } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Blogs() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  return (
    <>
      <section className={`${st.pageWrapper}`}>
        <div className={`${st.pageTitle}`}>
          <div className={`${st.pageTitleRow}`}>
            <div className={`${st.rowTitleLeft}`}>
              <h5>Blogs List</h5>
            </div>
            <div className={`${st.rowTitleRight}`}>
              <button
                className={`btn ${st.themeBtn}`}
                onClick={() => {
                  navigate("/admin/add-blog");
                }}
              >
                <AiOutlineFileAdd className={st.icon} />
                Add New Blog
              </button>
            </div>
          </div>
        </div>

        <div className={`${st.pageWrapperInside}`}>
          <Card>
            <Card.Body>
              <div className={`${table.dataTable}`}>
                <UserDataGrid />
              </div>
            </Card.Body>
          </Card>
        </div>
      </section>

      <AddCustomer show={show} handleClose={handleClose} />
    </>
  );
}
