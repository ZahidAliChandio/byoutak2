import { Fragment, useState, useRef } from "react";
import { Transition } from "react-transition-group";

const FilterAccordion = (props) => {
  const [items, setItems] = useState(props.items);
  const nodeRef = useRef(null);

  const onClickHandler = (index) => {
    const newItems = [...items];
    newItems[index].isActive = !newItems[index].isActive;
    setItems(newItems);
  };
  const renderedItems = items.map((item, index) => {
    return (
      <Fragment key={index}>
        <div
          className={`relative flex items-center justify-between text-sm md:text-base 2xl:text-lg border bg-gray-300 py-3 cursor-pointer font-gillsans px-4`}
          onClick={() => onClickHandler(index)}
        >
          <span>{item.title}</span>
          <div className="flex gap-12 items-center">
            <span className="text-xs">{items[index].isActive?"Collapse":"Expand"}</span>
            <i
              className={`fas fa-chevron-down ${
                items[index].isActive ? "rotate-180" : "rotate-0"
              } transition-all duration-500`}
            ></i>
          </div>
        </div>
        <Transition
          in={items[index].isActive}
          timeout={{ enter: 600, exit: 5000 }}
          nodeRef={nodeRef}
          mountOnEnter
          unmountOnExit
        >
          {(state) => (
            <div
              className={`${
                state === "entering"
                  ? "open-accordion"
                  : state === "exiting"
                  ? "close-accordion"
                  : null
              }`}
            >
              {item.content}
            </div>
          )}
        </Transition>
      </Fragment>
    );
  });
  return (
    <div className={`${props.className} relative mt-2`}>{renderedItems}</div>
  );
};

export default FilterAccordion;
