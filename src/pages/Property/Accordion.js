import { Fragment, useState, useRef } from "react";
import PropertyTabs from "./PropertyTabs";
import { CSSTransition } from "react-transition-group";
import { useEffect } from "react";

const Accordion = (props) => {
  const [accordianPlus, setAccordianPlus] = useState("closed");

  const nodeRef = useRef(null);

  // List items
  const [items, setItems] = useState([
    {
      title: "Unit Types",
      content: <PropertyTabs {...props} />,
      isActive: false,
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
  useEffect(() => {
    console.log(props.unitTypes);
    console.log(props.data.id);
  }, []);
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
            </div>
          </div>
          <h4>{item.title}</h4>
        </div>
        {/* <CSSTransition
          in={items[index].isActive}
          timeout={200}
          nodeRef={nodeRef}
          classNames="accordian"
          mousntOnEnter
          unmountOnExit
        > */}
        <div
          className={`${
            items[index].isActive
              ? "visible translate-y-0"
              : "invisible -translate-y-8"
          } text-gray-50 sm:pl-4 md:pl-8 lg:pl-12 mt-8 transition-all duration-100`}
        >
          {item.content}
        </div>
        {/* </CSSTransition> */}
      </Fragment>
    );
  });
  return <div className="mt-2 px-2 w-full">{renderedItems}</div>;
};

export default Accordion;
