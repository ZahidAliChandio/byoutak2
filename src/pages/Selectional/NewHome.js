import { Fragment } from "react";

import SlidingContent from "../../components/UI/SlidingContent";

const NewHome = () => {
  const content = {
    pageId: 1,
    title: "FIND YOUR NEW HOME",
    subtitle: "Don't know what you are looking for?",
    input: true,
    lis: [
      { _id: 0, Name: "RESIDENTIAL" },
      { _id: 1, Name: "COMMERCIAL" },
      { _id: 2, Name: "ADMIN" },
    ],
    nextLink: "property",
  };

  return (
    <Fragment>
      <SlidingContent content={content} isFetched></SlidingContent>
    </Fragment>
  );
};
export default NewHome;
