import Phone from "../../static/icons/phone.png";

const Contact = (props) => {
  return (
    <div
      className={`${props.className} grid grid-cols-3 gap-4 w-full sm:w-fit`}
    >
      <a
        href="whatsapp://send?text=Lets chat!&phone=+923163366566"
        className="flex items-center gap-2 px-4 sm:px-8 justify-center cursor-pointer bg-[red] text-white rounded-3xl py-1"
      >
        {/* <i className="fas fa-comment-dots text-xl text-gray-400"></i> */}
        <i className="fa-brands fa-whatsapp text-2xl text-white"></i>
        <span
          className={`${props.text} font-semibold text-white text-sm sm:text-base text-center`}
        >
          Whatsapp
        </span>
      </a>

      <a
        href="tel:03482146022"
        className="flex items-center gap-2 px-4 sm:px-8 py-1 justify-center cursor-pointer bg-[red] text-white rounded-3xl py-1"
      >
        <span>
          <img src={Phone} alt="phone" className="w-6 h-6" />
        </span>
        <span
          className={`${props.text} font-semibold text-white text-sm sm:text-base`}
        >
          Call
        </span>
      </a>

      <div className="flex gap-2 px-4 sm:px-8 items-center cursor-pointer py-2 justify-center bg-[red] text-white rounded-3xl py-1">
        <i className="fa-sharp fa-solid fa-video text-white"></i>
        <span className={`${props.text} text-white`}>Meeting</span>
      </div>
    </div>
  );
};
export default Contact;
