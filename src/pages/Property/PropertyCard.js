import Contact from "../../components/UI/Contact";
import { fCurrency } from "../../utils/formatNumber";
import yearsOnInstallment from "../../static/icons/years-on-installment.png";
import downPayment from "../../static/icons/down-payment.png";

const PropertyCard = (props) => {
  const data = props.data;
  return (
    <div
      className={`${props.className} relative px-4 sm:px-8 xl:px-12 py-5 sm:py-7 rounded-md font-gillsans mx-auto min-h-[400px] w-full text-white`}
    >
      <h2 className="text-6xl font-bold my-5 sm:my-8">{data.title}</h2>
      <div className="flex flex-col gap-0 mb-4">
        <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[red] mt-5">
          {fCurrency(data.price)}
        </h3>
        <span className="text-2xl md:text-3xl mt-2">{data.type}</span>
      </div>
      <div className="relative flex flex-col gap-7 lg:mt-10">
        <div className="space-y-4">
          <div className="flex gap-0 sm:gap-2 -left-1 mt-4 lg:left-0">
            {/* location icon */}
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
          <div className="flex gap-2 sm:gap-3 w-full">
            <div className="flex items-center gap-2 pr-2">
              <img
                src={yearsOnInstallment}
                alt="Intallment Years"
                className="w-10 bg-transparent invert"
              />
              <span className="text-lg font-semibold">
                {data.InstallmentYears}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-calculator text-2xl text-gray-300"></i>
              <span className="text-lg font-semibold">{data.DownPayment}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 pl-2 w-full ">
            <i className="fas fa-calendar-alt text-2xl text-gray-300"></i>
            <span className="text-lg font-semibold">{data.Delivery}</span>
          </div>
        </div>
        <Contact />
      </div>
    </div>
  );
};
export default PropertyCard;
