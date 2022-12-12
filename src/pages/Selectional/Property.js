import { Fragment, useEffect, useState } from "react";
import http from "../../utils/http";
import toast from "react-hot-toast";

import SlidingContent from "../../components/UI/SlidingContent";
import { useCallback } from "react";

const Property = () => {
  const [lis, setLis] = useState([]);
  const content = {
    id: 3,
    title: "WHAT IS THE TYPE OF UNIT YOU ARE LOOKING FOR?",
    lis: lis,
    nextLink: "unit",
  };
  const getUnitTypes = useCallback(() => {
    http
      .get(`${process.env.REACT_APP_ATLAS_URI}/getUnitTypes/`)
      .then((response) => {
        if (response.status === 200) {
          const result = response?.data?.results;
          result.forEach((item, index) => {
            setLis((prev) => prev.concat(item.Name));
          });
        } else toast.error(response?.data?.error?.message);
      })
      .catch((err) => toast.error(err.message));
  }, []);

  useEffect(() => {
    getUnitTypes();
  }, [getUnitTypes]);

  return (
    <Fragment>
      <SlidingContent content={content}></SlidingContent>
    </Fragment>
  );
};
export default Property;
