import { useState, useRef } from "react";
import Modal from "../../../components/UI/Modal";
import Button from "../../../components/UI/Button";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";


const PriceModal = (props) => {
  const [yearCounter, setYearCounter] = useState(1);
  const [priceMinRange, setPriceMinRange] = useState(0);
  const [priceMaxRange, setPriceMaxRange] = useState(100);
  const price = useRef(null);

  const decreaseHandler = () => {
    setYearCounter((prev) => prev - 1);
  };
  const increaseHandler = () => {
    setYearCounter((prev) => prev + 1);
  };
  const changeValues = () => {
    if(price.current.lastValueProp)
    setPriceMinRange(price.current.value.min);
    console.log(price.current);
    setPriceMaxRange(price.current.value.max);
  };

  return (
    <Modal onClose={() => props.changeActiveItemIndex(null)} className="!w-3/5 lg:!w-fit !top-24">
      <h2 className="text-lg sm:text-base lg:text-lg xl:text-3xl font-bold text-center my-3 xl:my-6">
        Price
      </h2>
      <div className="grid grid-cols-2 justify-center items-center overflow-hidden">
        <div className="flex flex-col justify-center gap-7 border pb-16 pt-6 px-8 lg:px-10 w-full h-full">
          <span className="text-[#212020] text-base lg:text-lg xl:text-lg">
            Price Range
          </span>
          <RangeSlider
            className="h-1"
            step={3}
            ref={price}
            defaultValue={[0, 100]}
            value={[priceMinRange, priceMaxRange]}
            min="0"
            max="100"
            onInput={() => changeValues()}
            onThonRangeDragStart={() => changeValues()}
          />
          <div className="flex items-center gap-3 lg:gap-4">
            <div className="flex items-center gap-2 lg:gap-4">
              <span className="text-xxs lg:text-sm text-gray-500">
                EGP
              </span>
              <input
                type="text"
                placeholder={``}
                value={900000}
                className="px-2 rounded-md border border-gray-500 text-gray-500 py-0 lg:py-1 w-full lg:w-10/12"
              />
            </div>
            <div className="flex items-center gap-2 lg:gap-4">
              <span className="text-xxs lg:text-sm text-gray-500">
                EGP
              </span>
              <input
                type="text"
                placeholder=""
                value={priceMaxRange}
                className="px-2 rounded-md border border-gray-500 text-gray-500 py-0 lg:py-1 w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-7 border pb-16 pt-4 px-8 lg:px-10 w-full h-full">
          <span className="text-[#212020] text-base lg:text-lg xl:text-lg">
            Down payment
          </span>
          <RangeSlider className="h-1" />
          <div className="flex items-center gap-3 lg:gap-4">
            <div className="flex items-center gap-2 lg:gap-4">
              <span className="text-xxs lg:text-sm text-gray-500">
                EGP
              </span>
              <input
                type="text"
                placeholder="700,00"
                className="px-2 rounded-md border border-gray-500 text-gray-500 py-0 lg:py-1 w-full lg:w-10/12"
              />
            </div>
            <div className="flex items-center gap-2 lg:gap-4">
              <span className="text-xxs lg:text-sm text-gray-500">
                EGP
              </span>
              <input
                type="text"
                placeholder="20,000,000"
                className="px-2 rounded-md border border-gray-500 text-gray-500 py-0 lg:py-1 w-full lg:w-10/12"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-7 border pb-16 pt-6 px-8 lg:px-10 w-full h-full">
          <span className="text-[#212020] text-base lg:text-lg xl:text-lg">
            Monthly installments
          </span>
          <RangeSlider className="h-1" />
          <div className="flex items-center gap-3 lg:gap-4">
            <div className="flex items-center gap-2 lg:gap-3">
              <span className="text-xxs lg:text-sm  text-gray-500">
                EGP
              </span>
              <input
                type="text"
                placeholder="700,00"
                className="px-2 rounded-md border border-gray-500 text-gray-500 py-0 lg:py-1 w-full lg:w-10/12"
              />
            </div>
            <div className="flex items-center gap-2 lg:gap-3">
              <span className="text-xxs lg:text-sm  text-gray-500">
                EGP
              </span>
              <input
                type="text"
                placeholder="20,000,000"
                className="px-2 rounded-md border border-gray-500 text-gray-500 py-0 lg:py-1 w-full lg:w-10/12"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start gap-7  border pb-16 pt-6  px-8 lg:px-10  w-full h-full">
          <h3 className="text-[#212020] text-base lg:text-lg xl:text-lg">
            Installment years
          </h3>
          <div className="flex justify-center items-center gap-2 lg:gap-4 xl:gap-6">
            <div className="cursor-pointer" onClick={() => decreaseHandler()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="gray"
                className="w-6 lg:w-7 h-6 lg:h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <span className="text-sm lg:text-lg  text-gray-500">
              {yearCounter}+ Years
            </span>
            <div className="cursor-pointer" onClick={() => increaseHandler()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="gray"
                className="w-6 lg:w-7 h-6 lg:h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-6 justify-center md:justify-end px-2 md:px-6 py-6">
        <Button type="clear" className="border !px-12 !text-sm">
          Clear all
        </Button>
        <Button
          type="submit"
          className="bg-[#212020] !text-sm text-gray-50 !px-12"
        >
          Apply
        </Button>
      </div>
    </Modal>
  );
};
export default PriceModal;
