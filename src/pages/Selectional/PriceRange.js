import { Fragment } from "react";
import SlidingContent from "../../components/UI/SlidingContent";
const Unit = () => {
  const content = {
    pageId: 3,
    title: "WHAT IS THE PRICE RANGE YOU HAVE IN MIND",
    lis: [
      { _id: 0, Name: "3 Million" },
      { _id: 1, Name: "4 Million" },
      { _id: 2, Name: "5 Million" },
    ],
    nextLink: "location",
  };
  return (
    <Fragment>
      <SlidingContent content={content} isFetched></SlidingContent>
    </Fragment>
  );
};
export default Unit;
