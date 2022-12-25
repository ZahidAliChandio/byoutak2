import { Fragment, useEffect, useState, useCallback } from "react";
import toast from "react-hot-toast";
import http from "../../utils/http";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import DateList from "./DateList";
import Button from "../../components/UI/Button";
import { useForm } from "../../places/hooks/form-hook";

const MeetingForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+20");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [message, setMessage] = useState("");
  const noOfDays = 12;

  const [locations, setLocations] = useState(null);
  const date = new Date();

  const [formState, inputHandler] = useForm({
    Name: "",
    PhoneNumber: "",
    PreferedLocation: "",
    Message: "",
    Date: date.getDate(),
    Time: date.getSeconds().toLocaleString(),
  });

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

  const getLocations = useCallback(() => {
    http
      .get(`${process.env.REACT_APP_ATLAS_URI}/getLocations/`)
      .then((response) => {
        if (response.status === 200) {
          const results = response?.data?.results;
          console.log(results);
          setLocations(results);
        } else toast.error(response?.data?.error?.message);
      })
      .catch((err) => toast.error(err.message));
  }, []);

  useEffect(() => {
    getLocations();
  }, [getLocations]);

  const dates = [];
  for (let day = 0; day < noOfDays; day++) {
    dates.push({
      id: day,
      weekday:
        weekday[
          date.getDay() + day > 7
            ? (date.getDay() + day) % 7
            : date.getDay() + day
        ],
      date:
        date.getDate() + day > 30
          ? `${(date.getDate() + day) % 30}  ${monthsArray[date.getMonth()]}`
          : `${date.getDate() + day}  ${monthsArray[date.getMonth()]}`,
      day: date.getDay() + day,
    });
  }

  const nameChangeHandler = (e) => {
    setName(e.target.value);
    inputHandler(e.target.id, e.target.value);
  };

  const phoneChangeHandler = (input) => {
    setPhone(input);
    inputHandler("PhoneNumber", input);
  };

  const dateChangeHandler = (date) => {
    inputHandler("Date", date.date);
    setSelectedDate(date.date);
  };

  const locationChangeHandler = (e) => {
    setSelectedLocation(e.target.value);
    inputHandler(e.target.name, e.target.value);
  };
  const timeChangeHandler = (e) => {
    setSelectedTime(e.target.value);
    inputHandler(e.target.name, e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!selectedLocation || !selectedDate || !selectedTime) {
      alert("Please fill out the remaining fields!");
      return;
    }

    http
      .post(`${process.env.REACT_APP_ATLAS_URI}/addContact/`, {
        Name: formState.Name,
        PhoneNumber: formState.PhoneNumber,
        PreferedLocation: formState.PreferedLocation,
        Message: formState.message,
        Date: new Date(formState.Date),
        Time: new Date()
      })
      .then((response) => {
        if (response.status === 200) {
          setName("");
          setSelectedLocation(null);
          setSelectedTime(null);
          setSelectedDate(null);
          setMessage("");
          setPhone("+66");
          toast.success(response?.data?.message);
        } else toast.error(response.data.error.message);
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <Fragment>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] md:w-11/12 lg:w-10/12 px-12 rounded-lg m-auto form-shadow h-fit">
        <h2 className="text-center font-bold text-white sm:p-0 text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Your Information
        </h2>
        <form
          action=""
          onSubmit={onSubmitHandler}
          className="flex flex-col gap-4 2xl:gap-6"
        >
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
                value={name}
                id="Name"
                className="text-lg leading-none border-transparetn border text-[#212020] outline-0 rounded-lg block w-full p-2.5 focus:border-[red]"
                placeholder="John"
                required
                onChange={nameChangeHandler}
              />
            </div>
            <div className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/4">
              <PhoneInput
                specialLabel={""}
                id={"PhoneNumber"}
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
            <h3 className="text-white text-sm sm:text-base md:text-lg font-semibold">
              Select date
            </h3>

            {/* Date List */}
            <DateList
              dates={dates}
              dateChangeHandler={dateChangeHandler}
              selectedDate={selectedDate}
            />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white">
              Select location
            </h3>
            <div className="flex gap-4">
              {locations &&
                locations.map((location) => (
                  <div className="flex items-center gap-2" key={location._id}>
                    <input
                      type="radio"
                      id={location._id}
                      className="h-4 w-4"
                      name="PreferedLocation"
                      value={location.Location}
                      onChange={locationChangeHandler}
                    />
                    <label
                      htmlFor={location._id}
                      className="text-xs sm:text-sm lg:text-base font-semibold text-white"
                    >
                      {location.Location}
                    </label>
                  </div>
                ))}
            </div>
          </div>
          <h2 className="text-sm sm:text-base md:text-lg font-semibold text-gray-100">
            Select time
          </h2>
          <select
            className="block bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-800 w-fit"
            name="Time"
            id="Time"
            defaultValue="9:00 AM"
            onChange={timeChangeHandler}
          >
            <option value="9:00 AM">9:00 AM</option>
            <option value="12:00 AM">12:00 AM</option>
            <option value="3:00 PM">3:00 PM</option>
          </select>
          <div className="flex justify-center gap-4 md:gap-8 md:justify-end mt-4 sm:mt-8 md:m-0">
            <Button className="bg-[#ff4747] text-gray-100" type="submit">
              Request this time
            </Button>
            <Button className="bg-white !px-3 md:!px-10">Live chat now</Button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default MeetingForm;
