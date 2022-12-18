import { Fragment } from "react";
import { useState, useEffect } from "react";
import http from "../../utils/http";
import toast from "react-hot-toast";

import PropertySlider from "./PropertySlider";
import PropertyCard from "./PropertyCard";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import ContactUs from "./ContactUs";

const Property = () => {
  const [propertyData, setPropertyData] = useState(null);

  const getProperties = () => {
    http
      .get(`${process.env.REACT_APP_ATLAS_URI}/getProperties/`)
      .then((response) => {
        const data = response.data;
        if (response.status === 200) {
          const list = [];
          data.forEach((element) => {
            list.push({
              id: element,
              img: element.Images.length !== 0 ? element.Images[0] : null,
              title: element.Name,
              subtitle: element.Type,
              price: `EGP ${element.Price}`,
              contient: element.State,
              location: `${element.City}, ${element.Country}`,
              bedrooms: `${element.Bedrooms}`,
              bathrooms: `${element.Bathrooms}`,
              area: `${element.Area} m²`,
            });
          });
          setPropertyData(list[1]);
        } else toast.error(response?.data?.error?.message);
      })
      .catch((err) => toast.error(err.message));
  };
  useEffect(() => {
    getProperties();
  }, []);

  return (
    <Fragment>
      {propertyData && (
        <Fragment>
          <div className="grid grid-cols-1 lg:grid-cols-[60%,40%]">
            <PropertySlider />
            <PropertyCard data={propertyData} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 sm:px-10 md:px-16 my-16">
            <LeftContent data={propertyData} />
            <RightContent data={propertyData} />
          </div>
          <ContactUs />
        </Fragment>
      )}
    </Fragment>
  );
};
export default Property;
