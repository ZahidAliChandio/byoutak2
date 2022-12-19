import { Fragment, useCallback, useState, useEffect } from "react";
import { useLocation } from "react-router";
import http from "../../utils/http";
import toast from "react-hot-toast";

import PropertySlider from "./PropertySlider";
import PropertyCard from "./PropertyCard";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import ContactUs from "./ContactUs";

const Property = () => {
  const [propertyData, setPropertyData] = useState(null);
  const location = useLocation();

  const getProperties = useCallback(() => {
    http
      .get(`${process.env.REACT_APP_ATLAS_URI}/getProperties/`)
      .then((response) => {
        const data = response.data;
        if (response.status === 200) {
          const list = [];
          data.forEach((element) => {
            list.push({
              id: element._id,
              img: element.Images,
              title: element.Name,
              subtitle: element.Type,
              price: `${element.Price}`,
              continent: element.State,
              type: element.Type,
              link: element.Link,
              location: `${element.City}, ${element.Country}`,
              bedrooms: `${element.Bedrooms}`,
              bathrooms: `${element.Bathrooms}`,
              area: `${element.Area} m²`,
              unitTypes: element.Unit_PropertyType,
              amenities: element._Amenities,
            });
          });
          setPropertyData(list[5]);
        } else toast.error(response?.data?.error?.message);
      })
      .catch((err) => toast.error(err.message));
  }, []);
  useEffect(() => {
    getProperties();
    console.log("PropertyId: " + location.state);
  }, [getProperties]);

  return (
    <Fragment>
      {propertyData && (
        <Fragment>
          <div className="grid grid-cols-1 lg:grid-cols-[60%,40%]">
            <PropertySlider data={propertyData.img} />
            <PropertyCard data={propertyData} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-2 sm:px-6 sm:px-10 md:px-16 my-16">
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
