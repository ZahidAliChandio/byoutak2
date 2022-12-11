import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import BoxHeader from "../../components/UI/BoxHeader";
import Dialog from "../../components/UI/Dialog";
import AdminCard from "../../components/UI/AdminCard";
import MainHeader from "../../components/Navigation/MainHeader";
import Input from "../../components/UI/Input";
import FormButton from "../../components/UI/FormButton";
import DataTable from "../../components/UI/DataTable";
import Paginator from "../../components/UI/paginator";
import { useForm } from "../../hooks/form-hook";
import { useCallback } from "react";

function AddDeveloper() {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [tableBodyList, setTableBodyList] = useState([]);
  const [count, setCount] = useState(0);
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

  const getDevelopers = useCallback(() => {
    axios
      .get(`${process.env.REACT_APP_ATLAS_URI}/getUnitTypes/`, {
        params: {
          page: page + 1,
          limit: limit,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setTableBodyList(response?.data?.results);
          setCount(response?.data?.count);
          setLoading(false);
        } else toast.error(response?.data?.error?.message);
      })
      .catch((err) => toast.error(err.message));
  }, [page, limit]);

  function deleteFromTable(data) {
    axios
      .delete(`${process.env.REACT_APP_ATLAS_URI}/deleteDeveloper/${data._id}`)
      .then((response) => {
        if (response.status === 200) {
          getDevelopers();
          toast.success(response?.data);
        } else toast.error(response?.data?.error?.message);
      })
      .catch((err) => toast.error(err.message));
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post(
        `${process.env.REACT_APP_ATLAS_URI}/addDevelopers/`,
        formState /*, configToken*/
      )
      .then((response) => {
        if (response.status === 200) {
          setTableBodyList((prevState) => [response?.data?.data, ...prevState]);
          toast.success(response?.data?.message);
        } else toast.error(response.data.error.message);
      })
      .catch((err) => toast.error(err.message));
  };
  useEffect(() => {
    getDevelopers();
  }, [getDevelopers]);

  const [tableHeaders, setTableHeaders] = useState([
    { id: "_id", label: "ID" },
    { id: "Name", label: "Name" },
    {
      id: "actions",
      label: "",
      component: (data, setData) => (
        <div className="space-x-3 !text-right">
          <button className=" no-focus" title="Edit" onClick={() => {}}>
            <i className="fas fa-pencil" aria-hidden="true"></i>
          </button>
          <button
            className=" no-focus"
            title="Delete"
            onClick={(e) => deleteFromTable(data)}
          >
            <i className="fas fa-times text-red-500" aria-hidden="true"></i>
          </button>
        </div>
      ),
    },
  ]);

  // const [tableHeaders, setTableHeaders] = useState([
  //   { id: "createdAt", label: "Sale Date", sorting: "desc" },
  //   { id: "contactJoined", label: "Contact Created" },
  //   { id: "productName", label: "Product Name" },
  //   { id: "productTag", label: "Product Tag" },
  //   { id: "recurring", label: "Recurring" },
  //   { id: "value", label: "Sale" },
  //   { id: "transactionType", label: "Transaction Type" },
  //   { id: "contactPhone", label: "Contact Phone#" },
  //   { id: "contactName", label: "Contact Name" },
  //   { id: "closerEmail", label: "Closer Email" },
  //   { id: "closerName", label: "Closer Name" },
  // ]);

  // const onSubmitHandler = (e) => {
  //   e.preventDefault();
  //   console.log(formState);
  // };

  return (
    <section className="content">
      <MainHeader type="Masters" subtype="Add Developer" />
      <div className="grid grid-cols-1 md:grid-cols-[2fr,3fr] gap-3 md:gap-5 w-full p-2">
        <AdminCard className="h-fit">
          <div className="box box-primary">
            <BoxHeader title="Add Developer" />
            <form
              onSubmit={onSubmitHandler}
              className="flex flex-col gap-4 pt-2 px-2"
            >
              <Input
                label={"Name"}
                id={"Name"}
                name={"DeveloperName"}
                onInput={inputHandler}
                required
              />
              <Input
                label={"Icon"}
                id={"Icon"}
                name={"DeveloperIcon"}
                onInput={inputHandler}
                required
              />
              <Input
                type="textarea"
                label={"Description"}
                id={"Description"}
                name={"DeveloperDescription"}
                onInput={inputHandler}
              />

              <FormButton>Save</FormButton>
            </form>
          </div>
        </AdminCard>

        <AdminCard className="relative">
          <div className="box box-primary">
            <BoxHeader title="Added Developers" />

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

export default AddDeveloper;
