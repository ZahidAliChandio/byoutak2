import { useState } from "react";

const Dropdown = (props) => {
  const content = props.content;
  const [selectedValue, setSelectedValue] = useState(props.selectedValue);
  const [isVisible, setIsVisible] = useState(false);

  const onClickHandler = (item) => {
    setSelectedValue(item.value);
    setIsVisible(false);
  };

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };
  const onBlurHandler = () => {
    setIsVisible(false);
  };

  return (
    <div className="relative" onBlur={onBlurHandler} tabIndex={0}>
      <div
        className={
          "flex justify-between items-center border-2 border-[red] rounded-full px-4 py-3 bg-transparent w-full cursor-pointer mb-1"
        }
        onClick={toggleVisibility}
      >
        <span>{selectedValue}</span>
        <i
          className={`fas fa-chevron-down text-[red] ${
            isVisible ? "rotate-180" : "rotate-0"
          } duration-700 transition-all`}
        ></i>
      </div>
      <ul
        className={`w-full rounded-md text-left px-8 bg-white text-black border-gray-300 border ${
          isVisible ? "visible" : "invisible"
        }`}
      >
        {content.map((item, index) => (
          <li
            key={item.id}
            className="hover:text-[red] focus:text-[red] cursor-pointer py-1"
            onClick={() => onClickHandler(item)}
          >
            {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
