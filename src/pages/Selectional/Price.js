import { Fragment } from "react";
import SlidingContent from "../../components/UI/SlidingContent";

const Price = () => {
  const content = {
    id: 2,
    title: "WHERE WOULD YOUR PROPERTY BY?",
    lis: ["NEW CAIRO", "6TH OF OCTOBER", "NEW CAPITAL"],
    nextLink: "/slider",
  };
  return (
    <Fragment>      
      <SlidingContent content={content}></SlidingContent>
    </Fragment>
  );
};
export default Price;
