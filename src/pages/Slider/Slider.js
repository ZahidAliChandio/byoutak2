import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Pagination, Navigation } from "swiper";
import NextBtn from "../../components/UI/PrevBtn";
import PrevBtn from "../../components/UI/NextBtn";
import SliderCard from "./SliderCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = (props) => {
  const data = [
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
  ];
  return (
    <div className="relative px-2 sm:px-20 md:px-24 lg:px-32 xl:px-40 2xl:px-48 z-0">
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
                <Link to="/property-page" className="w-full">
                  <SliderCard data={data}/>
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
