import { Fragment, useState, useRef } from "react";
import { Transition } from "react-transition-group";

const Accordion = (props) => {
  const items=props.items;
  const [activeIndex, setActiveIndex] = useState(null);
  const nodeRef = useRef(null);

  const onClickHandler = (index) => {
    const newIndex = index === activeIndex ? null : index;
    setActiveIndex(newIndex);
  };
  const renderedItems = items.map((item, index) => {
    return (
      <Fragment key={index}>
        <div
          className={`relative flex items-center justify-between text-sm md:text-base 2xl:text-lg border-b border-gray-400 py-3 cursor-pointer mb-2 font-gillsans px-4`}
          onClick={() => onClickHandler(index)}
        >
          {item.title}
          <i
            className={`fas fa-chevron-down ${
              index === activeIndex ? "rotate-180" : "rotate-0"
            } transition-all duration-500`}
          ></i>
        </div>
        <Transition
          in={index === activeIndex}
          timeout={{ enter: 500, exit: 5000 }}
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

export default Accordion;
