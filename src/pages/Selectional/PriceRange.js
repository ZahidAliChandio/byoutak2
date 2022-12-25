import { Fragment } from "react";
import SlidingContent from "../../components/UI/SlidingContent";
const Unit = () => {
  const content = {
    pageId: 3,
    title: (
      <span>
        What is the <span className="text-[red]"> price</span> range you have in
        mind?
      </span>
    ),
    lis: [
      { _id: 3000000, Name: "3 Million" },
      { _id: 4000000, Name: "4 Million" },
      { _id: 5000000, Name: "5 Million" },
      { _id: 8000000, Name: "8 Million" },
      { _id: 10000000, Name: "10 Million" },
    ],
    nextLink: "search-property",
  };
  return (
    <Fragment>
      <SlidingContent content={content} isFetched></SlidingContent>
    </Fragment>
  );
};
export default Unit;
