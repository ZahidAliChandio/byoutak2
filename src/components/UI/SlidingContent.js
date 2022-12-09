import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import RightAngle from "../UI/RightAngle";

const SlidingContent = (props) => {
  const [isVisible, setIsVisible] = useState(true);

  const content = props.content;

  const toggleContent = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <AnimatePresence>
      <RightAngle/>
      <motion.div
        key="select"
        className={`flex flex-col items-center justify-center ${!content.subtitle?'mt-16':'mt-16 md:mt-6'} mx-auto w-10/12 md:w-[50%] text-center transition-all duration-300 z-0`}
        initial={{ transform: "translateX(100%)" }}
        animate={{ transform: "translateX(0%)" }}
        exit={{ transform: "translateX(100%)" }}
        transition={{ duration: 0.1, ease: "easeOut" }}
      >
        <div className="text-white text-center w-full">
          <div className="flex flex-col gap-8 w-full items-center">
            <h2 className="font-bold  px-6 sm:p-0 text-lg sm:text-xl md:text-2xl lg:text-3xl">
              {content.title}
            </h2>
            {content.input && (
              <div className="grid grid-cols-[4fr,1fr] justify-center w-[90%] lg:w-[70%]">
                <input
                  type="text"
                  id="visitors"
                  className="block w-full px-3 md:px-4 py-2.5 text-sm md:text-base bg-gray-50 outline-none  border-gray-300 text-gray-900 rounded-l-full"
                  placeholder="Enter Location, Compound, Developer"
                  required
                />
                <span className="flex items-center justify-center p-2.5 bg-[red] rounded-r-full w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.7"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </span>
              </div>
            )}
          </div>
          {content.subtitle && (
            <p className="mt-6 lg:mt-6 text-gray-300 text-lg md:text-xl">
              {content.subtitle}
            </p>
          )}
        </div>

        <div className="w-3/5 sm:w-1/2 md:w-1/2 xl:w-[30%] mt-8">
          <button
            id="dropdownDefault"
            data-dropdown-toggle="dropdown"
            className="flex justify-between text-gray-400 bg-zinc-50 focus:outline-none font-bold rounded-full text-sm px-5 py-3 text-center  items-center w-full"
            type="button"
            onClick={() => {
              toggleContent();
            }}
          >
            Choose One{" "}
            <svg
              className="ml-2 w-4 h-4"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          {/* Dropdown menu  */}
          <div
            id="dropdown"
            className={`${
              isVisible ? "visible" : "invisible"
            } font-bold mt-2 z-10 bg-white overflow-hidden rounded-xl divide-y divide-gray-100 w-full`}
          >
            <ul
              className="py-1 text-sm text-gray-700"
              aria-labelledby="dropdownDefault"
            >
              {content.lis.map((item, index) => {
                return (
                  <li key={index} className="my-1 md:my-2">
                    <Link
                      to={content.nextLink}
                      className="block py-2 px-4 hover:text-red-600 cursor-pointer"
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
export default SlidingContent;
