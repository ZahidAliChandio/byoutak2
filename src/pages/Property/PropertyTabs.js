import { Fragment, useCallback, useState, useEffect, useRef } from "react";
import http from "../../utils/http";
import toast from "react-hot-toast";
import { Transition } from "react-transition-group";
import { fCurrency } from "../../utils/formatNumber";

const PropertyTabs = (props) => {

  const propertyData = props.data;
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSubItemIndex, setActiveSubItemIndex] = useState(null);

  const [unitTypes, setUnitTypes] = useState(null);
  const [subListItem, setSubListItem] = useState(propertyData);

  const propertyUnitTypes = props.data?.map(x => x.UnitType)
  // {console.log(propertyData.id.Unit_PropertyType)}
  const nodeRef = useRef(null);

  const createSubLists = () => {
    return propertyUnitTypes.map((type) => {
      return {
        subList: propertyData
          .filter((x) => x.UnitType === type)
          .map((y) => {
            return {
              title: y.UnitName,
              content: [
                { AreaFrom: `${y.AreaFrom} ㎡`, AreaTo: `${y.AreaTo} ㎡`, Price: `${fCurrency(y.Price)}`, }
              ]
            }
          })
      }
    })
  }
  const subList = createSubLists()


  const activeSubList = subList[activeIndex].subList;
  const onClickHandler = (index) => {
    setActiveIndex(index);
  };
  const subListClickHandler = (index) => {
    setActiveSubItemIndex((prev) => (prev === index ? null : index));
  };

  const getUnitTypes = useCallback(() => {
    http
      .get(`${process.env.REACT_APP_ATLAS_URI}/getUnitTypes/`)
      .then((response) => {
        if (response.status === 200) {
          const results = response?.data?.results;
          setUnitTypes(results);
        } else toast.error(response?.data?.error?.message);
      })
      .catch((err) => toast.error(err.message));
  }, []);

  useEffect(() => {
    getUnitTypes();
  }, [getUnitTypes]);

  useEffect(() => {
    // console.log();
  }, []);

  return (
    <Fragment>
      <ul className="flex flex-shrink w-fit">
        {unitTypes &&
          unitTypes.map((item, index) => {
            if (propertyUnitTypes.includes(item._id))
              return (
                <li
                  key={index}
                  onClick={() => onClickHandler(index)}
                  className={`${activeIndex === index
                      ? "font-bold border border-b-0"
                      : "border-b"
                    } px-2 sm:px-8 py-2 cursor-default border-[red]`}
                >
                  {item.Name}
                </li>
              );
          })}
      </ul>
      {activeSubList.map((item, index) => {
        return (
          <Fragment key={index}>
            <div
              className={`relative border flex items-center justify-between text-sm md:text-base 2xl:text-lg border bg-gray-300 py-2 cursor-pointer font-gillsans px-4 mt-4 text-[#212020] w-full`}
              onClick={() => subListClickHandler(index)}
            >
              <span>{item.title}</span>
              <div className="flex gap-12 items-center">
                <i
                  className={`fas fa-chevron-down ${activeSubItemIndex === index ? "rotate-180" : "rotate-0"
                    } transition-all duration-500`}
                ></i>
              </div>
            </div>
            <Transition
              in={activeSubItemIndex === index}
              timeout={{ enter: 600, exit: 500 }}
              nodeRef={nodeRef}
              mountOnEnter
              unmountOnExit
            >
              {(state) => (
                <div
                  className={`${state === "entering"
                      ? "open-accordion"
                      : state === "exiting"
                        ? "close-accordion"
                        : null
                    } my-4 pl-2 sm:pl-4 md:pl-8`}
                >
                  {item.content.map((subitem, index) => {
                    return (
                      <ul className="text-white" key={index}>
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
                          <span>Price: </span>
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