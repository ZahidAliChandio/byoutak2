import { Fragment } from "react";

import SlidingContent from "../../components/UI/SlidingContent";

const NewHome = () => {
  const content = {
    id: 1,
    title: "FIND YOUR NEW HOME",
    subtitle: "Don't know what you are looking for?",
    input: true,
    lis: ["RESIDENTIAL", "COMMERCIAL", "ADMIN"],
    nextLink: "/property",
  };

  return (
    <Fragment>
      <SlidingContent content={content}></SlidingContent>
    </Fragment>
  );
};
export default NewHome;
