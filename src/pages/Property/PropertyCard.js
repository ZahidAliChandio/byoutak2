import Contact from "../../components/UI/Contact";
import { fCurrency } from "../../utils/formatNumber";
import yearsOnInstallment from "../../static/icons/years-on-installment.png";
import downPayment from "../../static/icons/down-payment.png";

const PropertyCard = (props) => {
  const data = props.data;
  console.log(data);
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
      <div className="flex flex-col absolute -bottom-6 lg:bottom-0 gap-8">
        <div className="space-y-2">
          <div className="relative flex gap-0 sm:gap-2 -left-1 lg:left-0">
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
          <div className="relative flex gap-2 sm:gap-4 -left-1 lg:left-0">
            <div className="relative flex items-center gap-2 py-2 pr-2">
              <img
                src={yearsOnInstallment}
                alt="Intallment Years"
                className="w-10 bg-transparent invert"
              />
              <span className="text-lg font-semibold">{data.bedrooms}</span>
            </div>
            <div className="relative flex items-center gap-2 py-2 pr-2">
              <div className="relative">
                <img
                  src={downPayment}
                  alt="Down Payment"
                  className="w-6 h-8 bg-transparent"
                />
                <span className="absolute -bottom-[0.1rem] -right-[0.1rem] h-1 w-1 bg-[#212020]"></span>
                <span className="absolute -bottom-[0.1rem] -left-[0.1rem] h-1 w-1 bg-[#212020]"></span>
              </div>
              <span className="text-lg font-semibold">{data.bathrooms}</span>
            </div>
            <div className="flex items-center gap-2 py-2 pr-2">
              <i class="fas fa-calendar-alt text-2xl"></i>
              <span className="text-lg font-semibold">{data.area}</span>
            </div>
          </div>
        </div>
        <Contact />
      </div>
    </div>
  );
};
export default PropertyCard;
