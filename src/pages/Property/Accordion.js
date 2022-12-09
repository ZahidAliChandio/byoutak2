import { Fragment, useState, useRef } from "react";
// import ParkingAreaFacility from "../../static/images/facilities.png?v=120.png";
import CafesFacility from "../../static/images/cafes_facility.png";
import ParkingAreaFacility from "../../static/images/parking_area_facility.png";
import ClubFacility from "../../static/images/club_facility.png";
import RestaurantFacility from "../../static/images/restaurant_facility.png";
import SecurityFacility from "../../static/images/security_facility.png";
import LocationPointer from "../../static/images/location_pointer.png";
import DeveloperLogo from "../../static/images/developer_logo.png";
import PropertyCard from "./PropertyCard";
import HydePark from "../../static/images/hyde_park.png";
import HydeParkLogo from "../../static/images/hyde_park_logo.png";
import Mivida from "../../static/images/mivida.png";
import MividaLogo from "../../static/images/mivida_logo.png";
import PropertyTabs from "./PropertyTabs";
import { CSSTransition } from "react-transition-group";

const Accordion = () => {
  const [accordianPlus, setAccordianPlus] = useState("closed");
  const nodeRef = useRef(null);
  const data = [
    {
      image: HydePark,
      logo: HydeParkLogo,
      title: "Mountain View Hyde Park",
      location: "New Cairo",
      price: "2,9,37,093 EGP",
    },
    {
      image: Mivida,
      logo: MividaLogo,
      title: "Mivida",
      location: "New Cairo",
      price: "2,9,37,093 EGP",
    },
    {
      image: HydePark,
      logo: HydeParkLogo,
      title: "Mountain View Hyde Park",
      location: "New Cairo",
      price: "2,9,37,093 EGP",
    },
    {
      image: Mivida,
      logo: MividaLogo,
      title: "Mivida",
      location: "New Cairo",
      price: "2,9,37,093 EGP",
    },
  ];
  // List items
  const [items, setItems] = useState([
    {
      title: "THE BROOKS Unit Types",
      content: (
        <div className="flex gap-4 items-center">
          <span
            className="bg-gray-200 p-2 rounded-full text-[red]"
            data-toggle="tooltip"
            title
            data-original-title="Cafes"
          >
            <img src={CafesFacility} alt="facility" className="cafe-facility" />
          </span>
          <span className="border bg-gray-200 p-2 rounded-full">
            <img
              src={ParkingAreaFacility}
              alt="facility"
              className="parking-facility"
            />
          </span>
          <span className="border bg-gray-200 p-2 rounded-full ">
            <img src={ClubFacility} alt="facility" className="club-facility" />
          </span>
          <span className="border bg-gray-200 p-2 rounded-full ">
            <img
              src={RestaurantFacility}
              alt="facility"
              className="restaurant-facility"
            />
          </span>
          <span className="border bg-gray-200 p-2 rounded-full ">
            <img
              src={SecurityFacility}
              alt="facility"
              className="security-facility"
            />
          </span>
        </div>
      ),
      isActive: false,
    },
    {
      title: "THE BROOKS Unit Types",
      content: <PropertyTabs />,
      isActive: false,
    },
    {
      title: "THE BROOKS Location",
      content: (
        <div className="relative overflow-hidden min-h-[300px] h-full">
          <div className="map">
            <div className="flex flex-col items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
              <img src={LocationPointer} alt="pointer" />
              <button className="text-gray-50 bg-[#212020] px-2 py-1 rounded-full">
                Show Location on Map
              </button>
            </div>
          </div>
          <div id="google-map"></div>
        </div>
      ),
      isActive: false,
    },
    {
      title: "Project Developer",
      content: (
        <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-8 md:gap-12 lg:gap-16">
          <img src={DeveloperLogo} alt="developer" />
          <p className="text-gray-50">
            PRE was established in 2017 by Pioneers Holding Group with a plan to
            be one of the market leaders in the Egyptian Real Estate field, Our
            Sister Companies: Cairo Housing – Giza General Contracting – Rooaya
            Group – Electro Cable Egypt – United Housing – ...{" "}
            <a href="/">
              <u>read more</u>
            </a>
          </p>
          <button className="text-[#212020] bg-gray-50 p-3 sm:p-4 md:p-5 rounded-full">
            <span>ASK NOW</span>
          </button>
        </div>
      ),
      isActive: false,
    },
    // {
    //   title: "You May Also Like",
    //   content: (
    //     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    //       {data.map((item, index) => {
    //         return <PropertyCard data={item} key={index} />;
    //       })}
    //     </div>
    //   ),
    //   isActive: false,
    // },
  ]);

  const onClickHandler = (index) => {
    if (accordianPlus === "opened") {
      setAccordianPlus("closed");
    } else {
      setAccordianPlus("opened");
    }
    const newItems = [...items];
    newItems[index].isActive = !newItems[index].isActive;
    setItems(newItems);
  };
  const renderedItems = items.map((item, index) => {
    return (
      <Fragment key={index}>
        <div
          className={`flex gap-3 items-center text-lg md:text-xl xl:text-2xl border-b border-gray-400 text-gray-50 py-4 cursor-pointer mb-3 font-gillsans`}
          onClick={() => onClickHandler(index)}
        >
          <div>
            <div
              className={`circle-plus ${
                items[index].isActive ? accordianPlus : null
              }`}
            >
              <div className="circle">
                <div className="horizontal"></div>
                <div className="vertical"></div>
              </div>
            </div>
            <div
              className={`circle-plus-two ${
                items[index].isActive ? accordianPlus : null
              }`}
            >
              <div className={`circle`}>
                <div className="horizontal"></div>
                <div className="vertical"></div>
              </div>
            </div>
          </div>
          <span>{item.title}</span>
        </div>
        <CSSTransition
          in={items[index].isActive}
          timeout={200}
          nodeRef={nodeRef}
          classNames="accordian"
          mountOnEnter
          unmountOnExit
        >
          <div className={`text-gray-50 pl-4 md:pl-8 lg:pl-12 my-8`}>
            {item.content}
          </div>
        </CSSTransition>
      </Fragment>
    );
  });
  return (
    <div className="mt-2 px-2 sm:px-8 mx:px-10 lg:px-20">{renderedItems}</div>
  );
};

export default Accordion;
