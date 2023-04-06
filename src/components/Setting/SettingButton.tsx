import { FC } from "react";
import { AvgButton } from "./Setting.styled";

interface SettingButtonProps {
  active?: boolean;
  event?: () => void;
}

const SettingButton: FC<SettingButtonProps> = ({ active, event }) => {
  return <AvgButton onClick={event}>{active ? "저장" : "수정"}</AvgButton>;
};

export default SettingButton;
