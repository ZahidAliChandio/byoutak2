import React, { useState } from "react";

import BoxHeader from "../../components/UI/BoxHeader";
import Dialog from "../../components/UI/Dialog";
import AdminCard from "../../components/UI/AdminCard";
import MainHeader from "../../components/Navigation/MainHeader";
import Input from "../../components/UI/Input";
import FormButton from "../../components/UI/FormButton";
import DataTable from "../../components/UI/DataTable";
import Paginator from "../../components/UI/paginator";
import { useForm } from "../../hooks/form-hook";

function AddAmenities() {
  const [state, setState] = useState({
    tableBodyList: [],
    dialogInfo: {
      isOpened: false,
      text: "",
      type: "",
    },
  });

  const [formState, inputHandler] = useForm({
    name: "",
  });

  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(20);

  function deleteFromTable(e) {}
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

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <section className="content">
      <MainHeader type="Masters" subtype="Add Amenity" />
      <div className="grid grid-cols-1 md:grid-cols-[2fr,3fr] gap-3 md:gap-5 w-full p-2">
        <AdminCard className="h-fit">
          <div className="box box-primary">
            <BoxHeader title="Add Amenity" />
            <form onSubmit={onSubmitHandler} className="pt-2 px-2">
              <div className="box-body bozero">
                <div className="form-group">
                  <Input
                    label={"Name"}
                    id="amenityName"
                    name={"AmenityName"}
                    onInput={inputHandler}
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
