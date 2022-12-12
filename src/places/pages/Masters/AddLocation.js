import React, { useState, useEffect } from "react";
import http from "../../../utils/http";
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

function AddLocation() {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [tableBodyList, setTableBodyList] = useState([]);
  const [count, setCount] = useState(0);
  const [edit, setEdit] = useState(false);
  const [updateName, setUpdateName] = useState("");
  const [updateCity, setUpdateCity] = useState("");
  const [updateCountry, setUpdateCountry] = useState("");
  const [updateEstate, setUpdateEstate] = useState("");
  const [updateAddress, setUpdateAddress] = useState("");
  const [resetForm, setResetForm] = useState(false);
  const [updateForm, setUpdateForm] = useState(false);
  const [updateData, setUpdateData] = useState(null);

  const [formState, inputHandler] = useForm({
    Location: "",
    City: "",
    state: "",
    Country: "",
    Address: "",
  });

  const getLocations = () => {
    http
      .get(`${process.env.REACT_APP_ATLAS_URI}/getLocations/`, {
        params: {
          page: page + 1,
          limit: limit,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setTableBodyList(
            response?.data?.results.map((x) => {
              x.Address = x.Address?.Address;
              x.City = x.Address?.City;
              x.state = x.Address?.state;
              x.Country = x.Address?.Country;
              return x;
            })
          );
          setCount(response?.data?.count);
          setLoading(false);
        } else toast.error(response?.data?.error?.message);
      })
      .catch((err) => toast.error(err.message));
  };

  const [state, setState] = useState({
    tableBodyList: [],
    dialogInfo: {
      isOpened: false,
      text: "",
      type: "",
    },
  });

  function deleteFromTable(data) {
    http
      .delete(`${process.env.REACT_APP_ATLAS_URI}/deleteLocation/${data._id}`)
      .then((response) => {
        if (response.status === 200) {
          getLocations();
          toast.success(response?.data);
        } else toast.error(response?.data?.error?.message);
      })
      .catch((err) => toast.error(err.message));
  }

  const editHandler = (data) => {
    setUpdateForm(true);
    setUpdateData(data);
    console.log(data);
    setUpdateName(data.Name);
    setUpdateCity(data.Address.City);
    setUpdateEstate(data.Address.state);
    setUpdateCountry(data.Address.Country);
    setUpdateAddress(data.Address.Address);
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
            `${process.env.REACT_APP_ATLAS_URI}/updateLocation/${updateData._id}`,
            formState /*, configToken*/
          )
          .then((response) => {
            if (response.status === 200) {
              getLocations();
              setResetForm(true);
              setUpdateData(null);
              toast.success(response?.data?.message);
            } else toast.error(response.data.error.message);
          })
          .catch((err) => toast.error(err.message))
      : http
          .post(
            `${process.env.REACT_APP_ATLAS_URI}/addLocation/`,
            formState /*, configToken*/
          )
          .then((response) => {
            if (response.status === 200) {
              getLocations();
              setResetForm(true);
              toast.success(response?.data?.message);
            } else toast.error(response.data.error.message);
          })
          .catch((err) => toast.error(err.message));
  };
  useEffect(() => {
    getLocations();
  }, [page, limit]);

  const [tableHeaders, setTableHeaders] = useState([
    { id: "_id", label: "ID" },
    { id: "Location", label: "Name" },
    { id: "City", label: "City" },
    { id: "state", label: "State" },
    { id: "Country", label: "Country" },
    { id: "Address", label: "Address" },
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
      <MainHeader type="Masters" subtype="Add Location" />
      <div className="grid grid-cols-1 md:grid-cols-[2fr,3fr] gap-3 md:gap-5 w-full p-2">
        <AdminCard className="h-fit">
          <div className="box box-primary">
            <BoxHeader title={`${updateData ? "Update" : "Add"} Location`} />
            {console.log(tableBodyList)}
            <form
              onSubmit={onSubmitHandler}
              className="flex flex-col gap-4 pt-2 px-2"
            >
              <Input
                label={"Name"}
                id={"Location"}
                name={"Location"}
                updateForm={updateForm}
                setUpdateForm={setUpdateForm}
                updateValue={updateName}
                resetForm={resetForm}
                setResetForm={setResetForm}
                onInput={inputHandler}
                required
              />
              <h3 className="text-sm font-bold text-[color:var(--red-color)] box-title">
                Address
              </h3>
              <Input
                label={"City"}
                id={"City"}
                name={"City"}
                updateForm={updateForm}
                setUpdateForm={setUpdateForm}
                updateValue={updateCity}
                resetForm={resetForm}
                setResetForm={setResetForm}
                onInput={inputHandler}
                required
              />
              <Input
                label={"State"}
                id={"state"}
                name={"state"}
                updateForm={updateForm}
                setUpdateForm={setUpdateForm}
                updateValue={updateEstate}
                resetForm={resetForm}
                setResetForm={setResetForm}
                onInput={inputHandler}
                required
              />
              <Input
                label={"Country"}
                id={"Country"}
                name={"Country"}
                updateForm={updateForm}
                setUpdateForm={setUpdateForm}
                updateValue={updateCountry}
                resetForm={resetForm}
                setResetForm={setResetForm}
                onInput={inputHandler}
                required
              />
              <Input
                label={"Address"}
                id={"Address"}
                name={"Address"}
                updateForm={updateForm}
                setUpdateForm={setUpdateForm}
                updateValue={updateAddress}
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
            <BoxHeader title="Added Locations" />
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
                  <div className="h-fit rounded-lg bg-white mb-6 shadow-md">
                    <DataTable
                      isLoading={loading}
                      tableHeadersData={tableHeaders}
                      setTableHeadersData={setTableHeaders}
                      tableBodyData={tableBodyList || []}
                    />
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
        </AdminCard>
      </div>
    </section>
  );
}

export default AddLocation;
