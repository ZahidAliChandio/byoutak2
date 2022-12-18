import { useState } from "react";

const Delivery = (props) => {
  const [moveActive, setMoveActive] = useState(false);
  const [nearActive, setNearActive] = useState(false);
  const [anyActive, setAnyActive] = useState(false);

  const movNowHandler = () => {
    setMoveActive((prev) => !prev);
  };

  return (
    <div className="my-4">
      <h2 className="text-base md:text-3xl lg:text-4xl md:font-bold md:text-center md:mb-4 px-[3rem] md:p-0">
        Delivery date
      </h2>
      <form
        action=""
        className={`${props.display} grid grid-cols-2 gap-x-8 gap-y-10 justify-center items-center w-full md:border-t-2 px-[3rem] lg:px-12 py-4 md:py-12`}
      >
        <label htmlFor="movenow" className="cursor-pointer">
          <button
            htmlFor="movenow"
            className={`${
              moveActive
                ? "bg-[#212020] text-gray-50"
                : "bg-gray-300 text-[#212020]"
            } text-center w-full py-2 rounded-md cursor-pointer`}
            onClick={() => movNowHandler()}
          >
            Move now
            {/* <input type="checkbox" name="movenow" id="movenow" className="" /> */}
          </button>
        </label>
        <button
          className={`${
            nearActive
              ? "bg-[#212020] text-gray-50"
              : "bg-gray-300 text-[#212020]"
          } w-full py-2 rounded-md cursor-pointer`}
          onClick={() => setNearActive((prev) => !prev)}
        >
          Near delivery
        </button>
        <button
          className={`${
            anyActive
              ? "bg-[#212020] text-gray-50"
              : "bg-gray-300 text-[#212020]"
          } w-full py-2 rounded-md cursor-pointer`}
          onClick={() => setAnyActive((prev) => !prev)}
        >
          Any date
        </button>
        <select
          name="year"
          id="year"
          className="bg-gray-300 text-[#122020] py-2 rounded-md text-center"
        >
          <option value="delivery">Delivery Before</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>        
      </form>
    </div>
  );
};
export default Delivery;
