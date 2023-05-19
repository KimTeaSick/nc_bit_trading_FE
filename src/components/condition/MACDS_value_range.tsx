import { Dispatch, FC } from "react";
import { Input } from "../common/input";
import { TermSelectBox } from "../common/select/SelectBox";
import { useMACDS_value_rangeType } from "./condition";
import ConditionUseButton from "./ConditionUseButton";

interface Props {
  MACDS_v_r: useMACDS_value_rangeType;
  setMACDS_v_r: Dispatch<useMACDS_value_rangeType>;
}

const MACDS_value_range: FC<Props> = ({ MACDS_v_r, setMACDS_v_r }) => {
  return (
    <div className="flex flex-col gap-2">
      <div>MACD Signal 기준값 범위</div>
      <div className="flex gap-2">
        <TermSelectBox
          event={(e) => setMACDS_v_r({ ...MACDS_v_r, term: e.target.value })}
          value={MACDS_v_r.term}
          width={70}
        />{" "}
        주기
        <Input
          onChange={(e) =>
            setMACDS_v_r({ ...MACDS_v_r, timing: e.target.value })
          }
          value={MACDS_v_r.timing}
          width={70}
          type="number"
        />{" "}
        봉전 기준
      </div>
      <div className="flex gap-1">
        단기
        <Input
          onChange={(e) =>
            setMACDS_v_r({ ...MACDS_v_r, short: e.target.value })
          }
          value={MACDS_v_r.short}
          width={60}
          type="number"
        />
        장기
        <Input
          onChange={(e) => setMACDS_v_r({ ...MACDS_v_r, long: e.target.value })}
          value={MACDS_v_r.long}
          width={60}
          type="number"
        />
        시그널
        <Input
          onChange={(e) =>
            setMACDS_v_r({ ...MACDS_v_r, signal: e.target.value })
          }
          value={MACDS_v_r.signal}
          width={60}
          type="number"
        />
      </div>
      <div className="flex gap-1">
        MACD SIGNAL
        <Input
          onChange={(e) =>
            setMACDS_v_r({ ...MACDS_v_r, value_range_one: e.target.value })
          }
          value={MACDS_v_r.value_range_one}
          width={60}
          type="number"
        />
        -
        <Input
          onChange={(e) =>
            setMACDS_v_r({ ...MACDS_v_r, value_range_two: e.target.value })
          }
          value={MACDS_v_r.value_range_two}
          width={60}
          type="number"
        />
      </div>
      <ConditionUseButton state={MACDS_v_r} setState={setMACDS_v_r} />
    </div>
  );
};

export default MACDS_value_range;
