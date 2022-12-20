import { Fragment } from "react";

import SlidingContent from "../../components/UI/SlidingContent";

const PropertyType = () => {
  const content = {
    pageId: 1,
    title: (
      <span>
        What type of <span className="text-[red]">property </span>
        are you looking for?
      </span>
    ),
    lis: [
      { _id: 0, Name: "RESIDENTIAL" },
      { _id: 1, Name: "COMMERCIAL" },
      { _id: 2, Name: "ADMIN" },
    ],
    nextLink: "unit-type",
  };

  return (
    <Fragment>
      <SlidingContent content={content} isFetched></SlidingContent>
    </Fragment>
  );
};
export default PropertyType;
