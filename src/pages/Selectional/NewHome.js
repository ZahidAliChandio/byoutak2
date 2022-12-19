import { Fragment } from "react";

import SlidingContent from "../../components/UI/SlidingContent";

const NewHome = () => {
  const content = {
    pageId: 1,
    title: (
      <span>
        Find <span className="text-[red]">your</span> property
      </span>
    ),
    subtitle: (
      <span>
        Don't know what you are looking for?{" "}
        <h2 className="font-bold px-6 sm:p-0 text-lg sm:text-xl md:text-2xl lg:text-3xl my-4">
          Where would your <span className="text-[red]">property</span> be?
        </h2>
      </span>
    ),
    input: true,
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
export default NewHome;
