import { Fragment, useEffect, useState } from "react";
import { useCallback } from "react";
import http from "../../utils/http";
import toast from "react-hot-toast";

import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Pagination, Navigation } from "swiper";

import NextBtn from "../../components/UI/PrevBtn";
import PrevBtn from "../../components/UI/NextBtn";
import SliderCard from "./SliderCard";
import Input from "./Input";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Dropdown from "../../components/UI/Dropdown";

const Slider = (props) => {
  const [locations, setLocations] = useState(null);

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
      .get(`${process.env.REACT_APP_ATLAS_URI}/getProperties/`, {
        params: {
          // page: page + 1,
          // limit: limit,
        },
      })
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
          // setTableBodyList(data.map(?=> ));
        } else toast.error(response?.data?.error?.message);
      })
      .catch((err) => toast.error(err.message));
  };
  useEffect(() => {
    getProperties();
  }, []);

  const [data, setData] = useState([
    {
      id: 1,
      img: null,
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
      img: null,
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
      img: null,
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
      img: null,
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
      img: null,
      title: "Twinhouse",
      subtitle: "SODIC",
      price: "EGP 5,500,000",
      contient: "Sodic Ease",
      location: "New Heliopolis, Egypt",
      bedrooms: 3,
      bathrooms: 2,
      area: "150 m²",
    },
  ]);
  return (
    <div className="relative px-2 sm:px-20 md:px-24 lg:px-32 xl:px-40 2xl:px-48 z-0 mt-6 md:mt-8 lg:mt-16">
      <div className="text-white text-center w-full">
        <h2 className="font-semibold text-xl md:text-3xl lg:text-5xl lg:mb-6 px-4 sm:p-0">
          find the <span className="text-[red] font-bold">property</span> that
          <span className="text-[red] font-bold">suits</span> you best
        </h2>
        <div className="grid grid-cols-[4fr,2fr,4fr,1fr] gap-8 justify-center items-start my-6 md:my-8 lg:mt-16 mx-auto">
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
            className="border-2 rounded-full border-[red] w-fit px-3 py-2"
            onClick={undefined}
          >
            <i className="fa-solid fa-magnifying-glass text-2xl"></i>
          </div>
        </div>
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
                <Link to="/property-page" className="w-full">
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
