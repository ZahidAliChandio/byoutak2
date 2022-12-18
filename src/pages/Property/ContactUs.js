import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { useForm } from "../../hooks/form-hook";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState();

  const { inputHandler } = useForm({
    Name: "",
    Location: "",
    message: "",
  });

  const nameChangeHandler = (e) => {
    setName(e.target.value);
    // inputHandler(e.target.value, e.target.value);
  };
  const phoneChangeHandler = (e) => {
    setPhone(e.target.value);
    // inputHandler(e.target.id, e.target.value);
  };
  const locationChangeHandler = (e) => {
    setLocation(e.target.value);
    // inputHandler(e.target.id, e.target.value);
  };
  const messageChangeHandler = (e) => {
    setMessage(e.target.value);
    // inputHandler(e.target.id, e.target.value);
  };

  return (
    <form action="" className="mt-12 w-11/12 md:w-[85%] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 w-full">
        <div className="flex flex-col gap-8">
          <div className="relative z-0 w-full group mb-4">
            <input
              type="text"
              value={name}
              onChange={nameChangeHandler}
              name="Name"
              id="Name"
              className="block py-4 px-6 w-full text-lg text-white bg-transparent border-2 border-[red] appearance-none focus:outline-none  rounded-xl z-0"
              placeholder="Name"
              required
            />
            <label
              htmlFor="Name"
              className="absolute text-gray-400 text-xl top-0 z-10 origin-[0] left-5 bg-[#212020] -translate-y-4 px-1"
            >
              Name
            </label>
          </div>
          <div className="relative z-0 text-white rounded-xl mb-4">
            <PhoneInput
              specialLabel={""}
              id={"phone"}
              country={"th"}
              value={phone}
              onChange={phoneChangeHandler}
              className="py-0"
              inputStyle={{
                backgroundColor: "transparent",
                width: "100%",
                border: "2px solid red",
                display: "block",
                padding: "1.8rem 3rem",
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
          <div className="relative z-0 w-full group">
            <input
              type="text"
              value={location}
              onChange={locationChangeHandler}
              name="Location"
              id="Location"
              className="block py-4 px-6 w-full text-lg text-white bg-transparent border-2 border-[red] appearance-none focus:outline-none  rounded-xl z-0"
              placeholder="Enter Location"
              required
            />
            <label
              htmlFor="Name"
              className="absolute text-gray-400 text-xl top-0 z-10 origin-[0] left-5 bg-[#212020] -translate-y-4 px-1"
            >
              Preferred Location
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full">
          <textarea
            name="message"
            id="message"
            value={message}
            onChange={messageChangeHandler}
            className="block py-4 px-6 w-full text-lg text-white bg-transparent border-2 border-[red] appearance-none focus:outline-none rounded-xl z-0 h-full"
            placeholder="Message"
          ></textarea>
          <label
            htmlFor="message"
            className="absolute text-gray-400 text-xl top-0 z-10 origin-[0] left-5 bg-[#212020] -translate-y-4 px-1"
          >
            Message
          </label>
        </div>
      </div>
      <div className="text-right mt-6">
        <button
          type="submit"
          className="py-2 px-8 bg-[red] text-white rounded-lg font-semibold font"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
export default ContactUs;
