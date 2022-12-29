import { Fragment, useState } from "react";
import PropertyTabs from "./PropertyTabs";

const Accordion = (props) => {
  const [accordianPlus, setAccordianPlus] = useState("closed");

  // List items
  const [items, setItems] = useState([
    {
      title: "Unit Types",
      content: <PropertyTabs {...props} />,
      isActive: true,
    },
  ]);

  const onClickHandler = (index) => {
    if (accordianPlus === "opened") {
      setAccordianPlus("closed");
    } else {
      setAccordianPlus("opened");
    }
    const newItems = [...items];
    newItems[index].isActive = !newItems[index].isActive;
    setItems(newItems);
  };

  const renderedItems = items.map((item, index) => {
    return (
      <Fragment key={index}>
        <div
          className={`flex gap-3 items-center text-lg md:text-xl xl:text-2xl border-b border-[red] text-white py-4 cursor-pointer mb-3 font-gillsans`}
          onClick={() => onClickHandler(index)}
        >
          <div>
            <i class="fa-sharp fa-solid fa-minus text-[red]"></i>
          </div>
          <h4>{item.title}</h4>
        </div>
        <div
          className={`text-white sm:pl-4 md:pl-8 lg:pl-12 mt-8 transition-all duration-100`}
        >
          {item.content}
        </div>
      </Fragment>
    );
  });
  return <div className="mt-2 px-2 w-full">{renderedItems}</div>;
};

export default Accordion;
