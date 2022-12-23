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
  const selectPageHandler = (index) => {
    setActivePage(index);
  };

  useEffect(() => {
    console.log(value);
  });
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
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 w-full mt-10">
        {data &&
          data.map((item, index) => (
            <SliderCard
              key={index}
              data={item}
              className="!w-11/12 !sm:w-full"
              onClick={onClickHandler}
            />
          ))}
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
  );
};
export default Slider;
