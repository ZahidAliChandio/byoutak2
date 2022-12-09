import React, { useState, useEffect, useContext } from "react";

// import {
//   deleteFromTable,
//   insertIntoTable,
//   editTableRow,
//   openDialog,
// } from "../../Helpers/TableHelpers";
// import { changeHandler } from "../../Helpers/ChangeHandler";
// import axios from "axios";
// import { ATLAS_URI } from "../../Constants";
// import stateContext from "../../context/StateContext";
import BoxHeader from "../../components/UI/BoxHeader";
import Dialog from "../../components/UI/Dialog";
import AdminCard from "../../components/UI/AdminCard";
import MainHeader from "../../components/Navigation/MainHeader";
import Input from "../../components/UI/Input";
import FormButton from "../../components/UI/FormButton";
import DataTable from "../../components/UI/DataTable";
import Paginator from "../../components/UI/paginator";

function AddAmenities() {
  //   const contextState = useContext(stateContext);
  //   const { configToken, operator } = contextState.state;

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

  //   const [state, setState] = useState({
  //     resetNewRow: {
  //       CreatedBy: operator.Username,
  //       Amenity: "",
  //     },
  //     newTableRow: {
  //       CreatedBy: operator.Username,
  //       Amenity: "",
  //     },
  //     tableBodyList: [],
  //     editingActivated: false,
  //     editingID: "",
  //     APIs: {
  //       AddData: "addAmenity",
  //       UpdateData: "updateAmenity",
  //       DeleteData: "deleteAmenity",
  //     },
  //     dialogInfo: {
  //       isOpened: false,
  //       text: "",
  //       type: "",
  //     },
  //   });

  //   const mounted = React.useRef(true);
  //   useEffect(
  //     () => () => {
  //       mounted.current = false;
  //     },
  //     []
  //   );
  //   useEffect(() => {
  //     axios
  //       .get(`${ATLAS_URI}/getAmenities/`, configToken)
  //       .then((response) => {
  //         const responseData = response.data;
  //         if (
  //           typeof responseData !== "undefined" &&
  //           responseData !== null &&
  //           mounted.current
  //         ) {
  //           setState({
  //             ...state,
  //             tableBodyList: responseData,
  //             newTableRow: state.resetNewRow,
  //           });
  //         }
  //       })
  //       .catch((err) => console.log(err));
  //   }, []);
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
    <section className="content">
      <MainHeader type="Masters" subtype="Add Amenity" />
      <div className="grid grid-cols-1 md:grid-cols-[2fr,3fr] gap-3 md:gap-5 w-full p-2">
        {/* {typeof state.dialogInfo !== 'undefined' &&
                    <Dialog
                        onFalse={(e) => setState(...state, { dialogInfo: { isOpened: false, text: "" } })}
                        onTrue={(e) => deleteFromTable(contextState, state, setState)}
                        dialogInfo={state.dialogInfo}
                    />} */}
        <AdminCard className="h-fit">
          <div className="box box-primary">
            {/* <BoxHeader
              title={`${state.editingActivated ? "Edit" : "Add"} Amenity`}
            /> */}
            <BoxHeader title="Add Amenity" />

            {/* <form onSubmit={(e) => insertIntoTable(e, contextState, state, setState)}> */}
            <form onSubmit={undefined} className="pt-2 px-2">
              <div className="box-body bozero">
                <div className="form-group">
                  <Input
                    label={"Name"}
                    name={"AmenityName"}
                    // value={state.newTableRow.PropertyTitle}
                    // onChange={changeHandler}
                    required
                  />
                </div>
              </div>
              <FormButton>Save</FormButton>
            </form>
          </div>
        </AdminCard>

        <AdminCard className="relative">
          <div className="box box-primary">
            <BoxHeader title="Added Amenities" />

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
                    <div className="absolute bottom-0 w-[-webkit-fill-available] z-50">
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
          </div>
        </AdminCard>
      </div>
    </section>
  );
}

export default AddAmenities;
