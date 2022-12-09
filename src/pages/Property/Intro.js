const Intro = () => {
  return (
    <div className="flex items-start flex-col-reverse justify-between px-6 lg:px-12 xl:px-20 md:flex-row w-full md:w-auto">
      <div className="flex flex-col gap-4 text-gray-300 pt-8">
        <div className="hidden md:flex gap-5">
          <div className="flex items-center gap-2">
            <span className="w-8 h-2 bg-gray-300"></span>
            <h1 className="text-3xl">THE BROOKS</h1>
          </div>
          <span className="text-5xl">|</span>
          <span className="text-lg h-full self-end">Distric: New Cairo</span>
        </div>
        <p className=" md:p-0 lg:pl-12 xl:pl-16 2xl:pl-20 w-11/12 lg:w-3/4 xl:w-3/5">
          <span className="text-lg">THE BROOKS</span><span className=""> is a new residential
          innovation that makes the most out of nature’s aesthetic elements. It
          is a one of a kind residence indulged within the ideal blend</span>
        </p>
      </div>
      <div className="text-gray-300 flex gap-6 xl:gap-10 box-shadow mt-8 mx-auto md:m-0 w-full md:w-auto">
        <div className="hidden md:flex flex-col gap-2 mt-4">
          <i className="fa-brands fa-facebook-f text-[#212020] bg-gray-300 py-2 px-3 text-xl"></i>
          <i className="fa-brands fa-twitter text-[#212020] bg-gray-300 py-2 px-3 text-xl"></i>
        </div>
        <div className="flex flex-col items-center gap-4 border border-gray-300 text-center p-4 w-full md:w-auto">
          <h3 className="text-lg text-[red] tex-center">Starting Price</h3>
          <div className="flex gap-2 justify-center w-full">
            <span className="text-2xl font-bold">1,690,000</span>
            <span className="text-2xl">EGP</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <span>Updated 24 Oct 2022</span>
            <span>|</span>
            <span>Current Phase</span>
          </div>
          <div className="flex gap-6 sm:gap-8 md:gap-6">
            <div className="flex flex-col">
              <span className="text-gray-200">Down Payment</span>
              <span className="text-2xl font-bold">10%</span>
            </div>
            <div className="flex flex-col border-l pl-3 sm:pl-4 md:pl-6">
              <span className="text-gray-200">Installments Years</span>
              <span className="text-2xl font-bold">9%</span>
            </div>                          
            <div className="flex flex-col border-l pl-3 sm:pl-4 md:pl-6">
              <span className="text-gray-200">Delivery date</span>
              <span className="text-2xl font-bold">2024</span>
            </div>
          </div>
          <button className="border py-1 px-3 rounded-full bg-gray-300 text-[#212020]">
            MASTER PLAN
          </button>
        </div>
      </div>
    </div>
  );
};
export default Intro;
