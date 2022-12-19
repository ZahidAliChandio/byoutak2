import { Fragment, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const NavLinks = (props) => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);
  const nodeRef = useRef(null);
  // const lis = [
  //   {
  //     title: "Dashboard",
  //     iconClass: "fas fa-tachometer-alt-fast",
  //     isLi: false,
  //   },
  //   {
  //     title: "Projects",
  //     iconClass: "fas fa-flag",
  //     isLi: true,
  //   },
  //   {
  //     title: "Properties",
  //     iconClass: "fas fa-building",
  //     isLi: true,
  //   },
  //   {
  //     title: "Masters",
  //     iconClass: "fa-solid fa-gear",
  //     isLi: true,
  //   },
  // ];
  const lis = [
    { title: "Add New Property", linkTo: "addProperty" },
    {
      title: "View all Properties",
      linkTo: "viewAllProperties",
    },
    { title: "Add Location", linkTo: "addLocation" },
    { title: "Add Amenities", linkTo: "addAmenities" },
    { title: "Add Unity Type", linkTo: "addUnitType" },
    { title: "Add Developer", linkTo: "addDeveloper" },
  ];

  return (
    <ul className="flex flex-col gap-1 text-gray-300 my-4 font-semibold w-full">
      {lis.map((content, index) => (
        <li key={index} className="" ref={nodeRef}>
          <NavLink
            to={content.linkTo}
            // className="flex items-center gap-4 text-gray-300 text-xs w-[200px] pl-4 hover:text-[color:var(--red-color)]"
            className={`flex items-center gap-4 w-[230px]                 
                  border-[3px] border-transparent  text-xs bg-transparent py-[10px] cursor-pointer font-gillsans px-3 text-white 
                  hover:border-l-[color:var(--red-color)] hover:text-[color:var(--red-color)]  hover:bg-[#070707] hover:pl-[0.88rem]`}
          >
            <div className="">
              <i className="fas fa-chevron-right w-1"></i>
              <i className="fas fa-chevron-right w-1"></i>
            </div>
            <div className="cursor-pointer">{content.title}</div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
