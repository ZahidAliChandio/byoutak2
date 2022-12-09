import Phone from "../../static/icons/phone.png";

const Contact = (props) => {
  return (
    <div className={`${props.className} grid grid-cols-3 border-2 border-gray-300 rounded-lg w-full sm:w-fit bg-[#212020]`}>
      <div className="flex gap-2 px-4 sm:px-8 items-center cursor-pointer py-2 justify-center">
        <i className="fa-sharp fa-solid fa-video text-gray-400"></i>
        <span className={`${props.text} text-gray-50`}>Zoom</span>
      </div>

      <a href="tel:03482146022" className="flex items-center gap-2 px-4 sm:px-8 py-2 border-l justify-center cursor-pointer">
        <span>          
          <img src={Phone} alt="phone" className="w-6 h-6" />
        </span>
        <span className={`${props.text} font-semibold text-white text-sm sm:text-base`}>
          Call
        </span>
      </a>
      <a
        href="whatsapp://send?text=Lets chat!&phone=+923163366566"
        className="flex items-center gap-2 px-4 sm:px-8 border-l py-2 justify-center cursor-pointer"
      >
        {/* <i className="fas fa-comment-dots text-xl text-gray-400"></i> */}
        <i className="fa-brands fa-whatsapp text-2xl text-gray-400"></i>
        <span className={`${props.text} font-semibold text-white text-sm sm:text-base text-center`}>
          Whatsapp
        </span>
      </a>
    </div>
  );
};
export default Contact;
