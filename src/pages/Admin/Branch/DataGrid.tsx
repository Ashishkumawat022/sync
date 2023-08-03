import React, { useEffect, useState, Fragment } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
//import { useNavigate } from "react-router-dom";
import tb from "../../../assets/stylesheet/datatable.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { Status } from "../../../components/Admin/Forms";
import { DeletePopup } from "../../../components/Admin/Modals";

const StatusButton = (props: any) => {
  let { params } = props;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <ul className={`${tb.actionTable}`}>
          <li>
            <NavLink className={`btn ${tb.edit}`} title="Edit" to="#">
              <MdEdit />
            </NavLink>
          </li>
          <li>
            <button
              type="button"
              className={`btn ${tb.delete}`}
              title="Delete"
              onClick={handleShow}
            >
              <AiFillDelete />
            </button>
          </li>
        </ul>
      </div>

      <DeletePopup show={show} handleClose={handleClose} />
    </>
  );
};

const columns = [
  { field: "id", headerName: "Sr No", flex: 1, minWidth: 60 },
  { field: "name", headerName: "Coffeeshop Name", flex: 1, minWidth: 200 },
  { field: "country", headerName: "Country", flex: 1, minWidth: 120 },
  { field: "state", headerName: "State", flex: 1, minWidth: 150 },
  { field: "city", headerName: "City", flex: 1, minWidth: 150 },
  { field: "postalcode", headerName: "Postal Code", flex: 1, minWidth: 150 },
  { field: "address", headerName: "Address", flex: 1, minWidth: 150 },
  { field: "landmark", headerName: "Landmark", flex: 1, minWidth: 150 },
  {
    field: "action",
    headerName: "Action",
    flex: 1,
    minWidth: 200,
    renderCell: (params: any) => <StatusButton params={params} />,
  },
];

const row = [
  {
    id: 1,
    name: "Jaipuriya Branch",
    country: "india",
    state: "Rajasthan",
    city: "Jaipur",
    postalcode: "302020",
    address: "Mansarovar, Jaipur",
    landmark: "Office",
    action: "action",
  },
  {
    id: 2,
    name: "Jaipuriya Branch",
    country: "india",
    state: "Rajasthan",
    city: "Jaipur",
    postalcode: "302020",
    address: "Mansarovar, Jaipur",
    landmark: "Office",
    action: "action",
  },
  {
    id: 3,
    name: "Jaipuriya Branch",
    country: "india",
    state: "Rajasthan",
    city: "Jaipur",
    postalcode: "302020",
    address: "Mansarovar, Jaipur",
    landmark: "Office",
    action: "action",
  },
];

export default function UserDataGrid() {
  const navigate = useNavigate();
  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        columns={columns}
        rows={row}
        autoHeight
        hideFooterPagination={true}
        rowHeight={48}
        headerHeight={48}
        checkboxSelection
        disableSelectionOnClick
        components={{ Toolbar: GridToolbar }}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        onRowClick={() => {
          navigate("/admin/cafe-details");
        }}
      />
    </div>
  );
}
