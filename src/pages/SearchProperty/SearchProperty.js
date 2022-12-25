import { useContext, Fragment, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import toast from "react-hot-toast";

import PropertyCard from "./PropertyCard";
import Dropdown from "../../components/UI/Dropdown";
import { SelectContext } from "../../context/user-select";
import http from "../../utils/http";

import Apartment from "../../static/images/apartment.jpg";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

const SearchProperty = () => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [locations, setLocations] = useState([]);
  const [unitTypes, setUnitTypes] = useState([]);
  const [selectedPropertyType, setSelectedPropertyType] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [pageNo, setPageNo] = useState(1);
  const [limit, setLimit] = useState(4);
  const [activePage, setActivePage] = useState(0);

  const navigate = useNavigate();

  const selectContext = useContext(SelectContext);
  const { value } = selectContext;

  const [pageNumbers, setPageNumbers] = useState([]);

  useEffect(() => {
    const pageNos = [];
    for (let pageNo = 1; pageNo <= limit; pageNo++) {
      pageNos.push(`${pageNo}`);
    }
    setPageNumbers(pageNos);
  }, [limit]);

  // let capitalize = (strPara) => {
  //   let arr = Array.from(strPara);
  //   arr[0] = arr[0].toUpperCase();
  //   return arr.join("");
  // };
  const getProperties = () => {
    // const location = value[0]?._id;
    // const type = capitalize(value[0]?.Name?.toLowerCase());
    // const unitType = value[1]?._id;
    // const price = value[2]?._id;

    // This code to be deleted when search works fine.
    http
      .get(`${process.env.REACT_APP_ATLAS_URI}/getProperties/`, {
        params: { limit: limit, page: pageNo },
      })
      .then((response) => {
        const data = response.data;
        if (response.status === 200) {
          const list = [];
          data.results.forEach((element) => {
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
          setData(list);
        } else toast.error(response?.data?.error?.message);
      })
      .catch((err) => toast.error(err.message));
  };
  // Remove from above till this line and uncomment bottom one.

  //   http
  //     .get(`${process.env.REACT_APP_ATLAS_URI}/searchProperty/`, {
  // params: { location, type, unitType, limit: limit, page: pageNo },
  //     })
  //     .then((response) => {
  //       const data = response.data;
  //       let counter = 0;
  //       if (response.status === 200) {
  //         const list = [];
  //         data.results.forEach((element) => {
  //           console.log(element);
  //           list.push({
  //             id: element,
  //             img: element.Images.length !== 0 ? element.Images[0] : null,
  //             title: element.Name,
  //             subtitle: element.Type,
  //             price: `EGP ${element.Price}`,
  //             contient: element.State,
  //             location: `${element.City}, ${element.Country}`,
  //             InstallmentYears: `${element.InstallmentYears} Years`,
  //             Delivery: `${element.Delivery}`,
  //             DownPayment: `${element.DownPayment} EGP`,
  //           });
  //         });
  //         setData(list);
  //       } else toast.error(response?.data?.error?.message);
  //     })
  //     .catch((err) => toast.error(err.message));
  // }

  useEffect(() => {
    getProperties();
  }, []);

  const getUnitTypes = useCallback(() => {
    http
      .get(`${process.env.REACT_APP_ATLAS_URI}/getUnitTypes/`)
      .then((response) => {
        if (response.status === 200) {
          const results = response?.data?.results;
          setUnitTypes(results);
        } else toast.error(response?.data?.error?.message);
      })
      .catch((err) => toast.error(err.message));
  }, []);

  useEffect(() => {
    getUnitTypes();
  }, [getUnitTypes]);

  const getLocations = useCallback(() => {
    http
      .get(`${process.env.REACT_APP_ATLAS_URI}/getLocations/`)
      .then((response) => {
        if (response.status === 200) {
          const results = response?.data?.results;
          setLocations(
            results.map((result) => {
              result.Name = result.Location;
              result.id = result._id;
              return result;
            })
          );
        } else toast.error(response?.data?.error?.message);
      })
      .catch((err) => toast.error(err.message));
  }, []);

  useEffect(() => {
    getLocations();
  }, [getLocations]);

  const onClickHandler = (id) => {
    navigate(`/property`, {
      state: id,
    });
    console.log(id);
  };

  const searchChangeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const propertyTypeChangeHandler = (propertyType) => {
    setSelectedPropertyType(propertyType.Name);
  };

  const locationChangeHandler = (location) => {
    setSelectedLocation(location.Name);
  };

  const searchClickHandler = () => {};

  const leftClickHandler = () => {
    setPageNo((prev) => prev - 1);
    setActivePage((prev) => prev - 1);
  };

  const rightClickHandler = () => {
    setPageNo((prev) => prev + 1);
    setActivePage((prev) => prev + 1);
  };
  const selectPageHandler = (index) => {
    setActivePage(index);
  };

  useEffect(() => {
    console.log(value);
  });

  return (
    <Fragment>
      <div className="text-center px-6 sm:px-4 md:px-8 lg:px-10 xl:px-32 pt-6">
        <h2 className="font-semibold text-xl md:text-3xl lg:text-5xl px-4 sm:p-0 text-white">
          find the <span className="text-[red] font-bold">property</span> that
          <span className="text-[red] font-bold"> suits</span> you best
        </h2>
        <div className="grid grid-cols-[3fr,3fr] sm:grid-cols-[3fr,3fr,3fr,1fr] md:grid-cols-[4fr,3fr,4fr,1fr] lg:grid-cols-[4fr,3fr,4fr,1fr] gap-4 lg:gap-8 justify-center items-start mt-6 md:mt-8 lg:mt-10 mx-auto">
          {/* <Dropdown
            content={[
              { _id: 0, value: "Search" },
              { _id: 1, value: "Find" },
              { _id: 2, value: "Navigate" },
            ]}
            selectedValue={{ id: 0, value: "Search" }}
            onValueChange={searchChangeHandler}
          /> */}
          <input
            type={"text"}
            id="Search"
            value={searchValue}
            className="border-2 rounded-full bg-transparent border-[red] text-lg pl-4 pr-3 py-3 justify-self-center cursor-pointer text-white outline-none w-full"
            placeholder="Search"
            onValueChange={searchChangeHandler}
          />
          <Dropdown
            content={unitTypes}
            selectedValue={{ id: 0, value: "Property Type" }}
            onValueChange={propertyTypeChangeHandler}
          />
          <Dropdown
            content={locations}
            selectedValue={{ id: 0, value: "Location" }}
            onValueChange={locationChangeHandler}
          />
          {/* Search button*/}
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
          {data.length > 0 ? data.length : 0} results
        </h2>

        {/* Property Cards */}
        <div className="flex items-center gap-4">
          <i
            className="fa fa-chevron-left fa-2xl text-[red]"
            aria-hidden="true"
            onClick={leftClickHandler}
          ></i>
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
          <i
            className="fa fa-chevron-right fa-2xl text-[red]"
            aria-hidden="true"
            onClick={rightClickHandler}
          ></i>
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
