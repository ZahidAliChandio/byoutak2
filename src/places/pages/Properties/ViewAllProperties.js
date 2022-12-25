import React, { useState, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  const getProperties = () => {
    http
      .get(`${process.env.REACT_APP_ATLAS_URI}/getProperties/`, {
        params: {
          page: page + 1,
          limit: limit,
        },
      })
      .then((response) => {
        const data = response.data;
        if (response.status === 200) {
          setTableBodyList(data.results);
          setCount(response?.data?.count);
          setLoading(false);
        } else toast.error(response?.data?.error?.message);
      })
      .catch((err) => toast.error(err.message));
  };
  useEffect(() => {
    getProperties();
  }, [page, limit]);

  const editHandler = (data) => {
    navigate("/admin/addProperty", { state: data });
  };

  function deleteFromTable(data) {
    http
      .delete(`${process.env.REACT_APP_ATLAS_URI}/deleteProperty/${data._id}`)
      .then((response) => {
        if (response.status === 200) {
          getProperties();
          toast.success(response?.data);
        } else toast.error(response?.data?.error?.message);
      })
      .catch((err) => toast.error(err.message));
  }

  const [tableHeaders, setTableHeaders] = useState([
    { id: "_id", label: "ID" },
    { id: "Name", label: "Name" },
    { id: "Type", label: "Type" },
    { id: "Description", label: "Description" },
    { id: "Address", label: "Address" },
    {
      id: "_Amenities",
      label: "Amenities",
      component: (data, setData) => {
        return data._Amenities.map((x, index) => (
          <Fragment key={index}>
            {x.Name}
            <br />
          </Fragment>
        ));
      },
    },
    {
      id: "actions",
      label: "",
      component: (data, setData) => (
        <div className="flex space-x-3 !text-right">
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
    // { id: "Unit_PropertyType", label: "Units", component: (data, setData) => { return <>{data.Unit_PropertyType.map(x => <>{x.Name}<br /></>)}</> } },\
  ]);
  return (
    <div>
      <MainHeader type="Properties" subtype="View All Properties" />
      <div className="relative content p-2">
        <AdminCard>
          <div className="relative">
            <BoxHeader title="Properties List" />
            <div className="h-fit flex w-full rounded-lg bg-white mb-12 shadow-md">
              <DataTable
                isLoading={loading}
                tableHeadersData={tableHeaders}
                setTableHeadersData={setTableHeaders}
                tableBodyData={tableBodyList}
              />
            </div>
            <div className="fixed bottom-0 w-[-webkit-fill-available] z-50">
              <Paginator
                page={page}
                setPage={setPage}
                limit={limit}
                setLimit={setLimit}
                total={count}
              />
            </div>
          </div>
        </AdminCard>
      </div>
    </div>
  );
}

export default ViewAllProperties;
