import { Fragment, useState } from "react";
import Button from "../../components/UI/Button";
import DateList from "../../components/UI/DateList";
import PhoneInput from "react-phone-number-input";

const MeetingForm = () => {
  const [phone, setPhone] = useState();
  const dates = [
    { id: 0, day: "MON", date: "14 NOV" },
    { id: 1, day: "TUE", date: " 15 NOV" },
    { id: 3, day: "WED", date: " 16 NOV" },
    { id: 4, day: "THU", date: " 17 NOV" },
    { id: 5, day: "FRI", date: " 18 NOV" },
    { id: 6, day: "SAT", date: " 19 NOV" },
    { id: 7, day: "SUN", date: " 20 NOV" },
    { id: 8, day: "MON", date: " 21 NOV" },
    { id: 9, day: "TUE", date: " 22 NOV" },
    { id: 10, day: "WED", date: " 23 NOV" },
    { id: 11, day: "THU", date: " 24 NOV" },
  ];

  return (
    <Fragment>
      <div className="relative -top-10 md:-top-12 lg:-top-20 sm:left-10 md:left-20 lg:left-16 flex flex-col gap-4 2xl:gap-6 w-[95%] md:w-11/12 lg:w-10/12 px-12 rounded-lg mx-auto form-shadow">
        <h2 className="text-center font-bold text-white sm:p-0 text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Your Information
        </h2>
        <div className="flex flex-wrap lg:items-end gap-3 md:gap-6 lg:gap-8">
          <div className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/4">
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm sm:text-base md:text-lg text-gray-100 font-medium"
            >
              Your Name
            </label>
            <input
              type="text"
              id="first_name"
              className=" border-gray-300 border text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="John"
              required
            />
          </div>
          <div className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/4">
            <PhoneInput
              placeholder="Enter phone number"
              value={phone}
              onChange={setPhone}
              defaultCountry="NL"
              className="!z-9999 input-box"
              style={{ backgroundColor: "white", borderRadius: "8px" }}
            />
          </div>
        </div>
        <div>
          <h3 className="text-gray-100 text-sm sm:text-base md:text-lg font-semibold">
            Select date
          </h3>

          {/* Date List */}
          <DateList dates={dates} />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-100">
            Select location
          </h3>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <input type="radio" id="zoom" className="h-4 w-4" />
              <label
                htmlFor="zoom"
                className="text-xs sm:text-sm lg:text-base font-semibold text-gray-100"
              >
                Zoom Video
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" id="zoom" className="h-4 w-4" />
              <label
                htmlFor="zoom"
                className="text-xs sm:text-sm lg:text-base font-semibold text-gray-100"
              >
                New Cairo
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" id="zoom" className="h-4 w-4" />
              <label
                htmlFor="zoom"
                className="text-xs sm:text-sm lg:text-base font-semibold text-gray-100"
              >
                6th of October
              </label>
            </div>
          </div>
        </div>
        <h2 className="text-sm sm:text-base md:text-lg font-semibold text-gray-100">
          Select time
        </h2>
        <select
          className="block bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-800 w-fit"
          name="time"
          id="time"
          defaultValue="9:00 AM"
        >
          <option value="11:00">11:00 AM</option>
          <option value="12:00">12:00 AM</option>
          <option value="1:00">1:00 PM</option>
        </select>
        <div className="flex justify-center gap-4 md:gap-8 md:justify-end mt-4 sm:mt-8 md:m-0">
          <Button className="bg-gray-600 text-gray-100">
            Request this time
          </Button>
          <Button className="bg-gray-200 border-gray-700 border !px-3 md:!px-10">
            Live chat now
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default MeetingForm;
