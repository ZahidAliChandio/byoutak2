import { Fragment, useState, useEffect } from "react";
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
  const propertyId = location.state ? location.state : "0001";
  console.log(location);

  const getPropertyById = () => {
    http
      .get(`${process.env.REACT_APP_ATLAS_URI}/getPropertyById/${propertyId}`)
      .then((response) => {
        const data = response.data;
        if (response.status === 200) {
          console.log(data);
          const list = [];
          data.forEach((element) => {
            list.push({
              id: element._id,
              img: element.Images,
              title: element.Name,
              subtitle: element.Type,
              price: `EGP ${element.Price}`,
              continent: element.State,
              type: element.Type,
              link: element.Link,
              location: `${element.City}, ${element.Country}`,
              InstallmentYears: `${element.InstallmentYears} Years`,
              Delivery: `${element.Delivery}`,
              DownPayment: `${element.DownPayment} EGP`,
              area: `${element.Area} m²`,
              unitTypes: element.Unit_PropertyType,
              amenities: element._Amenities,
            });
          });
          console.log(data);
          setPropertyData(list[0]);
        } else toast.error(response?.data?.error?.message);
      })
      .catch((err) => toast.error(err.message));
  };

  useEffect(() => {
    if (propertyId) getPropertyById();
  }, []);

  return (
    <Fragment>
      {propertyData && (
        <Fragment>
          <div className="grid grid-cols-1 lg:grid-cols-[60%,40%]">
            <PropertySlider data={propertyData.img} />
            <PropertyCard data={propertyData} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-2 sm:px-10 md:px-16 my-16">
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
