import { useState } from "react";
import { ReactComponent as ContactUsSvg } from "../../static/images/contactUsIllustration.svg";
import LocationPointer from "../../static/icons/contactlocation.png";
import Clock from "../../static/icons/clock.png";
import Phone from "../../static/icons/phone.png";
import Card from "../../components/UI/Card";
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
        <Card className="!block !w-full md:!w-4/5 lg:!w-full !bg-white !py-10 px-7 lg:!px-12 !h-fit !m-auto">
          <div className="flex flex-col gap-3">
            <h2 className="text-xl text-[#FF5E00] font-bold">
              We are always eager to hear from you
            </h2>
            <h3 className="text-lg text-[#767676]">
              Need assistance ? Just write us a message
            </h3>
          </div>
          <form action="" className="w-full mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <div className="flex flex-col gap-8">
                <input
                  type="text"
                  id="first_name"
                  className="relative border-[#015C9A] bg-gray-50 border text-base lg:text-lg rounded-lg  block w-full p-2.5 before:content['Name'] before:absolute before:-top-2 before:left-2 before:block before:text-white before:border-red-800 before:border-4 outline-none"
                  placeholder="Name"
                  required
                />
                <div className="border border-[#015C9A] rounded-lg">
                  <PhoneInput
                    placeholder="3012345678"
                    value={phone}
                    onChange={setPhone}
                    defaultCountry="PK"
                  />
                </div>
                <select
                  className="block w-full bg-gray-50 border border-[#015C9A] text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                  className="border border-[#015C9A] h-full w-full p-2 outline-none rounded-lg"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
            <div className="text-right mt-6">
              <button
                type="submit"
                className="py-2 px-8 bg-[#FF5E00] text-white rounded-lg font-bold"
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
          <h1 className="relative text-[#15314E] text-[1.4rem] font-bold -top-2 left-10">
            How to reach us
          </h1>
          <div className="flex flex-col gap-4 mt-1">
            <div className="flex items-center text-left gap-4">
              <img src={LocationPointer} alt="location" className="h-10" />

              <div>
                <h2 className="text-lg font-bold text-[#15314E]">Address</h2>
                <p className="text-base xl:text-lg text-[#767676]">
                  47, North 90 Street, New Cairo, Egypt. <br />
                  Tower 2, Al Guezira Plaza, 6 of October, Egypt.
                </p>
              </div>
            </div>
            <div className="flex items-center text-left gap-6">
              <img src={Phone} alt="phone" className="w-7 h-7" />
              <div>
                <h2 className="text-lg font-bold text-[#15314E]">Contacts</h2>
                <p className="text-base xl:text-lg text-[#767676]">
                  +201065888849
                  <br /> info@nawy.com
                </p>
              </div>
            </div>
            <div className="flex items-center text-left gap-4">
              <img src={Clock} alt="phone" className="w-7 h-7" />
              <div>
                <h2 className="text-lg font-bold text-[#15314E]">
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
