import { Dispatch, FC } from "react";
import { Input } from "../common/input";
import { OverSelectBox, TermSelectBox } from "../common/select/SelectBox";
import { useMACD_line_overType } from "./condition";
import ConditionUseButton from "./ConditionUseButton";

interface Props {
  MACD_l_o: useMACD_line_overType;
  setMACD_l_o: Dispatch<useMACD_line_overType>;
}

const MACD_line_over: FC<Props> = ({ MACD_l_o, setMACD_l_o }) => {
  return (
    <div className="flex flex-col gap-2">
      <div>MACD 기준선 돌파</div>
      <div className="flex gap-2 items-center">
        <TermSelectBox
          event={(e) => setMACD_l_o({ ...MACD_l_o, term: e.target.value })}
          value={MACD_l_o.term}
          width={70}
        />{" "}
        주기
        <Input
          onChange={(e) => setMACD_l_o({ ...MACD_l_o, timing: e.target.value })}
          value={MACD_l_o.timing}
          width={70}
          type="number"
        />{" "}
        봉전 기준
      </div>
      <div className="flex gap-2 items-center">
        단기
        <Input
          onChange={(e) => setMACD_l_o({ ...MACD_l_o, short: e.target.value })}
          value={MACD_l_o.short}
          width={60}
          type="number"
        />
        장기
        <Input
          onChange={(e) => setMACD_l_o({ ...MACD_l_o, long: e.target.value })}
          value={MACD_l_o.long}
          width={60}
          type="number"
        />
        시그널
        <Input
          onChange={(e) => setMACD_l_o({ ...MACD_l_o, signal: e.target.value })}
          value={MACD_l_o.signal}
          width={60}
          type="number"
        />
      </div>
      <div className="flex gap-2 items-center">
        MACD SIGNAL선
        <OverSelectBox
          event={(e) => setMACD_l_o({ ...MACD_l_o, line_over: e.target.value })}
          value={MACD_l_o.line_over}
          width={60}
        />
        돌파
      </div>
      <ConditionUseButton state={MACD_l_o} setState={setMACD_l_o} />
    </div>
  );
};

export default MACD_line_over;
