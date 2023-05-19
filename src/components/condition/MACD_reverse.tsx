import { Dispatch, FC } from "react";
import { Input } from "../common/input";
import { TermSelectBox, TrendSelectBox } from "../common/select/SelectBox";
import { useMACD_reverseType } from "./condition";
import ConditionUseButton from "./ConditionUseButton";

interface Props {
  MACD_re: useMACD_reverseType;
  setMACD_re: Dispatch<useMACD_reverseType>;
}

const MACD_reverse: FC<Props> = ({ MACD_re, setMACD_re }) => {
  return (
    <div className="flex flex-col gap-2">
      <div>MACD 반전</div>
      <div className="flex gap-2 items-center">
        <TermSelectBox
          event={(e) => setMACD_re({ ...MACD_re, term: e.target.value })}
          value={MACD_re.term}
          width={70}
        />{" "}
        주기
        <Input
          onChange={(e) => setMACD_re({ ...MACD_re, timing: e.target.value })}
          value={MACD_re.timing}
          width={70}
          type="number"
        />{" "}
        봉전 기준
      </div>
      <div className="flex gap-2 items-center">
        단기
        <Input
          onChange={(e) => setMACD_re({ ...MACD_re, short: e.target.value })}
          value={MACD_re.short}
          width={70}
          type="number"
        />
        장기
        <Input
          onChange={(e) => setMACD_re({ ...MACD_re, long: e.target.value })}
          value={MACD_re.long}
          width={70}
          type="number"
        />
      </div>
      <div className="flex gap-2 items-center">
        MACD
        <Input
          onChange={(e) =>
            setMACD_re({ ...MACD_re, trend_term: e.target.value })
          }
          value={MACD_re.trend_term}
          width={70}
          type="number"
        />
        봉 연속 추세유지 후
        <TrendSelectBox
          event={(e) => setMACD_re({ ...MACD_re, trend_type: e.target.value })}
          value={MACD_re.trend_type}
          width={70}
        />
        반전
      </div>
      <ConditionUseButton state={MACD_re} setState={setMACD_re} />
    </div>
  );
};

export default MACD_reverse;
