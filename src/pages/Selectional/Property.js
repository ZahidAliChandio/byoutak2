import { Fragment } from "react";
import SlidingContent from "../../components/UI/SlidingContent";

const Property = () => {
  const content = {
    id: 3,
    title: "WHAT IS THE TYPE OF UNIT YOU ARE LOOKING FOR?",
    lis: ["APARTMENT", "STAND ALONE VILLA", "TOWN HOUSE", "TIWN HOUSE"],
    nextLink: "/unit",
  };
  return (
    <Fragment>      
      <SlidingContent content={content}></SlidingContent>
    </Fragment>
  );
};
export default Property;
