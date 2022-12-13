import { Fragment, useEffect, useState } from "react";
import { useCallback } from "react";
import http from "../../utils/http";
import toast from "react-hot-toast";

import SlidingContent from "../../components/UI/SlidingContent";

const Property = () => {
  const [dataFetched, setDataFetched] = useState(false);
  const [data, setData] = useState([{}]);

  const content = {
    pageId: 2,
    title: "WHAT IS THE TYPE OF UNIT YOU ARE LOOKING FOR?",
    lis: data,
    nextLink: "unit",
  };

  const getUnitTypes = useCallback(() => {
    http
      .get(`${process.env.REACT_APP_ATLAS_URI}/getUnitTypes/`)
      .then((response) => {
        if (response.status === 200) {
          const results = response?.data?.results;
          setData(results);
          setDataFetched(true);
        } else toast.error(response?.data?.error?.message);
      })
      .catch((err) => toast.error(err.message));
  }, []);

  useEffect(() => {
    getUnitTypes();
  }, [getUnitTypes]);

  return (
    <Fragment>
      {dataFetched && (
        <SlidingContent
          content={content}
          isFetched={dataFetched}
        ></SlidingContent>
      )}
    </Fragment>
  );
};
export default Property;
