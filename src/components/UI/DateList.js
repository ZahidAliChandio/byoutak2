import { useState } from "react";
import Card from "../../components/UI/Card";
const DateList = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onClickHandler = (index) => {
    setActiveIndex(index);
  };

  return props.dates.map((date, index) => {
    return (
      <Card className="!p-0 box-shadow !inline-block" key={date.id}>
        <ul
          className={`${
            activeIndex === index ? "bg-gray-700 text-white" : "bg-gray-50 text-gray-800"
          } px-2 md:px-4 py-3 sm:py-4 md:py-6 rounded-lg text-sm text-center font-semibold cursor-pointer`}
          onClick={() => onClickHandler(index)}
        >
          <li>{date.day}</li>
          <li>{date.date}</li>
        </ul>
      </Card>
    );
  });
};

export default DateList;
