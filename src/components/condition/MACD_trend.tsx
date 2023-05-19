import { Dispatch, FC } from "react";
import { Input } from "../common/input";
import { TermSelectBox, TrendSelectBox } from "../common/select/SelectBox";
import { useMACD_trendType } from "./condition";
import ConditionUseButton from "./ConditionUseButton";

interface Props {
  MACD_t: useMACD_trendType;
  setMACD_t: Dispatch<useMACD_trendType>;
}

const MACD_trend: FC<Props> = ({ MACD_t, setMACD_t }) => {
  return (
    <div className="flex flex-col gap-2">
      <div>MACD 추세</div>
      <div className="flex gap-2 items-center">
        <TermSelectBox
          event={(e) => setMACD_t({ ...MACD_t, term: e.target.value })}
          value={MACD_t.term}
          width={70}
        />{" "}
        주기
        <Input
          onChange={(e) => setMACD_t({ ...MACD_t, timing: e.target.value })}
          value={MACD_t.timing}
          width={70}
          type="number"
        />{" "}
        봉전 기준
      </div>
      <div className="flex gap-2 items-center">
        단기
        <Input
          onChange={(e) => setMACD_t({ ...MACD_t, short: e.target.value })}
          value={MACD_t.short}
          width={70}
          type="number"
        />
        장기
        <Input
          onChange={(e) => setMACD_t({ ...MACD_t, long: e.target.value })}
          value={MACD_t.long}
          width={70}
          type="number"
        />
      </div>
      <div className="flex gap-2 items-center">
        MACD
        <Input
          onChange={(e) => setMACD_t({ ...MACD_t, trend_term: e.target.value })}
          value={MACD_t.trend_term}
          width={70}
          type="number"
        />
        봉 연속
        <TrendSelectBox
          event={(e) => setMACD_t({ ...MACD_t, trend_type: e.target.value })}
          value={MACD_t.trend_type}
          width={70}
        />
      </div>
      <ConditionUseButton state={MACD_t} setState={setMACD_t} />
    </div>
  );
};

export default MACD_trend;
