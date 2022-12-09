import Modal from "../../../components/UI/Modal";
import Delivery from "./Delivery"


const DeliveryModal = (props) => {
  return (
    <Modal
      onClose={() => props.changeActiveItemIndex(null)}
      className={`${props.className} w-4/5 sm:!w-1/2 lg:!w-1/3 xl:!w-1/3 2xl:!w-1/4`}
    >
      <Delivery/>
    </Modal>
  );
};
export default DeliveryModal;