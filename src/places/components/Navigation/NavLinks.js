import { NavLink } from "react-router-dom";

import addProperty from "../../../static/icons/add-property.png";
import amenity from "../../../static/icons/amenity.png";
import unitType from "../../../static/icons/unit-type.png";

const NavLinks = (props) => {
  const lis = [
    {
      title: "Property",
      linkTo: "addProperty",
      // icon: <i className="fas fa-home"></i>,
      icon: (
        <img src={addProperty} alt="Add Property" className="w-6 invert"></img>
      ),
    },
    {
      title: "View all Properties",
      linkTo: "viewAllProperties",
      icon: <i className="fas fa-home text-lg"></i>,
    },
    {
      title: "Location",
      linkTo: "addLocation",
      icon: <i className="fas fa-map-marker-alt text-lg pl-1"></i>,
    },
    {
      title: "Amenity",
      linkTo: "addAmenities",
      icon: <img src={amenity} alt="Amenity" className="w-5 invert" />,
    },
    {
      title: "Unity Type",
      linkTo: "addUnitType",
      icon: <img src={unitType} alt="Unit Type" className="w-5 invert" />,
    },
    {
      title: "Developer",
      linkTo: "addDeveloper",
      icon: <i className="fas fa-user-plus text-lg"></i>,
    },
  ];

  return (
    <ul
      className="flex flex-col gap-1 text-gray-300 my-4 font-semibold w-full h-full"
      onMouseEnter={!props.isButtonClicked ? props.openDrawer : undefined}
      onMouseLeave={!props.isButtonClicked ? props.closeDrawer : undefined}
    >
      {lis.map((content, index) => (
        <li key={index} className="">
          <NavLink
            to={content.linkTo}
            // className="flex items-center gap-4 text-gray-300 text-xs w-[200px] pl-4 hover:text-[color:var(--red-color)]"
            className={`flex items-center gap-5 w-[230px]                 
                  border-[3px] border-transparent  text-xs bg-transparent py-[10px] cursor-pointer font-gillsans px-2 text-white 
                  hover:border-l-[color:var(--red-color)] hover:text-[color:var(--red-color)]  hover:bg-[#070707] hover:pl-[0.88rem]`}
          >
            {/* <div className="">
              <i className="fas fa-chevron-right w-1"></i>
              <i className="fas fa-chevron-right w-1"></i>
            </div> */}
            {content.icon}
            <div className="cursor-pointer">{content.title}</div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
