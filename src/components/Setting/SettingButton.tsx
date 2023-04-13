import { FC } from "react";
import { AvgButton } from "./Setting.styled";

interface SettingButtonProps {
  active?: boolean;
  title?: "저장" | "수정" | "사용";
  event?: () => void;
}

const SettingButton: FC<SettingButtonProps> = ({ active, event, title }) => {
  return <AvgButton onClick={event}>{title}</AvgButton>;
};

export default SettingButton;
