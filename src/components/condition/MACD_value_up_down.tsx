import { Dispatch, FC } from "react";
import { Input } from "../common/input";
import { TermSelectBox, UpDownSelectBox } from "../common/select/SelectBox";
import { useMACD_value_up_downType } from "./condition";
import ConditionUseButton from "./ConditionUseButton";

interface Props {
  MACD_v_u_d: useMACD_value_up_downType;
  setMACD_v_u_d: Dispatch<useMACD_value_up_downType>;
}

const MACD_value_up_down: FC<Props> = ({ MACD_v_u_d, setMACD_v_u_d }) => {
  return (
    <div className="flex flex-col gap-2">
      <div>MACD 기준값 이상 이하</div>
      <div className="flex gap-2">
        <TermSelectBox
          event={(e) => setMACD_v_u_d({ ...MACD_v_u_d, term: e.target.value })}
          value={MACD_v_u_d.term}
          width={70}
        />{" "}
        주기
        <Input
          onChange={(e) =>
            setMACD_v_u_d({ ...MACD_v_u_d, timing: e.target.value })
          }
          value={MACD_v_u_d.timing}
          width={70}
          type="number"
        />{" "}
        봉전 기준
      </div>
      <div className="flex gap-2">
        단기
        <Input
          onChange={(e) =>
            setMACD_v_u_d({ ...MACD_v_u_d, short: e.target.value })
          }
          value={MACD_v_u_d.short}
          width={70}
          type="number"
        />
        장기
        <Input
          onChange={(e) =>
            setMACD_v_u_d({ ...MACD_v_u_d, long: e.target.value })
          }
          value={MACD_v_u_d.long}
          width={70}
          type="number"
        />
      </div>
      <div className="flex gap-2">
        MACD
        <Input
          onChange={(e) =>
            setMACD_v_u_d({ ...MACD_v_u_d, value: e.target.value })
          }
          value={MACD_v_u_d.value}
          width={70}
          type="number"
        />
        선
        <UpDownSelectBox
          event={(e) =>
            setMACD_v_u_d({ ...MACD_v_u_d, value_up_down: e.target.value })
          }
          value={MACD_v_u_d.value_up_down}
          width={70}
        />
      </div>
      <ConditionUseButton state={MACD_v_u_d} setState={setMACD_v_u_d} />
    </div>
  );
};

export default MACD_value_up_down;
