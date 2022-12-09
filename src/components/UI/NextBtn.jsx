import { React } from "react";
import { useSwiper } from "swiper/react";

const PrevBtn = (props) => {
  const swiper = useSwiper();

  return (
    <button
      className={`${props.className} m-0 md:-mr-10 z-20`}
      onClick={() => swiper.slideNext()}
    >
      <i className="fa fa-chevron-right fa-2xl text-[red]" aria-hidden="true"></i>
    </button>
  );
};

export default PrevBtn;
