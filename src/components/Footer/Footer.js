import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 py-2 flex items-center justify-center w-full gap-4 sm:gap-8 md:gap-12 lg:gap-24 xl:gap-32 bg-[#212020] z-[80]">
      <a
        href="tel:03163366566"
        className="flex flex-col items-center justify-center"
      >
        <span>
          <i className="fa-solid fa-headset text-gray-400 text-2xl"></i>
        </span>
        <span className="text-gray-300 text-sm">Call Us</span>
      </a>
      <a
        href="whatsapp://send?text=Lets chat!&phone=+923163366566"
        className="flex flex-col items-center justify-center"
      >
        <i className="fas fa-comment-dots text-gray-400 text-2xl"></i>
        <span className="text-gray-300 text-sm">Message Us</span>
      </a>
      <Link to="/meeting" className="flex flex-col items-center justify-center">
        <span>
          <i className="fas fa-user text-gray-400 text-xl"></i>
        </span>
        <span className="text-gray-300 text-sm">Schedule a Meeting</span>
      </Link>
    </footer>
  );
};
export default Footer;
