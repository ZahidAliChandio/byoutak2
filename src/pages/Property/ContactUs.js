import { useState } from "react";
import PhoneInput from "react-phone-number-input";

const ContactUs = () => {
  const [phone, setPhone] = useState();

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
        <form action="" className="w-full mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div className="flex flex-col gap-8">
              <input
                type="text"
                id="first_name"
                className="relative border-2 border-[red] bg-transparent text-white text-base lg:text-lg rounded-lg  block w-full p-2.5 before:content-['Name'] before:absolute before:-top-2 before:left-2 before:block before:text-white before:border-red-800 before:border-4 outline-none"
                placeholder="Name"
                required
              />
              <div className="border-2 border-[red] bg-transparent text-white rounded-lg">
                <PhoneInput
                  placeholder="3012345678"
                  className="bg-transparent"
                  value={phone}
                  onChange={setPhone}
                  defaultCountry="PK"
                />
              </div>
              <select
                className="block w-full bg-gray-50 border-2 border-[red] bg-transparent text-white py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none"
                name="time"
                id="time"
                defaultValue="9:00 AM"
              >
                <option value="Lahore" className="text-[gray]">
                  Enter Location
                </option>
                <option value="Rawalpindi">Rawalpindi</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Karachi">Karachi</option>
                <option value="Hyderabad">Hyderabad</option>
              </select>
            </div>
            <div>
              <textarea
                name="message"
                id="message"
                className="border-2 border-[red] bg-transparent text-white h-full w-full p-2 outline-none rounded-lg"
                placeholder="Message"
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
      </div>
    </div>
  );
};
export default ContactUs;
