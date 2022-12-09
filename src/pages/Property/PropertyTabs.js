import { Fragment, useState, useRef } from "react";
import { Transition } from "react-transition-group";
const PropertyTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSubItemIndex, setActiveSubItemIndex] = useState(null);
  const nodeRef = useRef(null);

  const list = ["Villa", "Townhouse", "Penthouse", "Apartment"];

  //   Sublist data
  const subList = [
    {
      subList: [
        {
          title: "Brooks Villa A",
          content: [
            { AreaFrom: "992 ㎡", AreaTo: "440 ㎡", Price: "9,900,000 EGP" },
          ],
        },
        {
          title: "Brooks Villa B",
          content: [
            { AreaFrom: "236 ㎡", AreaTo: "380 ㎡", Price: "7,900,000 EGP" },
          ],
        },
      ],
    },
    {
      subList: [
        {
          title: "Town House Corner",
          content: [
            { AreaFrom: "191 ㎡", AreaTo: "220 ㎡", Price: "5,450,000 EGP" },
          ],
        },
        {
          title: "Town House Middle",
          content: [
            { AreaFrom: "191 ㎡", AreaTo: "200 ㎡", Price: "4,850,000 EGP" },
          ],
        },
      ],
    },
    {
      subList: [
        {
          title: "Pent House",
          content: [{ AreaFrom: "214 ㎡", Price: "3,700,000 EGP" }],
        },
        {
          title: "Pent House",
          content: [{ AreaFrom: "217 ㎡", Price: "3,800,000 EGP" }],
        },
      ],
    },
    {
      subList: [
        {
          title: "2 Bedrooms",
          content: [{ AreaFrom: "115 ㎡", Price: "1,690,000 EGP" }],
        },
        {
          title: "3 Bedrooms",
          content: [{ AreaFrom: "135 ㎡", Price: "1,990,000 EGP" }],
        },
      ],
    },
  ];

  const activeSubList = subList[activeIndex].subList;
  const onClickHandler = (index) => {
    setActiveIndex(index);
  };
  const subListClickHandler = (index) => {
    setActiveSubItemIndex((prev) => (prev === index ? null : index));
  };

  return (
    <Fragment>
      <ul className="flex w-fit">
        {list.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => onClickHandler(index)}
              className={`${
                activeIndex === index
                  ? "font-bold border border-b-0"
                  : "border-b"
              }  px-8 py-2`}
            >
              {item}
            </li>
          );
        })}
      </ul>
      {activeSubList.map((item, index) => {
        return (
          <Fragment key={index}>
            <div
              className={`relative flex items-center justify-between text-sm md:text-base 2xl:text-lg border bg-gray-300 py-2 cursor-pointer font-gillsans px-4 mt-4 text-[#212020]`}
              onClick={() => subListClickHandler(index)}
            >
              <span>{item.title}</span>
              <div className="flex gap-12 items-center">
                <i
                  className={`fas fa-chevron-down ${
                    activeSubItemIndex === index ? "rotate-180" : "rotate-0"
                  } transition-all duration-500`}
                ></i>
              </div>
            </div>
            <Transition
              in={activeSubItemIndex === index}
              timeout={{ enter: 600, exit: 5000 }}
              nodeRef={nodeRef}
              mountOnEnter
              unmountOnExit
            >
              {(state) => (
                <div
                  className={`${
                    state === "entering"
                      ? "open-accordion"
                      : state === "exiting"
                      ? "close-accordion"
                      : null
                  } my-4 pl-2 sm:pl-4 md:pl-8`}
                >
                  {item.content.map((subitem, index) => {
                    return (
                      <ul className="text-gray-300" key={index}>
                        <li>
                          <div className="inline-block w-2 h-2 bg-gray-300 mr-3 border border-[#212020] rounded-full"></div>
                          <span>Area From: </span>
                          <span>{subitem.AreaFrom}</span>
                        </li>
                        {subitem.AreaTo && (
                          <li>
                            <div className="inline-block w-2 h-2 bg-gray-300 mr-3 border border-[#212020] rounded-full"></div>
                            <span>Area To: </span>
                            <span>{subitem.AreaTo}</span>
                          </li>
                        )}
                        <li>
                          <div className="inline-block w-2 h-2 bg-gray-300 mr-3 border border-[#212020] rounded-full"></div>
                          <span>Starting Price: </span>
                          <span>{subitem.Price}</span>
                        </li>
                      </ul>
                    );
                  })}
                </div>
              )}
            </Transition>
          </Fragment>
        );
      })}
    </Fragment>
  );
};
export default PropertyTabs;
