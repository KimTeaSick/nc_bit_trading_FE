import { Dispatch, FC } from "react";
import { Input } from "../common/input";
import { OverSelectBox, TermSelectBox } from "../common/select/SelectBox";
import { useMACDS_value_overType } from "./condition";
import ConditionUseButton from "./ConditionUseButton";

interface Props {
  MACDS_v: useMACDS_value_overType;
  setMACDS_v: Dispatch<useMACDS_value_overType>;
}

const MACDS_value_over: FC<Props> = ({ MACDS_v, setMACDS_v }) => {
  return (
    <div className="flex flex-col gap-1">
      <div>MACD Signal 기준값 돌파</div>
      <div className="flex gap-2">
        <TermSelectBox
          event={(e) => setMACDS_v({ ...MACDS_v, term: e.target.value })}
          width={70}
          value={MACDS_v.term}
        />{" "}
        주기
        <Input
          onChange={(e) => setMACDS_v({ ...MACDS_v, timing: e.target.value })}
          width={70}
          value={MACDS_v.timing}
          type="number"
        />{" "}
        봉전 기준
      </div>
      <div className="flex gap-1">
        단기
        <Input
          onChange={(e) => setMACDS_v({ ...MACDS_v, short: e.target.value })}
          width={60}
          value={MACDS_v.short}
          type="number"
        />
        장기
        <Input
          onChange={(e) => setMACDS_v({ ...MACDS_v, long: e.target.value })}
          width={60}
          value={MACDS_v.long}
          type="number"
        />
        시그널
        <Input
          onChange={(e) => setMACDS_v({ ...MACDS_v, signal: e.target.value })}
          width={60}
          value={MACDS_v.signal}
          type="number"
        />
      </div>
      <div className="flex gap-1">
        MACD SIGNAL선
        <Input
          onChange={(e) => setMACDS_v({ ...MACDS_v, value: e.target.value })}
          width={60}
          value={MACDS_v.value}
          type="number"
        />
        <OverSelectBox
          event={(e) =>
            setMACDS_v({ ...MACDS_v, value_over_type: e.target.value })
          }
          width={60}
          value={MACDS_v.value_over_type}
        />
        돌파
      </div>
      <ConditionUseButton state={MACDS_v} setState={setMACDS_v} />
    </div>
  );
};

export default MACDS_value_over;
