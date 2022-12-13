import { Fragment } from "react";
import SlidingContent from "../../components/UI/SlidingContent";

const Price = () => {
  const content = {
    id: 2,
    title: "WHERE WOULD YOUR PROPERTY BY?",
    lis: [
      { _id: 0, Name: "NEW CAIRO" },
      { _id: 1, Name: "6TH OF OCTOBER" },
      { _id: 2, Name: "NEW CAPITAL" },
    ],
    nextLink: "slider",
  };
  return (
    <Fragment>
      <SlidingContent content={content} isFetched></SlidingContent>
    </Fragment>
  );
};
export default Price;
