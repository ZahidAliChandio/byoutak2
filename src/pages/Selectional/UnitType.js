import { Fragment, useEffect, useState } from "react";
import { useCallback } from "react";
import http from "../../utils/http";
import toast from "react-hot-toast";

import SlidingContent from "../../components/UI/SlidingContent";

const UnitType = () => {
  const [data, setData] = useState(null);

  const content = {
    pageId: 2,
    title: (
      <span>
        What is the type of <span className="text-[red]">unit </span>
        are you looking for?
      </span>
    ),
    lis: data,
    // nextLink: "price-range",
  };

  const getUnitTypes = useCallback(() => {
    http
      .get(`${process.env.REACT_APP_ATLAS_URI}/getUnitTypes/`)
      .then((response) => {
        if (response.status === 200) {
          const results = response?.data?.results;
          setData(results);
        } else toast.error(response?.data?.error?.message);
      })
      .catch((err) => toast.error(err.message));
  }, []);

  useEffect(() => {
    getUnitTypes();
  }, [getUnitTypes]);

  return (
    <Fragment>
      <SlidingContent content={content} isFetched={data}></SlidingContent>
    </Fragment>
  );
};
export default UnitType;
