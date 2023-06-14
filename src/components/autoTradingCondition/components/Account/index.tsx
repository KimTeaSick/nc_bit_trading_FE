import { Dispatch, FC, SetStateAction } from "react";
import { useAccountType } from "../../type/autoTrading";
import TradingConditionCover from "../TradingConditionCover";
import PriceCount from "./PriceCount";
import TradingAutoCancle from "./TradingAutoCancle";
import ReBuyLmit from "./ReBuyLmit";
import LossCut from "./LossCut";

const CONDITION_COVER = "flex gap-2";
const MIDDLE_LINE = "border-l-gray-300 border-l-2 pl-5";

interface Props {
  value: useAccountType;
  setValue: Dispatch<SetStateAction<useAccountType>>;
}

const AcountComponent: FC<Props> = ({ value, setValue }) => {
  return (
    <TradingConditionCover title="계좌">
      <div className={CONDITION_COVER}>
        <div>
          <PriceCount value={value} setValue={setValue} />
          <LossCut value={value} setValue={setValue} />
        </div>
        <div className={MIDDLE_LINE}>
          <TradingAutoCancle value={value} setValue={setValue} />
          <ReBuyLmit value={value} setValue={setValue} />
        </div>
      </div>
    </TradingConditionCover>
  );
};

export default AcountComponent;
