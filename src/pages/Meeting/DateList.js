import { useEffect, useState } from "react";
import Card from "../../components/UI/Card";
const DateList = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onClickHandler = (item) => {
    props.dateChangeHandler(item.date);
    setActiveIndex(item.index);
  };

  const { selectedDate } = props;

  useEffect(() => {
    if (!selectedDate) {
      setActiveIndex(null);
    }
  }, [selectedDate]);

  return props.dates.map((date, index) => {
    return (
      <Card className="!p-0 box-shadow !inline-block" key={date.id}>
        <ul
          className={`${
            activeIndex === index
              ? "bg-[#ff4747] text-white"
              : "bg-white text-[#212020]"
          } px-2 md:px-4 py-3 sm:py-4 md:py-6 rounded-lg text-sm text-center font-semibold cursor-pointer`}
          onClick={() => onClickHandler({ index, date })}
        >
          <li>{date.weekday}</li>
          <li>{date.date}</li>
        </ul>
      </Card>
    );
  });
};

export default DateList;
