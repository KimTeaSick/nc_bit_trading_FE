import { Dispatch, FC } from "react";
import { Input } from "../common/input";
import { OverSelectBox, TermSelectBox } from "../common/select/SelectBox";
import { useMACD_value_overType } from "./condition";
import ConditionUseButton from "./ConditionUseButton";

interface Props {
  MACD_v_o: useMACD_value_overType;
  setMACD_v_o: Dispatch<useMACD_value_overType>;
}

const MACD_value_over: FC<Props> = ({ MACD_v_o, setMACD_v_o }) => {
  return (
    <div className="flex flex-col gap-2">
      <div>MACD 기준값 돌파</div>
      <div className="flex gap-2">
        <TermSelectBox
          event={(e) => setMACD_v_o({ ...MACD_v_o, term: e.target.value })}
          value={MACD_v_o.term}
          width={70}
        />{" "}
        주기
        <Input
          onChange={(e) => setMACD_v_o({ ...MACD_v_o, timing: e.target.value })}
          value={MACD_v_o.timing}
          width={70}
          type="number"
        />{" "}
        봉전 기준
      </div>
      <div className="flex gap-2">
        단기
        <Input
          onChange={(e) => setMACD_v_o({ ...MACD_v_o, short: e.target.value })}
          value={MACD_v_o.short}
          width={70}
          type="number"
        />
        장기
        <Input
          onChange={(e) => setMACD_v_o({ ...MACD_v_o, long: e.target.value })}
          value={MACD_v_o.long}
          width={70}
          type="number"
        />
      </div>
      <div className="flex gap-2">
        MACD
        <Input
          onChange={(e) => setMACD_v_o({ ...MACD_v_o, value: e.target.value })}
          value={MACD_v_o.value}
          width={70}
          type="number"
        />
        선
        <OverSelectBox
          event={(e) =>
            setMACD_v_o({ ...MACD_v_o, value_over_type: e.target.value })
          }
          value={MACD_v_o.value_over_type}
          width={70}
        />
        돌파
      </div>
      <ConditionUseButton state={MACD_v_o} setState={setMACD_v_o} />
    </div>
  );
};

export default MACD_value_over;
