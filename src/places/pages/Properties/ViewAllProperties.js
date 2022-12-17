import React, { useState, useEffect } from "react";
// import axios from 'axios'

import DataTable from "../../components/UI/DataTable";
import Dialog from "../../components/UI/Dialog";
import BoxHeader from "../../components/UI/BoxHeader";
import Paginator from "../../components/UI/paginator";
import MainHeader from "../../components/Navigation/MainHeader";
import AdminCard from "../../components/UI/AdminCard";
import http from "../../../utils/http";
import toast from "react-hot-toast";

function ViewAllProperties() {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [tableBodyList, setTableBodyList] = useState([]);
  const [count, setCount] = useState(0);

  const getProperties = () => {
    http.get(`${process.env.REACT_APP_ATLAS_URI}/getProperties/`, {
      params: {
        page: page + 1,
        limit: limit,
      },
    })
      .then((response) => {
        const data = response.data
        if (response.status === 200) {
          setTableBodyList(data);
          setCount(response?.data?.count);
          setLoading(false);
        } else toast.error(response?.data?.error?.message);
      })
      .catch((err) => toast.error(err.message));
  };
  useEffect(() => {
    getProperties();
  }, [page, limit]);

  useEffect(() => {
    // console.log("mounted")
    // axios.get(`${ATLAS_URI}/getProperties/`, configToken)
    //     .then(response => {
    //         const propertiesData = response.data;
    //         if (typeof propertiesData !== 'undefined' && mounted.current) {
    //             setState(prevState => ({
    //                 ...prevState,
    //                 tableBodyList: propertiesData
    //             }))
    //         }
    //     }).catch(err => console.log(err))
  }, []);

  function editRecord(e) {
    // const temp = e.target.parentElement.parentElement.id;
    // updateEditDetails({ id: temp, editingActivated: true, redirectFrom: "/Properties/viewAllProperties", redirectTo: "/Properties/addNewProperty" });
  }

  function openDialog(e) {
    // const newDialogInfo = {
    //     isOpened: true,
    //     delID: e.target.parentElement.parentElement.id,
    //     text: "Are you sure you want to delete this Property?",
    //     type: "Confirm"
    // }
    // setState(prevState => ({ ...prevState, dialogInfo: newDialogInfo }))
  }

  function deleteFromTable(e) {
    // const delID = state.dialogInfo.delID;
    // console.log(state.tableBodyList)
    // axios.delete(`${ATLAS_URI}/deleteProperty/` + delID, configToken)
    //     .then(() => {
    //         state.tableBodyList.filter(data => data.id.toString() === delID)[0].Images.forEach((image) => {
    //             axios.delete(`${ATLAS_URI}/file/${image}`, configToken);
    //         })
    //         const newTableBodyList = state.tableBodyList.filter(data => data.id.toString() !== delID);
    //         setState(prevState => ({
    //             ...prevState,
    //             tableBodyList: newTableBodyList,
    //             dialogInfo: { isOpened: false, text: "", delID: "" }
    //         }))
    //     })
    //     .catch(err => alert(err))
  }

  const [tableHeaders, setTableHeaders] = useState([
    { id: "_id", label: "ID" },
    { id: "Name", label: "Name" },
    { id: "Type", label: "Type" },
    { id: "Description", label: "Description" },
    { id: "Address", label: "Address" },
    { id: "_Amenities", label: "Amenities", component: (data, setData) => { return <>{data._Amenities.map(x => <>{x.Name}<br /></>)}</> } },
    // { id: "Unit_PropertyType", label: "Units", component: (data, setData) => { return <>{data.Unit_PropertyType.map(x => <>{x.Name}<br /></>)}</> } },\
  ]);

  return (
    <div>
      <MainHeader type="Properties" subtype="View All Properties" />
      <div className="content p-2">
        <AdminCard>
          <div className="content">
            <div className="row">
              <div className="col-md-12">
                <div className="box box-primary">
                  <BoxHeader title="Properties List" />

                  <div className="h-fit rounded-lg bg-white mb-6 shadow-md">
                    <div>
                      <DataTable
                        // isLoading={loading}
                        tableHeadersData={tableHeaders}
                        setTableHeadersData={setTableHeaders}
                        tableBodyData={tableBodyList}
                      />
                    </div>
                  </div>
                  <div className="fixed bottom-0 w-[-webkit-fill-available] z-50">
                    <Paginator
                      page={page}
                      setPage={setPage}
                      limit={limit}
                      setLimit={setLimit}
                      total={0}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AdminCard>
      </div>
    </div>
  );
}

export default ViewAllProperties;
