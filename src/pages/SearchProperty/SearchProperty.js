import { Fragment, useState } from "react";
import { useLocation } from "react-router";

import PropertyCard from "../../components/UI/PropertyCard";
import Dropdown from "../../components/UI/Dropdown";

import Apartment from "../../static/images/apartment.jpg";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

const SearchProperty = () => {
  const [activePage, setActivePage] = useState(0);
  const pageNumbers = ["1", "2", "3", "4"];

  const propertyData = [
    {
      id: 1,
      image: Apartment,
      title: "Twinhouse",
      subtitle: "SODIC",
      price: "EGP 5,500,000",
      contient: "Sodic Ease",
      location: "New Heliopolis, Egypt",
      bedrooms: 3,
      bathrooms: 2,
      area: "150 m²",
    },
    {
      id: 2,
      image: Apartment,
      title: "Twinhouse",
      subtitle: "SODIC",
      price: "EGP 5,500,000",
      contient: "Sodic Ease",
      location: "New Heliopolis, Egypt",
      bedrooms: 3,
      bathrooms: 2,
      area: "150 m²",
    },
    {
      id: 3,
      image: Apartment,
      title: "Twinhouse",
      subtitle: "SODIC",
      price: "EGP 5,500,000",
      contient: "Sodic Ease",
      location: "New Heliopolis, Egypt",
      bedrooms: 3,
      bathrooms: 2,
      area: "150 m²",
    },
    {
      id: 4,
      image: Apartment,
      title: "Twinhouse",
      subtitle: "SODIC",
      price: "EGP 5,500,000",
      contient: "Sodic Ease",
      location: "New Heliopolis, Egypt",
      bedrooms: 3,
      bathrooms: 2,
      area: "150 m²",
    },
    {
      id: 5,
      image: Apartment,
      title: "Twinhouse",
      subtitle: "SODIC",
      price: "EGP 5,500,000",
      contient: "Sodic Ease",
      location: "New Heliopolis, Egypt",
      bedrooms: 3,
      bathrooms: 2,
      area: "150 m²",
    },
    {
      id: 6,
      image: Apartment,
      title: "Twinhouse",
      subtitle: "SODIC",
      price: "EGP 5,500,000",
      contient: "Sodic Ease",
      location: "New Heliopolis, Egypt",
      bedrooms: 3,
      bathrooms: 2,
      area: "150 m²",
    },
    {
      id: 7,
      image: Apartment,
      title: "Twinhouse",
      subtitle: "SODIC",
      price: "EGP 5,500,000",
      contient: "Sodic Ease",
      location: "New Heliopolis, Egypt",
      bedrooms: 3,
      bathrooms: 2,
      area: "150 m²",
    },
    {
      id: 8,
      image: Apartment,
      title: "Twinhouse",
      subtitle: "SODIC",
      price: "EGP 5,500,000",
      contient: "Sodic Ease",
      location: "New Heliopolis, Egypt",
      bedrooms: 3,
      bathrooms: 2,
      area: "150 m²",
    },
    {
      id: 9,
      image: Apartment,
      title: "Twinhouse",
      subtitle: "SODIC",
      price: "EGP 5,500,000",
      contient: "Sodic Ease",
      location: "New Heliopolis, Egypt",
      bedrooms: 3,
      bathrooms: 2,
      area: "150 m²",
    },
    {
      id: 10,
      image: Apartment,
      title: "Twinhouse",
      subtitle: "SODIC",
      price: "EGP 5,500,000",
      contient: "Sodic Ease",
      location: "New Heliopolis, Egypt",
      bedrooms: 3,
      bathrooms: 2,
      area: "150 m²",
    },
    {
      id: 11,
      image: Apartment,
      title: "Twinhouse",
      subtitle: "SODIC",
      price: "EGP 5,500,000",
      contient: "Sodic Ease",
      location: "New Heliopolis, Egypt",
      bedrooms: 3,
      bathrooms: 2,
      area: "150 m²",
    },
    {
      id: 12,
      image: Apartment,
      title: "Twinhouse",
      subtitle: "SODIC",
      price: "EGP 5,500,000",
      contient: "Sodic Ease",
      location: "New Heliopolis, Egypt",
      bedrooms: 3,
      bathrooms: 2,
      area: "150 m²",
    },
  ];
  const selectPageHandler = (index) => {
    setActivePage(index);
  };

  return (
    <Fragment>
      <div className="text-center px-6 sm:px-4 md:px-8 lg:px-10 xl:px-32 pt-6">
        <h2 className="font-semibold text-xl md:text-3xl lg:text-5xl lg:mb-4 px-4 sm:p-0 text-white">
          find the <span className="text-[red] font-bold">property</span> that
          <span className="text-[red] font-bold"> suits</span> you best
        </h2>
        <div className="grid grid-cols-[3fr,3fr] sm:grid-cols-[3fr,3fr,3fr,1fr] md:grid-cols-[4fr,3fr,4fr,1fr] lg:grid-cols-[4fr,2fr,4fr,1fr] gap-4 lg:gap-8 justify-center items-start mt-6 md:mt-8 lg:mt-16 mx-auto">
          <Dropdown
            content={[
              { id: 0, value: "Search" },
              { id: 1, value: "Find" },
              { id: 2, value: "Navigate" },
            ]}
            selectedValue={"Search"}
          />
          <Dropdown
            content={[
              { id: 0, value: "Property Type" },
              { id: 1, value: "Find" },
              { id: 2, value: "Navigate" },
            ]}
            selectedValue={"Property Type"}
          />
          <Dropdown
            content={[
              { id: 0, value: "Location" },
              { id: 1, value: "Find" },
              { id: 2, value: "Navigate" },
            ]}
            selectedValue={"Location"}
          />
          <div
            className="border-2 rounded-full border-[red] w-fit px-3 py-2 justify-self-center"
            onClick={undefined}
          >
            <i className="fa-solid fa-magnifying-glass text-2xl text-white"></i>
          </div>
        </div>
      </div>
      <div className="relative px-2 sm:px-4 lg:px-8">
        <div className="text-white text-center w-full">
          <h2 className="font-bold text-xl md:text-2xl lg:text-3xl mb-4 lg:mb-6 px-4 sm:p-0 grid-cols-3">
            {propertyData.length} results
          </h2>
        </div>

        {/* Search Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-8 xl:gap-10 px-6 sm:px-9 md:px-12 2xl:px-16">
          {propertyData.map((data, index) => {
            return <PropertyCard data={data} key={index} className="!w-full" />;
          })}
        </div>

        {/* Page Numbers */}
        <div className="flex items-center justify-center gap-4 w-full mt-4">
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
