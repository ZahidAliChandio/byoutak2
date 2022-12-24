import { useContext, Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import toast from "react-hot-toast";

import PropertyCard from "../../components/UI/PropertyCard";
import Dropdown from "../../components/UI/Dropdown";
import { SelectContext } from "../../context/user-select";
import http from "../../utils/http";

import Apartment from "../../static/images/apartment.jpg";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

const SearchProperty = () => {
  const [data, setData] = useState([]);
  const [locations, setLocations] = useState(null);
  const [properties, setProperties] = useState(null);
  const [selectedPropertyType, setSelectedPropertyType] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [activePage, setActivePage] = useState(0);

  const navigate = useNavigate();

  const pageNumbers = ["1", "2", "3", "4"];

  const selectContext = useContext(SelectContext);
  const { value } = selectContext;

  const getProperties = () => {
    http
      .get(`${process.env.REACT_APP_ATLAS_URI}/getProperties/`)
      .then((response) => {
        const data = response.data;
        let counter = 0;
        if (response.status === 200) {
          const list = [];
          data.forEach((element) => {
            if (counter < 4) {
              list.push({
                id: element,
                img: element.Images.length !== 0 ? element.Images[0] : null,
                title: element.Name,
                subtitle: element.Type,
                price: `EGP ${element.Price}`,
                contient: element.State,
                location: `${element.City}, ${element.Country}`,
                InstallmentYears: `${element.InstallmentYears}`,
                Delivery: `${element.Delivery}`,
                DownPayment: `${element.DownPayment}`,
              });
            }
            counter++;
          });
          console.log(data);
          setData(list);
        } else toast.error(response?.data?.error?.message);
      })
      .catch((err) => toast.error(err.message));
  };
  useEffect(() => {
    getProperties();
  }, []);

  const onClickHandler = (id) => {
    navigate(`/property`, {
      state: id,
    });
    console.log(id);
  };

  const propertyTypeChangeHandler = (propertyType) => {
    setSelectedPropertyType(propertyType.Name);
    console.log(propertyType);
  };

  const locationChangeHandler = (location) => {
    setSelectedLocation(location.Name);
    console.log(location);
  };

  const searchChangeHandler = () => {};

  const searchClickHandler = () => {
    // getting location
    http
      .get(`${process.env.REACT_APP_ATLAS_URI}/getLocations/`)
      .then((response) => {
        if (response.status === 200) {
          const results = response?.data?.results;
          console.log(results);
          setLocations(
            results.map((result) => {
              result.Name = result.Location;
              return result;
            })
          );
          console.log(results);
        } else toast.error(response?.data?.error?.message);
      })
      .catch((err) => toast.error(err.message));

    // getting properties

    http
      .get(`${process.env.REACT_APP_ATLAS_URI}/getProperties/`)
      .then((response) => {
        const data = response.data;
        let counter = 0;
        if (response.status === 200) {
          const list = [];
          data.forEach((element) => {
            if (counter < 4) {
              list.push({
                id: element,
                img: element.Images.length !== 0 ? element.Images[0] : null,
                title: element.Name,
                subtitle: element.Type,
                price: `EGP ${element.Price}`,
                contient: element.State,
                location: `${element.City}, ${element.Country}`,
                InstallmentYears: `${element.InstallmentYears}`,
                Delivery: `${element.Delivery}`,
                DownPayment: `${element.DownPayment}`,
              });
            }
            counter++;
          });
          console.log(data);
          setData(list);
        } else toast.error(response?.data?.error?.message);
      })
      .catch((err) => toast.error(err.message));
  };

  useEffect(() => {
    console.log(value);
  });
  const selectPageHandler = (index) => {
    setActivePage(index);
  };

  return (
    <Fragment>
      <div className="text-center px-6 sm:px-4 md:px-8 lg:px-10 xl:px-32 pt-6">
        <h2 className="font-semibold text-xl md:text-3xl lg:text-5xl px-4 sm:p-0 text-white">
          find the <span className="text-[red] font-bold">property</span> that
          <span className="text-[red] font-bold"> suits</span> you best
        </h2>
        <div className="grid grid-cols-[3fr,3fr] sm:grid-cols-[3fr,3fr,3fr,1fr] md:grid-cols-[4fr,3fr,4fr,1fr] lg:grid-cols-[4fr,3fr,4fr,1fr] gap-4 lg:gap-8 justify-center items-start mt-6 md:mt-8 lg:mt-10 mx-auto">
          <Dropdown
            content={[
              { id: 0, value: "Search" },
              { id: 1, value: "Find" },
              { id: 2, value: "Navigate" },
            ]}
            selectedValue={{ id: 0, value: "Search" }}
            onValueChange={searchChangeHandler}
          />
          <Dropdown
            content={[
              { id: 0, value: "Property Type" },
              { id: 1, value: "Find" },
              { id: 2, value: "Navigate" },
            ]}
            selectedValue={{ id: 0, value: "Property Type" }}
            onValueChange={propertyTypeChangeHandler}
          />
          <Dropdown
            content={[
              { id: 0, value: "Location" },
              { id: 1, value: "Find" },
              { id: 2, value: "Navigate" },
            ]}
            selectedValue={{ id: 0, value: "Location" }}
            onValueChange={locationChangeHandler}
          />
          {/* Search button(Icon) */}
          <div
            className="border-2 rounded-full border-[red] w-fit px-3 py-2 justify-self-center cursor-pointer"
            onClick={searchClickHandler}
          >
            <i className="fa-solid fa-magnifying-glass text-2xl text-white"></i>
          </div>
        </div>
      </div>
      <div className="relative px-2 sm:px-4 lg:px-8">
        <h2 className="font-bold text-lg md:text-xl lg:text-2xl mb-4 lg:mb-4 px-4 sm:p-0 grid-cols-3 w-full text-center text-gray-200">
          {data.length > 0 && data.length} results
        </h2>

        {/* Search Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 w-full">
          {data &&
            data.map((data, index) => {
              return (
                <PropertyCard
                  data={data}
                  key={index}
                  className="!w-full"
                  onClick={onClickHandler}
                />
              );
            })}
        </div>

        {/* Page Numbers */}
        <div className="flex items-center justify-center gap-4 w-full mt-5">
          {pageNumbers.map((pageNumber, index) => {
            return (
              <button
                key={index}
                className={`${
                  activePage === index
                    ? "bg-[red] text-gray-50"
                    : "bg-gray-50 text-[#212020]"
                } rounded-full font-semibold`}
                onClick={() => selectPageHandler(index)}
              >
                <span className="p-2">{pageNumber}</span>
              </button>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};
export default SearchProperty;
