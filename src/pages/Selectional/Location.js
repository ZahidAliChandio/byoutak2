import { Fragment, useEffect, useState } from "react";
import { useCallback } from "react";
import http from "../../utils/http";
import toast from "react-hot-toast";

import SlidingContent from "../../components/UI/SlidingContent";

const Price = () => {
  const [data, setData] = useState(null);

  const content = {
    pageId: 1,
    lis: data,
    title: (
      <span>
        Find <span className="text-[red]">your</span> property
      </span>
    ),
    subtitle: (
      <span className="text-2xl">
        Don't know what you are looking for?{" "}
        <h2 className="font-bold px-6 sm:p-0 text-lg sm:text-xl md:text-2xl lg:text-3xl my-4">
          Where would your <span className="text-[red]">property</span> be?
        </h2>
      </span>
    ),
    // lis: [
    //   { _id: 0, Name: "NEW CAIRO" },
    //   { _id: 1, Name: "6TH OF OCTOBER" },
    //   { _id: 2, Name: "NEW CAPITAL" },
    // ],
    nextLink: "property-type",
  };

  const getLocations = useCallback(() => {
    http
      .get(`${process.env.REACT_APP_ATLAS_URI}/getLocations/`)
      .then((response) => {
        if (response.status === 200) {
          const results = response?.data?.results;
          console.log(results);
          setData(
            results.map((result) => {
              result.Name = result.Location;
              return result;
            })
          );
          // const newObject=
          // setData();
        } else toast.error(response?.data?.error?.message);
      })
      .catch((err) => toast.error(err.message));
  }, []);

  useEffect(() => {
    getLocations();
  }, [getLocations]);

  return (
    <Fragment>
      <SlidingContent content={content} isFetched={data}></SlidingContent>
    </Fragment>
  );
};
export default Price;
