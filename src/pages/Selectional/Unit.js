import { Fragment } from "react";
import SlidingContent from "../../components/UI/SlidingContent";
const Unit = () => {
  const content = {
    id: 4,
    title: "WHAT IS THE PRICE RANGE YOU HAVE IN MIND",
    lis: ["3 Million", "4Million", "5 Million"],
    nextLink: "/price",
  };
  return (
    <Fragment>
       <SlidingContent content={content}></SlidingContent>
    </Fragment>
  );
};
export default Unit;
