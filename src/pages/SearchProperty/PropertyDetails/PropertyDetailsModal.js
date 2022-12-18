import { useRef, useState } from "react";
import Modal from "../../../components/UI/Modal";
import RangeSlider from "react-range-slider-input";
import Button from "../../../components/UI/Button";
import "react-range-slider-input/dist/style.css";

const PropertyDetailsModal = (props) => {
  const [priceMinRange, setPriceMinRange] = useState(0);
  const [priceMaxRange, setPriceMaxRange] = useState(100);
  const [selectedBedrooms, setSelectedBedrooms] = useState(0);
  const [selectedBathrooms, setSelectedBathrooms] = useState(0);
  const [selectedCondition, setSelectedCondition] = useState(0);
  const price = useRef(null);
  const bedrooms = ["All", "1", "2", "3", "4", "5", "6+"];
  const bathrooms = ["All", "1", "2", "3", "4", "5", "6+"];
  const conditions = [" All ", "Finished", "Not Finished", "Semi Finished"];

  const changeValues = () => {
    setPriceMinRange((prev) => prev + price.current.value.min);
    setPriceMaxRange(price.current.value.max);
  };
  const bedroomSelectHandler = (index) => {
    setSelectedBedrooms(index);
  };
  const bathroomSelectHandler = (index) => {
    setSelectedBathrooms(index);
  };
  const conditionSelectHandler = (index) => {
    setSelectedCondition(index);
  };

  return (
    <Modal onClose={() => props.changeActiveItemIndex(null)}>
      <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl font-bold text-center my-4">
        Property details
      </h2>
      <div className="grid grid-cols-2 justify-center items-center rounded-xl overflow-hidden">
        <div className="flex flex-col justify-center gap-7 2xl:gap-10 border py-10 2xl:py-16 px-16 w-full h-full">
          <span className="text-[#212020] text-sm md:text-lg">Area</span>
          <RangeSlider
            className="h-1"
            step={1}
            ref={price}
            defaultValue={[0, 100]}
            value={[priceMinRange, priceMaxRange]}
            min="0"
            max="100"
            onInput={() => changeValues()}
          />
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="text-sm md:text-base text-gray-500">m2</span>
              <input
                type="text"
                placeholder={``}
                value={priceMinRange * 50000 + 70000}
                className="px-2 rounded-md border border-gray-500 text-gray-500 py-1 w-10/12"
              />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm md:text-base text-gray-500">m2</span>
              <input
                type="text"
                placeholder=""
                value={priceMaxRange * 50000 + 50000}
                className="px-2 rounded-md border border-gray-500 text-gray-500 py-1 w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-7 2xl:gap-10 border py-10 2xl:py-16 px-16 w-full h-full">
          <span className="text-[#212020] text-sm md:text-lg">Bedrooms</span>
          <ul
            className={`flex items-center justify-center rounded-lg overflow-hidden`}
          >
            {bedrooms.map((bedroom, index) => {
              return (
                <li
                  key={index}
                  className={`${
                    selectedBedrooms === index
                      ? "font-semibold bg-gray-200"
                      : ""
                  } py-2 border w-full h-full text-center text-sm cursor-pointer`}
                  onClick={() => bedroomSelectHandler(index)}
                >
                  {bedroom}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col justify-center gap-7 2xl:gap-10 border pb-8 2xl:pb-16 pt-8 px-10 w-full h-full">
          <span className="text-[#212020] text-sm md:text-lg">
            Delivery condition
          </span>
          <ul className={`flex flex-wrap items-center gap-4 overflow-hidden`}>
            {conditions.map((condition, index) => {
              return (
                <li
                  key={index}
                  className={`${
                    selectedCondition === index
                      ? "font-semibold bg-gray-200"
                      : ""
                  } p-2 border  text-center text-sm rounded-md cursor-pointer`}
                  onClick={() => conditionSelectHandler(index)}
                >
                  {condition}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col gap-7 2xl:gap-10 border py-10 2xl:py-16 px-16 w-full h-full">
          <span className="text-[#212020] text-sm md:text-lg">Bathrooms</span>
          <ul
            className={`flex items-center justify-center rounded-lg overflow-hidden`}
          >
            {bathrooms.map((bathroom, index) => {
              return (
                <li
                  key={index}
                  className={`${
                    selectedBathrooms === index
                      ? "font-semibold bg-gray-200"
                      : ""
                  } py-2 border w-full h-full text-center text-sm cursor-pointer`}
                  onClick={() => bathroomSelectHandler(index)}
                >
                  {bathroom}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex gap-6 items-center justify-center md:justify-end px-4 md:px-12 py-6">
        <Button
          type="clear"
          className="border !py-2 !px-4 xl:!px-7 !text-sm xl:!text-lg h-fit"
        >
          Clear all
        </Button>
        <Button
          type="submit"
          className="bg-[#212020] !text-sm xl:!text-lg text-gray-50 !py-2 !px-6 xl:!px-12 2xl:!px-12 h-fit"
        >
          Apply
        </Button>
      </div>
    </Modal>
  );
};

export default PropertyDetailsModal;
