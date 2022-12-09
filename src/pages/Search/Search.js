import { Fragment, useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import SearchBar from "./SearchBar";

import Apartment from "../../static/images/apartment.jpg";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

const Search = () => {
  const [activePage, setActivePage] = useState(0);
  const [showAll, setShowAll] = useState(false);
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

  useEffect(() => {
    if (showAll) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showAll]);

  return (
    <Fragment>
      <SearchBar showAll={showAll} setShowAll={setShowAll} />
      <div className="relative px-2 sm:px-4 lg:px-8 pt-4">
        <div className="text-white text-center w-full">
          <h2 className="font-bold text-xl md:text-2xl lg:text-3xl mb-4 lg:mb-6 px-4 sm:p-0 grid-cols-3">
            {propertyData.length} results
          </h2>
        </div>
        {/* Search Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-3">
          {propertyData.map((data, index) => {
            return <PropertyCard data={data} key={index} />;
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
export default Search;
