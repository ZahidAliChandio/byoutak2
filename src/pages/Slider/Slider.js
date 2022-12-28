import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../../utils/http";
import toast from "react-hot-toast";

import SliderCard from "./SliderCard";
import { SelectContext } from "../../context/user-select";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = (props) => {
  const [data, setData] = useState(null);
  const [pageNo, setPageNo] = useState(1);
  const [limit, setLimit] = useState(4);

  const navigate = useNavigate();

  const [pageNumbers, setPageNumbers] = useState([]);

  useEffect(() => {
    const pageNos = [];
    for (let pageNo = 1; pageNo <= limit; pageNo++) {
      pageNos.push(`${pageNo}`);
    }
    setPageNumbers(pageNos);
  }, [limit]);

  const selectContext = useContext(SelectContext);
  const { value } = selectContext;

  const getProperties = () => {
    http
      .get(`${process.env.REACT_APP_ATLAS_URI}/getProperties/`, {
        params: { limit: limit, page: pageNo },
      })
      .then((response) => {
        const data = response.data;
        if (response.status === 200) {
          const list = [];
          setPageNumbers([...Array(Math.ceil(data.count / 4))]);
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
  useEffect(() => {
    getProperties();
  }, [pageNo]);

  const propertyClickHandler = (id) => {
    console.log(id);
    navigate(`/property`, {
      state: id,
    });
    console.log(id);
  };

  const leftClickHandler = () => {
    setPageNo((prev) => prev - 1);
  };

  const rightClickHandler = () => {
    setPageNo((prev) => prev + 1);
  };

  const selectPageHandler = (index) => {
    setPageNo(index + 1);
  };

  useEffect(() => {
    console.log(value);
  }, []);
  return (
    <div className="relative px-2 sm:px-6 md:px-10 lg:px-16 z-0 mt-6 md:mt-8 lg:mt-16">
      <div className="text-white text-center w-full">
        <h2 className="font-bold text-xl md:text-2xl lg:text-3xl mb-4 lg:mb-6 px-4 sm:p-0">
          HERE ARE THE PROJECTS THAT SUIT YOUR NEEDS
        </h2>
        <p className="mb-2 lg:mb-4 text-gray-300 text-lg md:text-xl">
          Select one of the options below
        </p>
      </div>
      <div className="flex items-center gap-4">
        <i
          className="fa fa-chevron-left fa-2xl text-[red] cursor-pointer"
          aria-hidden="true"
          onClick={leftClickHandler}
        ></i>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 w-full mt-4">
          {data &&
            data.map((data, index) => {
              return (
                <SliderCard
                  data={data}
                  key={index}
                  className="!w-full"
                  onClick={propertyClickHandler}
                />
              );
            })}
        </div>
        <i
          className="fa fa-chevron-right fa-2xl text-[red] cursor-pointer"
          aria-hidden="true"
          onClick={rightClickHandler}
        ></i>
      </div>

      {/* Page Numbers */}
      <div className="flex items-center justify-center gap-4 w-full mt-4">
        {pageNumbers.map((pageNumber, index) => {
          return (
            <button
              key={index}
              className={`${
                pageNo - 1 === index
                  ? "bg-[red] text-gray-50"
                  : "bg-gray-50 text-[#212020]"
              } rounded-full font-semibold p-2`}
              onClick={() => selectPageHandler(index)}
            ></button>
          );
        })}
      </div>
    </div>
  );
};
export default Slider;
