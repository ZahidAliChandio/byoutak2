import { Fragment } from "react";
import SlidingContent from "../../components/UI/SlidingContent";
const Unit = () => {
  const content = {
    pageId: 3,
    title: (
      <span className="whitespace-pre">
        What is the <span className="text-[red]"> price</span> range you have in
        mind?
      </span>
    ),
    lis: [
      { _id: 0, Name: "3 Million" },
      { _id: 1, Name: "4 Million" },
      { _id: 2, Name: "5 Million" },
    ],
    nextLink: "slider",
  };
  return (
    <Fragment>
      <SlidingContent content={content} isFetched></SlidingContent>
    </Fragment>
  );
};
export default Unit;
