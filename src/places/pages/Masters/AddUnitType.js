import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import http from "../../../utils/http";

import BoxHeader from "../../components/UI/BoxHeader";
import Dialog from "../../components/UI/Dialog";
import AdminCard from "../../components/UI/AdminCard";
import MainHeader from "../../components/Navigation/MainHeader";
import Input from "../../components/UI/Input";
import FormButton from "../../components/UI/FormButton";
import DataTable from "../../components/UI/DataTable";
import Paginator from "../../components/UI/paginator";
import { useForm } from "../../hooks/form-hook";

function AddUnitType() {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [tableBodyList, setTableBodyList] = useState([]);
  const [count, setCount] = useState(0);
  const [edit, setEdit] = useState(false);
  const [resetForm, setResetForm] = useState(false);
  const [updateName, setUpdateName] = useState("");
  const [updateForm, setUpdateForm] = useState(false);
  const [updateData, setUpdateData] = useState(null);

  const [formState, inputHandler] = useForm({
    Name: "",
  });

  const getUnitTypes = () => {
    http
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
  };

  function deleteFromTable(data) {
    http
      .delete(`${process.env.REACT_APP_ATLAS_URI}/deleteUnitType/${data._id}`)
      .then((response) => {
        if (response.status === 200) {
          getUnitTypes();
          toast.success(response?.data);
        } else toast.error(response?.data?.error?.message);
      })
      .catch((err) => toast.error(err.message));
  }

  const editHandler = (data) => {
    setUpdateForm(true);
    setUpdateData(data);
    setUpdateName(data.Name);
    setEdit(true);
  };
  const editCancelHandler = () => {
    if (edit) setEdit(false);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    updateData
      ? http
          .put(
            `${process.env.REACT_APP_ATLAS_URI}/updateUnitType/${updateData._id}`,
            formState /*, configToken*/
          )
          .then((response) => {
            if (response.status === 200) {
              getUnitTypes();
              setResetForm(true);
              setUpdateData(null);
              toast.success(response?.data?.message);
            } else toast.error(response.data.error.message);
          })
          .catch((err) => toast.error(err.message))
      : http
          .post(
            `${process.env.REACT_APP_ATLAS_URI}/addUnitType/`,
            formState /*, configToken*/
          )
          .then((response) => {
            if (response.status === 200) {
              getUnitTypes();
              setResetForm(true);
              toast.success(response?.data?.message);
            } else toast.error(response.data.error.message);
          })
          .catch((err) => toast.error(err.message));
  };
  useEffect(() => {
    getUnitTypes();
  }, [page, limit]);

  const [tableHeaders, setTableHeaders] = useState([
    { id: "_id", label: "ID" },
    { id: "Name", label: "Name" },
    {
      id: "actions",
      label: "",
      component: (data, setData) => (
        <div className="space-x-3 !text-right">
          <button
            className=" no-focus"
            title="Edit"
            onClick={() => {
              editHandler(data);
            }}
          >
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

  return (
    <section className="content">
      <MainHeader type="Masters" subtype="Add Unit Type" />
      <div className="grid grid-cols-1 md:grid-cols-[2fr,3fr] gap-3 md:gap-5 w-full p-2">
        <AdminCard className="h-fit">
          <div className="box box-primary">
            <BoxHeader title={`${updateData ? "Update" : "Add"} Unit Type`} />
            <form onSubmit={onSubmitHandler} className="pt-2 px-2">
              <Input
                label={"Name"}
                id={"Name"}
                name={"Name"}
                updateValue={updateName}
                updateForm={updateForm}
                setUpdateForm={setUpdateForm}
                resetForm={resetForm}
                setResetForm={setResetForm}
                onInput={inputHandler}
                required
              />
              <FormButton onClick={editCancelHandler}>
                {updateData ? "Update" : "Save"}
              </FormButton>
            </form>
          </div>
        </AdminCard>

        <AdminCard className="relative">
          <div className="box box-primary">
            <BoxHeader title="Added Unit Types" />

            <div className="content">
              <div className="row">
                <div className="col-md-12">
                  <div className="box box-primary">
                    <div className="h-fit rounded-lg bg-white mb-6 shadow-md">
                      <div>
                        <DataTable
                          isLoading={loading}
                          tableHeadersData={tableHeaders}
                          setTableHeadersData={setTableHeaders}
                          tableBodyData={tableBodyList || []}
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-[0] w-[-webkit-fill-available] z-50">
                      <Paginator
                        page={page}
                        setPage={setPage}
                        limit={limit}
                        setLimit={setLimit}
                        total={count}
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

export default AddUnitType;
