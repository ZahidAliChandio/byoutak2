import { useContext, useEffect, useState } from "react";
import { useCallback } from "react";
import http from "../../utils/http";
import toast from "react-hot-toast";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Pagination, Navigation } from "swiper";

import NextBtn from "../../components/UI/PrevBtn";
import PrevBtn from "../../components/UI/NextBtn";
import SliderCard from "./SliderCard";
import { SelectContext } from "../../context/user-select";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = (props) => {
  const [locations, setLocations] = useState(null);
  const [data, setData] = useState([{}]);

  const selectContext = useContext(SelectContext);
  const { value } = selectContext;

  const getLocations = useCallback(() => {
    http
      .get(`${process.env.REACT_APP_ATLAS_URI}/getLocations/`)
      .then((response) => {
        if (response.status === 200) {
          const results = response?.data?.results;
          setLocations(results);
        } else toast.error(response?.data?.error?.message);
      })
      .catch((err) => toast.error(err.message));
  }, []);

  useEffect(() => {
    getLocations();
  }, [getLocations]);

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
              price: "EGP 5,500,000",
              contient: element.State,
              location: `${element.City}, ${element.Country}`,
              bedrooms: 3,
              bathrooms: 2,
              area: "150 m²",
            });
          });
          setData(list);
        } else toast.error(response?.data?.error?.message);
      })
      .catch((err) => toast.error(err.message));
  };
  useEffect(() => {
    getProperties();
  }, []);

  useEffect(() => {
    console.log(value);
  });
  return (
    <div className="relative px-2 sm:px-20 md:px-24 lg:px-32 xl:px-40 2xl:px-48 z-0 mt-6 md:mt-8 lg:mt-16">
      <div className="text-white text-center w-full">
        <h2 className="font-bold text-xl md:text-2xl lg:text-3xl lg:mb-6 px-4 sm:p-0">
          HERE ARE THE PROJECTS THAT SUIT YOUR NEEDS
        </h2>
        <p className="mb-2 lg:mb-4 text-gray-300 text-lg md:text-xl">
          Select one of the options below
        </p>
      </div>
      <div className="md:relative w-full">
        <Swiper
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Navigation, Pagination]}
          className="!relative md:!static mySwiper !py-4"
          breakpoints={{
            1536: {
              slidesPerView: data.length >= 4 ? 4 : data.length,
            },
            1280: {
              slidesPerView: data.length >= 3 ? 3 : data.length,
            },
            1024: {
              slidesPerView: data.length >= 2 ? 2 : data.length,
            },
            768: {
              slidesPerView: data.length >= 2 ? 2 : data.length,
            },
          }}
          spaceBetween={10}
        >
          <div className="absolute flex justify-between w-full top-1/2 z-50">
            <NextBtn />
            <PrevBtn />
          </div>
          {data.map((data) => {
            return (
              <SwiperSlide
                className="flex justify-center text-left rounded-xl z-0 w-full mb-6 md:mb-10"
                key={data.id}
              >
                <Link to="/property" className="w-full">
                  <SliderCard data={data} />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
export default Slider;
