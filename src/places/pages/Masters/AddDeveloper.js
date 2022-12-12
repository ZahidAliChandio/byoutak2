import React, { useState, useEffect } from "react";
import http from '../../../utils/http'
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

function AddDeveloper() {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [tableBodyList, setTableBodyList] = useState([]);
  const [count, setCount] = useState(0);
  const [edit, setEdit] = useState(false);
  const [resetForm, setResetForm] = useState(false);
  const [updateName, setUpdateName] = useState("");
  const [updateIcon, setUpdateIcon] = useState("");
  const [updateDescription, setUpdateDescription] = useState("");
  const [updateForm, setUpdateForm] = useState(false);

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

  const getProjectDevelopers = () => {
    http
      .get(`${process.env.REACT_APP_ATLAS_URI}/getProjectDevelopers/`, {
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
      .delete(
        `${process.env.REACT_APP_ATLAS_URI}/deleteProjectDeveloper/${data._id}`
      )
      .then((response) => {
        if (response.status === 200) {
          getProjectDevelopers();
          toast.success(response?.data);
        } else toast.error(response?.data?.error?.message);
      })
      .catch((err) => toast.error(err.message));
  }

  const editHandler = (data) => {
    setUpdateForm(true);
    setUpdateName(data.Name);
    setUpdateIcon(data.Icon);
    setUpdateDescription(data.Description);
    setEdit(true);
  };
  const editCancelHandler = () => {
    if (edit) setEdit(false);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    http
      .post(
        `${process.env.REACT_APP_ATLAS_URI}/addProjectDeveloper/`,
        formState /*, configToken*/
      )
      .then((response) => {
        if (response.status === 200) {
          setTableBodyList((prevState) => [response?.data?.data, ...prevState]);
          setResetForm(true);
        } else toast.error(response.data.error.message);
      })
      .catch((err) => toast.error(err.message));
  };
  useEffect(() => {
    getProjectDevelopers();
  }, [page, limit]);

  const [tableHeaders, setTableHeaders] = useState([
    { id: "_id", label: "ID" },
    { id: "Name", label: "Name" },
    { id: "Description", label: "Description" },
    { id: "Icon", label: "Icon" },
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
      <MainHeader type="Masters" subtype="Add Developer" />
      <div className="grid grid-cols-1 md:grid-cols-[2fr,3fr] gap-3 md:gap-5 w-full p-2">
        <AdminCard className="h-fit">
          <div className="box box-primary">
            <BoxHeader title={`${edit ? "Update" : "Add"} Developer`} />
            <form
              onSubmit={onSubmitHandler}
              className="flex flex-col gap-4 pt-2 px-2"
            >
              <Input
                label={"Name"}
                id={"Name"}
                name={"DeveloperName"}
                updateValue={updateName}
                updateForm={updateForm}
                setUpdateForm={setUpdateForm}
                resetForm={resetForm}
                setResetForm={setResetForm}
                onInput={inputHandler}
                required
              />
              <Input
                label={"Icon"}
                id={"Icon"}
                name={"DeveloperIcon"}
                updateValue={updateIcon}
                updateForm={updateForm}
                setUpdateForm={setUpdateForm}
                resetForm={resetForm}
                setResetForm={setResetForm}
                onInput={inputHandler}
                required
              />
              <Input
                type="textarea"
                label={"Description"}
                id={"Description"}
                name={"DeveloperDescription"}
                updateValue={updateDescription}
                updateForm={updateForm}
                setUpdateForm={setUpdateForm}
                resetForm={resetForm}
                setResetForm={setResetForm}
                onInput={inputHandler}
              />

              <FormButton onClick={editCancelHandler}>
                {edit ? "Update" : "Save"}
              </FormButton>
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
                          isLoading={loading}
                          tableHeadersData={tableHeaders}
                          setTableHeadersData={setTableHeaders}
                          tableBodyData={tableBodyList || []}
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-0 w-[-webkit-fill-available] z-50">
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

export default AddDeveloper;
