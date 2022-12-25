import { useState, useCallback, useEffect } from "react";
import { ReactComponent as ContactUsSvg } from "../../static/images/contactUsIllustration.svg";
import toast from "react-hot-toast";
import http from "../../utils/http";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import LocationPointer from "../../static/icons/contactlocation.png";
import Clock from "../../static/icons/clock.png";
import Phone from "../../static/icons/phone.png";
import Card from "../../components/UI/Card";
import { useForm } from "../../places/hooks/form-hook";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+20");
  // It will confirm that actual location is sent not "Enter Location";
  const [selectedLocation, setSelectedLocation] = useState({
    id: "default-message",
    value: "defaultSelected",
  });
  const [message, setMessage] = useState("");

  // locations from database
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

  const getLocations = useCallback(() => {
    http
      .get(`${process.env.REACT_APP_ATLAS_URI}/getLocations/`)
      .then((response) => {
        if (response.status === 200) {
          const results = response?.data?.results;
          setLocations(results);
        } else toast.error(response?.data?.error?.message);
      })
      .catch((err) => toast.error(err.message));
  }, []);

  useEffect(() => {
    getLocations();
  }, [getLocations]);

  const nameChangeHandler = (e) => {
    setName(e.target.value);
    inputHandler(e.target.id, e.target.value);
  };
  const locationChangeHandler = (e) => {
    setSelectedLocation(e.target.value);
    inputHandler(e.target.id, e.target.value);
  };
  const messageChangeHandler = (e) => {
    setMessage(e.target.value);
    inputHandler(e.target.id, e.target.value);
  };

  const phoneChangeHandler = (input) => {
    setPhone(input);
    inputHandler("PhoneNumber", input);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (selectedLocation.id) {
      alert("Please select Location");
      return;
    }

    http
      .post(`${process.env.REACT_APP_ATLAS_URI}/addContact/`, {
        Name: formState.Name,
        PhoneNumber: formState.PhoneNumber,
        PreferedLocation: formState.PreferedLocation,
        Message: formState.Message,
        Date: new Date(),
        Time: new Date(),
      })
      .then((response) => {
        if (response.status === 200) {
          setName("");
          setSelectedLocation({
            id: "default-message",
            value: "defaultSelected",
          });
          setMessage("");
          setPhone("+20");
          toast.success(response?.data?.message);
        } else toast.error(response.data.error.message);
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="">
      <div id="background-container" className="relative h-52">
        <div className="m-auto max-w-[1366px] w-[85%]">
          <h2 className="mt-24 text-2xl md:text-5xl leading-[56px] text-white font-bold">
            Contact Us
          </h2>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 w-11/12 md:w-[85%] mx-auto mt-12">
        <Card className="!block !w-full md:!w-4/5 lg:!w-full !bg-white !py-10 px-7 lg:!px-12 !h-fit !m-auto">
          <div className="flex flex-col gap-3">
            <h2 className="text-xl text-[red] font-bold">
              We are always eager to hear from you
            </h2>
            <h3 className="text-lg text-[#767676]">
              Need assistance ? Just write us a message
            </h3>
          </div>
          <form action="" className="w-full mt-12" onSubmit={onSubmitHandler}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <div className="flex flex-col gap-8">
                <input
                  type="text"
                  value={name}
                  id="Name"
                  className="relative border-gray-300 focus:border-[red] bg-white border text-base lg:text-lg rounded-lg  block w-full p-2.5 before:content['Name'] before:absolute before:-top-2 before:left-2 before:block before:text-white before:border-red-800 before:border-4 outline-none"
                  placeholder="Name"
                  onChange={nameChangeHandler}
                  required
                />
                <div className="rounded border" tabIndex="0">
                  <PhoneInput
                    specialLabel={""}
                    id={"PhoneNumber"}
                    value={phone}
                    onChange={phoneChangeHandler}
                    buttonclassName=""
                    containerClass="bg-[white] rounded"
                    buttonStyle={{
                      backgroundColor: "transparent",
                      border: "none",
                      fontSize: "1.5rem",
                      paddingLeft: "0.5rem",
                    }}
                    inputStyle={{
                      backgroundColor: "transparent",
                      border: "none",
                      width: "100%",
                      display: "block",
                      padding: "1.51rem 3rem",
                      fontSize: "1.125rem",
                      borderRadius: "0.6rem",
                    }}
                  />
                </div>
                <select
                  className="block w-full bg-white border border-gray-300 focus:border-[red] text-[#212020] py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none"
                  name="PreferedLocation"
                  id="PreferedLocation"
                  defaultValue={selectedLocation.value}
                  onChange={locationChangeHandler}
                >
                  <option
                    value="defaultSelected"
                    className="text-[gray]"
                    id={"default-message"}
                  >
                    Enter Location
                  </option>
                  {locations &&
                    locations.map((location) => (
                      <option value={location.Location} key={location._id}>
                        {location.Location}
                      </option>
                    ))}
                </select>
              </div>
              <div>
                <textarea
                  name="Message"
                  value={message}
                  id="Message"
                  className="border border-gray-300 focus:border-[red] h-full w-full p-2 outline-none rounded-lg"
                  placeholder="Message"
                  onChange={messageChangeHandler}
                ></textarea>
              </div>
            </div>
            <div className="text-right mt-6">
              <button
                type="submit"
                className="py-2 px-8 bg-[red] text-white rounded-lg font-bold"
              >
                Submit
              </button>
            </div>
          </form>
        </Card>
        <Card className="!block !bg-white !p-5 lg:-translate-y-28 !w-full md:!w-3/5 lg:!w-3/4 !m-auto">
          <div className="flex justify-center">
            <ContactUsSvg transform="scale(1.2)" />
          </div>
          <h1 className="relative text-[#212020] text-[1.4rem] font-bold -top-2 left-10">
            How to reach us
          </h1>
          <div className="flex flex-col gap-4 mt-1">
            <div className="flex items-center text-left gap-4">
              <img src={LocationPointer} alt="location" className="h-10" />

              <div>
                <h2 className="text-lg font-bold text-[#212020]">Address</h2>
                <p className="text-base xl:text-lg text-[#767676]">
                  47, North 90 Street, New Cairo, Egypt. <br />
                  Tower 2, Al Guezira Plaza, 6 of October, Egypt.
                </p>
              </div>
            </div>
            <div className="flex items-center text-left gap-6">
              <img src={Phone} alt="phone" className="w-7 h-7" />
              <div>
                <h2 className="text-lg font-bold text-[#212020]">Contacts</h2>
                <p className="text-base xl:text-lg text-[#767676]">
                  +201065888849
                  <br /> info@nawy.com
                </p>
              </div>
            </div>
            <div className="flex items-center text-left gap-4">
              <img src={Clock} alt="phone" className="w-7 h-7" />
              <div>
                <h2 className="text-lg font-bold text-[#212020]">
                  Working Hours
                </h2>
                <p className="text-base xl:text-lg text-[#767676]">
                  Sunday-Thursday
                  <br /> 10:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default ContactUs;
