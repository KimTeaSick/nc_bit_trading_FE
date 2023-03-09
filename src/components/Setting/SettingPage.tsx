import { FC, useState } from "react";
import AvgLineSetting from "./AvgLineSetting";

const SettingPage: FC = () => {
  const [settingActive, setSettingActive] = useState(false);

  return (
    <div>
      <p>Setting</p>
      <AvgLineSetting active={settingActive} setActive={setSettingActive} />
    </div>
  );
};

export default SettingPage;
