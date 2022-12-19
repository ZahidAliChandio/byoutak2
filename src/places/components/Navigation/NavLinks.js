import { NavLink } from "react-router-dom";

const NavLinks = (props) => {
  const lis = [
    { title: "Property", linkTo: "addProperty" },
    {
      title: "View all Properties",
      linkTo: "viewAllProperties",
    },
    { title: "Location", linkTo: "addLocation" },
    { title: "Amenity", linkTo: "addAmenities" },
    { title: "Unity Type", linkTo: "addUnitType" },
    { title: "Developer", linkTo: "addDeveloper" },
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
