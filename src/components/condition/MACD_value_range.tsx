import { Dispatch, FC } from "react";
import { Input } from "../common/input";
import { TermSelectBox } from "../common/select/SelectBox";
import { useMACD_value_rangeType } from "./condition";
import ConditionUseButton from "./ConditionUseButton";

interface Props {
  MACD_v_r: useMACD_value_rangeType;
  setMACD_v_r: Dispatch<useMACD_value_rangeType>;
}

const MACD_value_range: FC<Props> = ({ MACD_v_r, setMACD_v_r }) => {
  return (
    <div className="flex flex-col gap-2">
      <div>MACD 기준값 범위</div>
      <div className="flex gap-2">
        <TermSelectBox
          event={(e) => setMACD_v_r({ ...MACD_v_r, term: e.target.value })}
          value={MACD_v_r.term}
          width={70}
        />{" "}
        주기
        <Input
          value={MACD_v_r.timing}
          width={70}
          type="number"
          onChange={(e) => setMACD_v_r({ ...MACD_v_r, timing: e.target.value })}
        />{" "}
        봉전 기준
      </div>
      <div className="flex gap-2">
        단기
        <Input
          onChange={(e) => setMACD_v_r({ ...MACD_v_r, short: e.target.value })}
          value={MACD_v_r.short}
          width={70}
          type="number"
        />
        장기
        <Input
          onChange={(e) => setMACD_v_r({ ...MACD_v_r, long: e.target.value })}
          value={MACD_v_r.long}
          width={70}
          type="number"
        />
      </div>
      <div className="flex gap-2">
        MACD
        <Input
          onChange={(e) =>
            setMACD_v_r({ ...MACD_v_r, value_range_one: e.target.value })
          }
          value={MACD_v_r.value_range_one}
          width={70}
          type="number"
        />
        -
        <Input
          onChange={(e) =>
            setMACD_v_r({ ...MACD_v_r, value_range_two: e.target.value })
          }
          value={MACD_v_r.value_range_two}
          width={70}
          type="number"
        />
      </div>
      <ConditionUseButton state={MACD_v_r} setState={setMACD_v_r} />
    </div>
  );
};

export default MACD_value_range;
