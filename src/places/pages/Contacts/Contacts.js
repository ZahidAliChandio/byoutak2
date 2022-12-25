import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import http from "../../../utils/http";
import toast from "react-hot-toast";

import DataTable from "../../components/UI/DataTable";
import BoxHeader from "../../components/UI/BoxHeader";
import Paginator from "../../components/UI/paginator";
import MainHeader from "../../components/Navigation/MainHeader";
import AdminCard from "../../components/UI/AdminCard";

const Contacts = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [tableBodyList, setTableBodyList] = useState([]);
  const [count, setCount] = useState(0);

  const navigate = useNavigate();

  const getContacts = () => {
    http
      .get(`${process.env.REACT_APP_ATLAS_URI}/getContacts/`, {
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
    getContacts();
  }, [page, limit]);

  const [tableHeaders, setTableHeaders] = useState([
    { id: "_id", label: "ID" },
    { id: "Name", label: "Name" },
    { id: "Message", label: "Message" },
    { id: "Location", label: "Prefered Location" },
    { id: "Date", label: "Date" },
    { id: "Time", label: "Time" },
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
                total={0}
              />
            </div>
          </div>
        </AdminCard>
      </div>
    </div>
  );
};

export default Contacts;
