import { Dispatch, FC } from "react";
import { Input } from "../common/input";
import { TermSelectBox, UpDownSelectBox } from "../common/select/SelectBox";
import { useMACD_line_comparisonType } from "./condition";
import ConditionUseButton from "./ConditionUseButton";

interface Props {
  MACD_l_c: useMACD_line_comparisonType;
  setMACD_l_c: Dispatch<useMACD_line_comparisonType>;
}

const MACD_line_comparison: FC<Props> = ({ MACD_l_c, setMACD_l_c }) => {
  return (
    <div className="flex flex-col gap-2">
      <div>MACD 기준선 비교</div>
      <div className="flex gap-2">
        <TermSelectBox
          event={(e) => setMACD_l_c({ ...MACD_l_c, term: e.target.value })}
          value={MACD_l_c.term}
          width={70}
        />{" "}
        주기
        <Input
          onChange={(e) => setMACD_l_c({ ...MACD_l_c, timing: e.target.value })}
          value={MACD_l_c.timing}
          width={70}
          type="number"
        />{" "}
        봉전 기준
      </div>
      <div className="flex gap-1">
        단기
        <Input
          onChange={(e) => setMACD_l_c({ ...MACD_l_c, short: e.target.value })}
          value={MACD_l_c.short}
          width={60}
          type="number"
        />
        장기
        <Input
          onChange={(e) => setMACD_l_c({ ...MACD_l_c, long: e.target.value })}
          value={MACD_l_c.long}
          width={60}
          type="number"
        />
        시그널
        <Input
          onChange={(e) => setMACD_l_c({ ...MACD_l_c, signal: e.target.value })}
          value={MACD_l_c.signal}
          width={60}
          type="number"
        />
      </div>
      <div>
        MACD SIGNAL선
        <UpDownSelectBox
          event={(e) =>
            setMACD_l_c({ ...MACD_l_c, line_comparison: e.target.value })
          }
          value={MACD_l_c.line_comparison}
          width={60}
        />
      </div>
      <ConditionUseButton state={MACD_l_c} setState={setMACD_l_c} />
    </div>
  );
};

export default MACD_line_comparison;
