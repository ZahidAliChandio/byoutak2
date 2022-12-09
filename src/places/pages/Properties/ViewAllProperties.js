import React, { useState, useEffect } from "react";
// import axios from 'axios'

import DataTable from "../../components/UI/DataTable";
import Dialog from "../../components/UI/Dialog";
import BoxHeader from "../../components/UI/BoxHeader";
import Paginator from "../../components/UI/paginator";
import MainHeader from "../../components/Navigation/MainHeader";
import AdminCard from "../../components/UI/AdminCard";
// import { ATLAS_URI } from '../../Constants'
// import stateContext from '../../context/StateContext'

function ViewAllProperties() {
  // const contextState = useContext(stateContext)
  // const updateEditDetails = contextState.updateEditDetails
  // const { configToken } = contextState.state

  const [state, setState] = useState({
    tableBodyList: [],
    dialogInfo: {
      isOpened: false,
      text: "",
      type: "",
    },
  });

  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(20);
  // const mounted = React.useRef(true);
  // useEffect(() => () => { mounted.current = false; }, []);
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
    { id: "createdAt", label: "Sale Date", sorting: "desc" },
    { id: "contactJoined", label: "Contact Created" },
    { id: "productName", label: "Product Name" },
    { id: "productTag", label: "Product Tag" },
    { id: "recurring", label: "Recurring" },
    { id: "value", label: "Sale" },
    { id: "transactionType", label: "Transaction Type" },
    { id: "contactPhone", label: "Contact Phone#" },
    { id: "contactName", label: "Contact Name" },
    { id: "closerEmail", label: "Closer Email" },
    { id: "closerName", label: "Closer Name" },
  ]);

  return (
    <div>
      <MainHeader type="Properties" subtype="View All Properties" />
      <div className="content p-2">
        <AdminCard>
          <div className="content">
            <div className="row">
              <Dialog
                onFalse={(e) =>
                  setState((prevState) => ({
                    ...prevState,
                    dialogInfo: { isOpened: false, text: "" },
                  }))
                }
                onTrue={(e) => deleteFromTable(e)}
                dialogInfo={state.dialogInfo}
              />

              <div className="col-md-12">
                <div className="box box-primary">
                  <BoxHeader title="Properties List" />

                  <div className="h-fit rounded-lg bg-white mb-6 shadow-md">
                    <div>
                      <DataTable
                        // isLoading={loading}
                        tableHeadersData={tableHeaders}
                        setTableHeadersData={setTableHeaders}
                        tableBodyData={[]}
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
