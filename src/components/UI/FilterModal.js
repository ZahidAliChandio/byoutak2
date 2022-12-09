import { Fragment } from "react";
import ReactDOM from "react-dom";

const BackDrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0  w-full h-screen bg-[rgba(0,0,0,0.3)] z-40 cursor-pointer"
      onClick={props.onClick}
    ></div>
  );
};
const ModalOverlay = (props) => {
  return (
    <div className={`${props.className} fixed top-[8vh] left-[50%] w-[95%] sm:w-4/5 md:w-9/12 lg:w-3/5 -translate-x-1/2 rounded-2xl bg-white box-shadow z-50`}>
      <div className="content">{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlay");
const FilterModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClick={props.onClose}>{props.children}</BackDrop>,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay className={props.className}>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};
export default FilterModal;
