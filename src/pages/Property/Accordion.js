import { Fragment, useState, useRef } from "react";
import PropertyTabs from "./PropertyTabs";
import { CSSTransition } from "react-transition-group";

const Accordion = (props) => {
  const [accordianPlus, setAccordianPlus] = useState("closed");
<<<<<<< HEAD
  const [isOpen, setIsOpen] = useState(false);

  const nodeRef = useRef(null);

=======
>>>>>>> f8e1d23268ffa861343a5ca60d9e85f86fd9a99e
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
<<<<<<< HEAD
  useEffect(() => {
    // console.log(props.unitTypes);
    // console.log(props.data.id);
  }, []);
  return (
    <Fragment>
      <div
        className={`flex gap-3 items-center text-lg md:text-xl xl:text-2xl border-b border-[red] text-white py-4 cursor-pointer mb-3 font-gillsans mt-2 px-2 w-full`}
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
=======

  const renderedItems = items.map((item, index) => {
    return (
      <Fragment key={index}>
        <div
          className={`flex gap-3 items-center text-lg md:text-xl xl:text-2xl border-b border-[red] text-white py-4 cursor-pointer mb-3 font-gillsans`}
          onClick={() => onClickHandler(index)}
        >
          <div>
            <div
              className={`circle-plus ${
                items[index].isActive ? accordianPlus : null
              }`}
            >
              <div className="circle">
                <div className="horizontal"></div>
                <div className="vertical"></div>
              </div>
            </div>
            <div
              className={`circle-plus-two ${
                items[index].isActive ? accordianPlus : null
              }`}
            >
              <div className={`circle`}>
                <div className="horizontal"></div>
                <div className="vertical"></div>
              </div>
>>>>>>> f8e1d23268ffa861343a5ca60d9e85f86fd9a99e
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
