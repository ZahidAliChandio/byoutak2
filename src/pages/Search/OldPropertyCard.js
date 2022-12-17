import { ReactComponent as Bed } from "../../static/icons/bed.svg";
import Phone from "../../static/icons/phone.png";
import { Link } from "react-router-dom";

const PropertyCard = ({ data }) => {
  return (
    <div className="bg-gray-50 rounded-3xl font-gillsans z-0 pb-3 w-full white-shadow">
      {/* Image portion */}
      <div className="h-[150px] bg-[#EFEFEF] rounded-t-3xl overflow-hidden w-fit cursor-pointer">
        <Link to="/property-page">
          {data.image && (
            <img
              src={data.image}
              alt="apartment"
              className="object-cover w-fit hover:scale-[1.19] transition-all duration-1000"
            />
          )}
        </Link>
      </div>

      {/* Conent portion */}
      <div className="px-4 sm:px-4">
        <div className="flex flex-col w-full mt-4 gap-0">
          <div className="flex justify-between w-full mb-2">
            <h3 className="font-bold text-lg text-[#411515]">Apartment</h3>
            <span className="text-gray-500">Delivery in 2026</span>
          </div>
          <div className="flex flex-col gap-[0.2rem] mb-10">
            <div className="flex justify-between items-center">
              <h3 className="text-xl sm:text-2xl font-bold text-[#ff4545]">
                {data.price}
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="gray"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>
            <span className="text-lg text-gray-700">Badya</span>
            <span className="text-gray-700">6th of October City, Egypt</span>
          </div>
        </div>
      </div>

      {/* property details */}
      <div className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-8  bg-gray-200 mb-4 w-full py-3 justify-center text-gray-700">
        <div className="flex items-center gap-2">
          <Bed />
          <span className="text-sm font-semibold">{data.bedrooms}</span>
        </div>
        <div className="flex items-center gap-2">
          <i className="fas fa-bath text-lg"></i>
          <span className="text-sm font-semibold">{data.bathrooms}</span>
        </div>
        <div className="flex items-center gap-2">
          <i className="far fa-square-full text-lg "></i>
          <span className="text-sm font-semibold ">{data.area}</span>
        </div>
      </div>

      {/* Contact buttons */}
      <div
        className={`grid grid-cols-3 gap-2 justify-between w-full mx-auto px-2`}
      >
        <div className="flex gap-2 items-center cursor-pointer py-0 justify-center border border-[#212020] rounded-full">
          <i className="fa-sharp fa-solid fa-video text-gray-400"></i>
          <span className={`text-[#212020] text-sm`}>Zoom</span>
        </div>

        <a
          href="tel:03482146022"
          className="flex items-center gap-2 py-0 border border-[#212020] rounded-full justify-center cursor-pointer"
        >
          <span>
            <img src={Phone} alt="phone" className="w-4 h-4" />
          </span>
          <span className={`text-[#212020] font-semibold text-sm`}>Call</span>
        </a>
        <a
          href="whatsapp://send?text=Lets chat!&phone=+923163366566"
          className="flex items-center gap-2 xl:gap-1 border border-[#212020] rounded-full justify-center cursor-pointer"
        >
          <i className="fa-brands fa-whatsapp text-lg text-gray-400"></i>
          <span className={`text-[#212020] font-semibold text-sm text-center`}>
            Whatsapp
          </span>
        </a>
      </div>
    </div>
  );
};
export default PropertyCard;
