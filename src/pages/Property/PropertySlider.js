import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper";

import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PropertySlider = ({ data }) => {
  const images = data;
  return (
    <div className="relative">
      <Swiper
        pagination={{
          clickable: true,
        }}
        spaceBetween={30}
        effect={"fade"}
        modules={[Autoplay, EffectFade, Pagination]}
        className="mySwiper"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {data ? (
          images.map((data, index) => {
            return (
              <SwiperSlide className="" key={index}>
                <img
                  src={`${process.env.REACT_APP_ATLAS_URI}/file/${data}`}
                  alt="property"
                  className="w-full h-[18rem] md:h-[20rem]  lg:h-[28rem] 2xl:h-[32.5rem]"
                />
              </SwiperSlide>
            );
          })
        ) : (
          <div></div>
        )}
      </Swiper>
    </div>
  );
};
export default PropertySlider;
