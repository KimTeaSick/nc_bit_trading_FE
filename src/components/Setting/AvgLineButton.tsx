import { Dispatch, FC, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { AvgButton } from "./Setting.styled";
import {
  setLineOneRange,
  setLineTwoRange,
  setLineThreeRange,
  setLineOneColor,
  setLineTwoColor,
  setLineThreeColor,
} from "../../module/common/index";

interface AvgLineButtonProps {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  oneRange: number;
  twoRange: number;
  threeRange: number;
  oneColor: string;
  twoColor: string;
  threeColor: string;
}

const AvgLineButton: FC<AvgLineButtonProps> = ({
  active,
  setActive,
  oneRange,
  twoRange,
  threeRange,
  oneColor,
  twoColor,
  threeColor,
}) => {
  const dispatch = useDispatch();
  const settingButtonEvent = () => {
    dispatch(setLineOneRange(oneRange));
    dispatch(setLineTwoRange(twoRange));
    dispatch(setLineThreeRange(threeRange));
    dispatch(setLineOneColor(oneColor));
    dispatch(setLineTwoColor(twoColor));
    dispatch(setLineThreeColor(threeColor));
    setActive(false);
  };
  return (
    <AvgButton
      onClick={() => (active ? settingButtonEvent() : setActive(true))}
    >
      {active ? "저장" : "수정"}
    </AvgButton>
  );
};

export default AvgLineButton;
