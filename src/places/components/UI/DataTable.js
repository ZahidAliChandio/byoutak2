import React, { useState, useEffect, useRef, Fragment } from "react";
const DataTable = ({
  tableHeadersData,
  tableBodyData,
  reference,
  fixedColumn,
  onRowClick,
  rowClickEnabled,
  isLoading,
}) => {
  const [hideCheckboxes, setHideCheckboxes] = useState(true);
  const [tableHeaders, setTableHeaders] = useState(tableHeadersData);
  const [tableBody, setTableBody] = useState(tableBodyData);

  useEffect(() => {
    setTableBody(tableBodyData);
  }, [tableBodyData]);

  useEffect(() => {
    setTableHeaders(tableHeadersData);
  }, [tableHeadersData]);

  function getColumnLabel(id) {
    const col = tableHeaders && tableHeaders.filter((x) => x.id === id)[0];
    return col ? <>{col.label}</> : "na";
  }

  function getColumnComponent(id, row) {
    const col = tableHeaders.filter((x) => x.id === id)[0];
    return col && (col.component ? col.component(row, setTableBody) : row[id]);
  }

  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = (e) => {
    const x = e.currentTarget.scrollLeft;
    if (x === positionRef.current) setIsScrolled(false);
    if (x !== positionRef.current && !isScrolled) setIsScrolled(true);
  };
  const positionRef = useRef(0);

  return (
    <>
      <div className="min-h-[40wh] rounded-lg bg-white pt-6 shadow-md">
        <div className="flex flex-col">
          <div
            className="overflow-x-scroll min-h-[22rem]"
            ref={reference}
            onScroll={handleScroll}
            // style={{ 'MsOverflowStyle': 'none', 'scrollbarWidth': 'none' }}
            id="data-table-p"
          >
            <div className="flex flex-col">
              <div className="shadow-table rounded-lg z-11">
                <table
                  className="min-w-full divide-y divide-gray-300 border-separate border-spacing-y-0"
                  id="data-table"
                >
                  <thead className="bg-gray-50">
                    <tr className="inline-flex w-full  justify-between">
                      {fixedColumn && (
                        <th
                          scope="col"
                          className={`${
                            fixedColumn
                              ? `sticky left-0 text-left text-xs font-medium text-gray-500 uppercase cursor-pointer bg-gray-50 z-20 ${
                                  isScrolled ? "border-r" : ""
                                }`
                              : "relative w-12 px-6"
                          }`}
                        >
                          {!hideCheckboxes && (
                            <input
                              type="checkbox"
                              className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-200 text-blue-500 focus:ring-blue-500 sm:left-6"
                            />
                          )}
                          {fixedColumn && (
                            <span
                              className={`${
                                hideCheckboxes ? "pl-4" : "pl-[4rem]"
                              }`}
                            >
                              {fixedColumn.label}
                            </span>
                          )}
                        </th>
                      )}
                      {!fixedColumn && <th className="pl-3"></th>}
                      {tableHeaders &&
                        tableHeaders.map((header, index) => (
                          <Fragment key={index}>
                            <th                              
                              scope="col"
                              className="relative inline-flex items-center py-3.5 pr-3 text-left text-xs font-medium text-gray-500 uppercase"
                            >
                              {header.label}
                            </th>
                          </Fragment>
                        ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {/* <!-- Selected: "bg-gray-50" --> */}

                    {!isLoading
                      ? tableBody &&
                        tableBody.map((row, index) => (
                          <tr
                            key={index}
                            className={`${
                              index % 2 === 0 ? "bg-[#ffffff]" : "bg-gray-50"
                            }`}
                          >
                            {fixedColumn && (
                              <td
                                className={`${
                                  fixedColumn
                                    ? `sticky left-0 whitespace-nowrap min-w-[100px]  ${
                                        isScrolled ? "border-r" : ""
                                      }`
                                    : "relative w-16 px-8"
                                } z-30`}
                              >
                                {/* <div className="absolute inset-y-0 left-0 w-0.5 bg-blue-500"></div> */}
                                {!hideCheckboxes && (
                                  <input
                                    type="checkbox"
                                    className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500 sm:left-6"
                                  />
                                )}
                                {fixedColumn && (
                                  <div
                                    className={`${
                                      index % 2 === 0
                                        ? "bg-[#ffffff]"
                                        : "bg-gray-50"
                                    } ${
                                      hideCheckboxes ? "pl-4" : "pl-[4rem]"
                                    } whitespace-nowrap py-4 pr-4 text-sm font-medium text-gray-900`}
                                  >
                                    {fixedColumn.component(row, setTableBody)}
                                  </div>
                                )}
                              </td>
                            )}
                            {!fixedColumn && <th className="pl-3"></th>}
                            {tableHeaders &&
                              tableHeaders.map((col, index) => (
                                <Fragment key={index}> 
                                  {rowClickEnabled ? (
                                    
                                      <td
                                        key={index}
                                        onClick={() => onRowClick(row)}
                                        className="cursor-pointer whitespace-nowrap py-4 pr-3 text-xs font-medium text-gray-900"
                                      >
                                        {getColumnComponent(col, row)}
                                      </td>
                                    
                                  ) : (
                                    <>
                                      <td className="whitespace-nowrap py-4 pr-3 text-xs font-medium text-gray-900">
                                        {getColumnComponent(col, row)}
                                      </td>
                                    </>
                                  )}
                                </Fragment>
                              ))}
                          </tr>
                        ))
                      : [...Array(8)].map((val, index) => (
                          <tr className={` animate-pulse p-2`} key={index}>
                            <td className="p-1 flex gap-x-3 ml-2">
                              <div className="h-4 bg-gray-200 mt-1 mb-1 rounded-lg w-5"></div>
                              <div className="h-4 bg-gray-200 mt-1 mb-1 rounded-lg w-[70%]"></div>
                            </td>

                            {tableHeaders &&
                              tableHeaders.map((col, index) => (
                                <td key={index}>
                                  <div className="h-4 bg-gray-200 mt-1 mb-1 rounded-lg w-[70%]"></div>
                                </td>
                              ))}
                          </tr>
                        ))}
                  </tbody>
                  <tbody>
                    {tableBody && tableBody?.length === 0 && !isLoading && (
                      <>
                        <tr className="odd">
                          <td
                            valign="top"
                            colSpan="12"
                            className="dataTables_empty pt-5"
                          >
                            <div
                              align="center"
                              className="text-red-500 align-center justify-center"
                            >
                              <img
                                alt="Empty Table"
                                src="/addnewitem.svg"
                                className="justify-center mx-auto py-5"
                              />
                              <p className="text-success text-bold font-medium text-black p-2">
                                No data available in table.
                              </p>
                              <p className="text-success text-sm font-medium text-gray-500 pb-5">
                                Add new record or search with different
                                criteria.
                              </p>
                            </div>
                          </td>
                        </tr>
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataTable;
