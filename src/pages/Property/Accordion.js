import { Fragment, useState, useRef } from "react";
import PropertyTabs from "./PropertyTabs";
import { CSSTransition } from "react-transition-group";

const Accordion = (props) => {
  const [accordianPlus, setAccordianPlus] = useState("closed");
  const [isOpen, setIsOpen] = useState(false);

  const nodeRef = useRef(null);

  // List items

  const onClickHandler = () => {
    if (accordianPlus === "opened") {
      setAccordianPlus("closed");
    } else {
      setAccordianPlus("opened");
    }
    setIsOpen((prev) => !prev);
    // const newItems = [...items];
    // newItems[index].isActive = !newItems[index].isActive;
    // setItems(newItems);
  };
  return (
    <Fragment>
      <div
        className={`flex gap-3 items-center text-lg md:text-xl xl:text-2xl border-b border-[red] text-white pb-8 pt-4 cursor-pointer mb-3 font-gillsans mt-2 px-2 w-full`}
        onClick={onClickHandler}
      >
        <div>
          <div className={`circle-plus ${isOpen ? accordianPlus : ""}`}>
            <div className="circle">
              <div className="horizontal"></div>
              <div className="vertical"></div>
            </div>
          </div>
          <div className={`circle-plus-two ${isOpen ? accordianPlus : ""}`}>
            <div className={`circle`}>
              <div className="horizontal"></div>
              <div className="vertical"></div>
            </div>
          </div>
        </div>
        <h4>Unit Types</h4>
      </div>
      {/* <CSSTransition
          in={items[index].isActive}
          timeout={200}
          nodeRef={nodeRef}
          classNames="accordian"
          mousntOnEnter
          unmountOnExit
        > */}
      {props.data && (
        <div
          className={`${
            isOpen ? "visible translate-y-0" : "invisible -translate-y-8"
          } text-gray-50 sm:pl-4 md:pl-8 lg:pl-12 mt-8 transition-all duration-100`}
        >
          <PropertyTabs {...props} />
        </div>
      )}
      {/* </CSSTransition> */}
    </Fragment>
  );
};

export default Accordion;
