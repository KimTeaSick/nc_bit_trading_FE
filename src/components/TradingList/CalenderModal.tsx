import CustomCalendar from "../common/CustomCalendar";
import { ModalBack } from "./Trading.styled";

const CalenderModal = ({ onClose }: any) => {
  return (
    <ModalBack>
      <div className="modalContent">
        <CustomCalendar onClose={onClose} />
      </div>
    </ModalBack>
  );
};

export default CalenderModal;
