import { React } from "react";
import { useSwiper } from "swiper/react";

const NextBtn = (props) => {
  const swiper = useSwiper();

  return (
    <button
      className={`${props.className} m-0 md:-ml-10 z-20`}
      onClick={() => swiper.slidePrev()}
    >
      <i className="fa fa-chevron-left fa-2xl text-[red]" aria-hidden="true"></i>
    </button>
  );
};

export default NextBtn;
