import { RootStateType } from "@/module/rootReducer.d";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { useSelector } from "react-redux";
import AvgLineButton from "./AvgLineButton";
import { AvgLineDetailActive, AvgLineDetailComplete } from "./AvgLineDetail";
import { AvgLineSection } from "./Setting.styled";

interface AvgLineSettingProps {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

const AvgLineSetting: FC<AvgLineSettingProps> = ({ active, setActive }) => {
  const AvgLine = useSelector((state: RootStateType) => state.common);
  const [oneRange, setOneRange] = useState("5");
  const [twoRange, setTwoRange] = useState("20");
  const [threeRange, setThreeRange] = useState("60");
  const [oneColor, setOneColor] = useState("green");
  const [twoColor, setTwoColor] = useState("skyblue");
  const [threeColor, setThreeColor] = useState("orange");

  const {
    firstDisparityTerm,
    secondDisparityTerm,
    thirdDisparityTerm,
    firstDisparityColor,
    secondDisparityColor,
    thirdDisparityColor,
  } = useSelector((state: RootStateType) => state.setting);

  return (
    <AvgLineSection>
      <p>이동평균선 설정</p>
      {active === true ? (
        <>
          <AvgLineDetailActive
            lineName="Line One"
            range={oneRange}
            color={oneColor}
            setColor={setOneColor}
            setRange={setOneRange}
          />
          <AvgLineDetailActive
            lineName="Line Two"
            range={twoRange}
            color={twoColor}
            setColor={setTwoColor}
            setRange={setTwoRange}
          />
          <AvgLineDetailActive
            lineName="Line Three"
            range={threeRange}
            color={threeColor}
            setColor={setThreeColor}
            setRange={setThreeRange}
          />
        </>
      ) : (
        <>
          <AvgLineDetailComplete
            lineName="Line One"
            range={firstDisparityTerm}
            color={firstDisparityColor}
          />
          <AvgLineDetailComplete
            lineName="Line Two"
            range={secondDisparityTerm}
            color={secondDisparityColor}
          />
          <AvgLineDetailComplete
            lineName="Line Three"
            range={thirdDisparityTerm}
            color={thirdDisparityColor}
          />
        </>
      )}
      <div className="buttonSection">
        <AvgLineButton
          oneRange={oneRange}
          twoRange={twoRange}
          threeRange={threeRange}
          oneColor={oneColor}
          twoColor={twoColor}
          threeColor={threeColor}
          active={active}
          setActive={setActive}
        />
      </div>
    </AvgLineSection>
  );
};

export default AvgLineSetting;
