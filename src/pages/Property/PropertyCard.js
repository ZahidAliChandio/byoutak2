import { ReactComponent as Bed } from "../../static/icons/bed.svg";
import Contact from "../../components/UI/Contact";
<<<<<<< HEAD
import { Fragment } from "react";
=======
import { fCurrency } from "../../utils/formatNumber";
>>>>>>> f8e1d23268ffa861343a5ca60d9e85f86fd9a99e

const PropertyCard = (props) => {
  const data = props.data;
  return (
<<<<<<< HEAD
    <Fragment>
      {data ? (
        <div
          className={`${props.className} px-4 sm:px-8 xl:px-12 py-5 sm:py-7 rounded-md font-gillsans mx-auto w-full text-white`}
        >
          <h2 className="text-5xl font-bold my-8 sm:my-12">{data.title}</h2>
          <div className="flex flex-col gap-0">
            <h3 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-[red]">
              {data.price}
            </h3>
            <span className="text-xl md:text-2xl">{data.continent}</span>
          </div>
          <div className="flex flex-col gap-6 mt-8">
            <div className="flex gap-0 sm:gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.3}
                stroke="#ffffff"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <span className="text-sm sm:text-base">{data.location}</span>
            </div>
            <div className="flex gap-2 sm:gap-4 pl-0 sm:pl-2">
              <div className="flex items-center gap-2">
                <Bed />
                <span className="text-sm font-semibold">{data.bedrooms}</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-bath text-lg"></i>
                <span className="text-sm font-semibold">{data.bathrooms}</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="far fa-square-full text-lg"></i>
                <span className="text-sm font-semibold">{data.area}</span>
              </div>
            </div>
            <Contact />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </Fragment>
=======
    <div
      className={`${props.className} relative px-4 sm:px-8 xl:px-12 py-5 sm:py-7 rounded-md font-gillsans mx-auto min-h-[400px] w-full text-white`}
    >
      <h2 className="text-6xl font-bold my-5 sm:my-8">{data.title}</h2>
      <div className="flex flex-col gap-0">
        <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[red] mt-5">
          {fCurrency(data.price)}
        </h3>
        <span className="text-2xl md:text-3xl mt-2">{data.type}</span>
      </div>
      <div className="flex flex-col  absolute bottom-0 gap-8">
        <div className="space-y-2">
        <div className="flex gap-0 sm:gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.3}
            stroke="#ffffff"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <span className="text-sm sm:text-base">{data.location}</span>
        </div>
        <div className="flex gap-2 sm:gap-4 pl-0 sm:pl-2">
            <div className="flex items-center gap-2 py-2 pr-2">
            <Bed />
            <span className="text-sm font-semibold">{data.bedrooms}</span>
          </div>
            <div className="flex items-center gap-2 py-2 pr-2">
            <i className="fas fa-bath text-lg"></i>
            <span className="text-sm font-semibold">{data.bathrooms}</span>
          </div>
            <div className="flex items-center gap-2 py-2 pr-2">
            <i className="far fa-square-full text-lg"></i>
            <span className="text-sm font-semibold">{data.area}</span>
          </div>
        </div>
        </div>
        <Contact />
      </div>
    </div>
>>>>>>> f8e1d23268ffa861343a5ca60d9e85f86fd9a99e
  );
};
export default PropertyCard;
