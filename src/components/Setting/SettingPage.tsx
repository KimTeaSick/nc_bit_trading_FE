import { FC, useState } from "react";
import AvgLineSetting from "./AvgLineSetting";
import SearchOption from "./SearchOption";
import { SettingWrapper } from "./Setting.styled";

const SettingPage: FC = () => {
  const [settingActive, setSettingActive] = useState(false);

  return (
    <div>
      <p>Setting</p>
      <SettingWrapper>
        <AvgLineSetting active={settingActive} setActive={setSettingActive} />
        <SearchOption />
      </SettingWrapper>
    </div>
  );
};

export default SettingPage;
