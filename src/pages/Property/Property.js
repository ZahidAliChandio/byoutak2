import { Fragment } from "react";

import PropertySlider from "./PropertySlider";
import Accordion from "./Accordion";
import PropertyCard from "./PropertyCard";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const propertData = {
  id: 1,
  img: null,
  title: "Twinhouse",
  subtitle: "SODIC",
  price: "EGP 5,500,000",
  continent: "lorem ipsum",
  location: "New Heliopolis, Egypt",
  bedrooms: 3,
  bathrooms: 2,
  area: "150 m²",
};

const Property = () => {
  return (
    <Fragment>
      <div className="grid grid-cols-1 lg:grid-cols-[60%,40%]">
        <PropertySlider />
        <PropertyCard data={propertData} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 sm:px-10 md:px-16 my-16">
        <LeftContent />
        <RightContent />
      </div>
    </Fragment>
  );
};
export default Property;
