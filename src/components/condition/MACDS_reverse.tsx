import { Dispatch, FC } from "react";
import { Input } from "../common/input";
import { TermSelectBox, TrendSelectBox } from "../common/select/SelectBox";
import { useMACDS_reverseType } from "./condition";
import ConditionUseButton from "./ConditionUseButton";

interface Props {
  MACDS_r: useMACDS_reverseType;
  setMACDS_r: Dispatch<useMACDS_reverseType>;
}

const MACDS_reverse: FC<Props> = ({ MACDS_r, setMACDS_r }) => {
  return (
    <div className="flex flex-col gap-2">
      <div>MACD Signal 반전</div>
      <div className="flex gap-2">
        <TermSelectBox
          event={(e) => setMACDS_r({ ...MACDS_r, term: e.target.value })}
          value={MACDS_r.term}
          width={70}
        />{" "}
        주기
        <Input
          onChange={(e) => setMACDS_r({ ...MACDS_r, timing: e.target.value })}
          value={MACDS_r.timing}
          width={70}
          type="number"
        />{" "}
        봉전 기준
      </div>
      <div className="flex gap-2">
        단기
        <Input
          onChange={(e) => setMACDS_r({ ...MACDS_r, short: e.target.value })}
          value={MACDS_r.short}
          width={70}
          type="number"
        />
        장기
        <Input
          onChange={(e) => setMACDS_r({ ...MACDS_r, long: e.target.value })}
          value={MACDS_r.long}
          width={70}
          type="number"
        />
      </div>
      <div className="flex gap-2">
        MACD
        <Input
          onChange={(e) =>
            setMACDS_r({ ...MACDS_r, trend_term: e.target.value })
          }
          value={MACDS_r.trend_term}
          width={70}
          type="number"
        />
        봉 연속 추세유지 후
        <TrendSelectBox
          event={(e) => setMACDS_r({ ...MACDS_r, trend_type: e.target.value })}
          value={MACDS_r.trend_type}
          width={70}
        />
        반전
      </div>
      <ConditionUseButton state={MACDS_r} setState={setMACDS_r} />
    </div>
  );
};

export default MACDS_reverse;
