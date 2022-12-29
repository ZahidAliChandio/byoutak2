import yearsOnInstallment from "../../static/icons/years-on-installment.png";

const SliderCard = (props) => {
  const data = props.data;
  return (
    <div
      className={`${props.className} bg-gray-50 px-4 py-7 rounded-md font-gillsans mx-auto w-3/4 sm:w-4/5 md:w-11/12`}
      onClick={() => props.onClick(data.id)}
    >
      <img
        className="w-full h-[180px] rounded-md bg-[#EFEFEF]"
        alt="database images"
        src={`${process.env.REACT_APP_ATLAS_URI}/file/${data.img}`}
      />
      <div className="px-4">
        <div className="flex flex-col w-full mt-4 gap-0">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">{data.title}</h2>
          </div>
          <span className="text-gray-500 font-bold">{data.subtitle}</span>
        </div>

        <div className="flex flex-col gap-0 mt-1">
          <h3 className="text-xl sm:text-2xl font-bold text-[#ff4545]">
            {data.price}
          </h3>
          <span className="font-semibold">{data.continent}</span>
        </div>
        <div className="flex gap-0 sm:gap-2 my-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.3}
            stroke="#ff4545"
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
        <div className="flex gap-2 sm:gap-4 w-full">
          <div className="flex items-center gap-2 py-2 pr-2">
            <img
              src={yearsOnInstallment}
              alt="Intallment Years"
              className="w-8 bg-transparent"
            />
            <span className="">{data.InstallmentYears}</span>
          </div>
          <div className="flex items-center gap-2 py-2 pr-2">
            <div className="relative">
              <i className="fa-solid fa-calculator text-xl text-gray-600"></i>
            </div>
            <span className="">{data.DownPayment}</span>
          </div>
        </div>
        <div className="relative flex items-center gap-2 pl-2 w-full">
          <i className="fas fa-calendar-alt text-xl text-gray-600"></i>
          <span className="">{data.Delivery}</span>
        </div>
      </div>
    </div>
  );
};
export default SliderCard;
