import { Fragment, useEffect, useState } from "react";
import Button from "../../components/UI/Button";
import DateList from "./DateList";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

// import PhoneInput from "react-phone-number-input";

const MeetingForm = () => {
  const [phone, setPhone] = useState("");
  const noOfDays = 12;
  const [country, setCountry] = useState("NL");

  const weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let monthsArray = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const date = new Date();
  var utcTime = date.getTime() + date.getTimezoneOffset() * 60000;

  let pakOffset = 5;

  var PakTimeZone = new Date(utcTime + 3600000 * pakOffset);

  const dates = [];
  for (let day = 0; day < noOfDays; day++) {
    dates.push({
      id: day,
      day: weekday[
        date.getDay() + day > 7
          ? (date.getDay() + day) % 7
          : date.getDay() + day
      ],
      date:
        date.getDate() + day > 30
          ? `${(date.getDate() + day) % 30}  ${monthsArray[date.getMonth()]}`
          : `${date.getDate() + day}  ${monthsArray[date.getMonth()]}`,
    });
  }

  const phoneChangeHandler = (input) => {
    setPhone(input);
  };

  useEffect(() => {
    console.log(PakTimeZone.getMonth() + 1);
  }, []);
  // create Date object for current location
  var date2 = new Date();

  // convert to milliseconds, add local time zone offset and get UTC time in milliseconds
  var utcTime = date2.getTime() + date2.getTimezoneOffset() * 60000;

  // time offset for New Zealand is +12
  // var timeOffset = 12;

  // create new Date object for a different timezone using supplied its GMT offset.
  // var NewZealandTime = new Date(utcTime + 3600000 * timeOffset);

  return (
    <Fragment>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 2xl:gap-6 w-[95%] md:w-11/12 lg:w-10/12 px-12 rounded-lg m-auto form-shadow h-fit">
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
              className="text-lg leading-none border-transparetn border text-[#212020] outline-0 rounded-lg block w-full p-2.5 focus:border-[red]"
              placeholder="John"
              required
            />
          </div>
          <div className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/4">
            <PhoneInput
              specialLabel={""}
              id={"phone"}
              country={"th"}
              value={phone}
              onChange={phoneChangeHandler}
              buttonclassName="bg-red"
              containerClass="bg-[white] rounded-lg border border-[red]"
              buttonStyle={{
                backgroundColor: "transparent",
                border: "none",
                fontSize: "1.5rem",
                paddingLeft: "0.5rem",
              }}
              inputStyle={{
                backgroundColor: "transparent",
                width: "100%",
                display: "block",
                padding: "1.3rem 3rem",
                fontSize: "1.125rem",
                borderRadius: "0.8rem",
              }}
            />
            <label
              htmlFor="phone"
              className="absolute text-gray-400 text-xl top-0 z-10 origin-[0] left-5 bg-[#212020] -translate-y-4 px-1"
            >
              Phone Number
            </label>
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
          <Button className="bg-[#ff4747] text-gray-100">
            Request this time
          </Button>
          <Button className="bg-white !px-3 md:!px-10">Live chat now</Button>
        </div>
      </div>
    </Fragment>
  );
};

export default MeetingForm;
