import { Dispatch, FC } from "react";
import { Input } from "../common/input";
import { TermSelectBox, TrendSelectBox } from "../common/select/SelectBox";
import { useMACDS_trendType } from "./condition";
import ConditionUseButton from "./ConditionUseButton";

interface Props {
  MACDS_t: useMACDS_trendType;
  setMACDS_t: Dispatch<useMACDS_trendType>;
}

const MACDS_trend: FC<Props> = ({ MACDS_t, setMACDS_t }) => {
  return (
    <div className="flex flex-col gap-2">
      <div>MACD Signal 추세</div>
      <div className="flex gap-2">
        <TermSelectBox
          value={MACDS_t.term}
          event={(e) => setMACDS_t({ ...MACDS_t, term: e.target.value })}
          width={70}
        />{" "}
        주기
        <Input
          value={MACDS_t.timing}
          onChange={(e) => setMACDS_t({ ...MACDS_t, timing: e.target.value })}
          width={70}
          type="number"
        />{" "}
        봉전 기준
      </div>
      <div className="flex gap-2">
        단기
        <Input
          value={MACDS_t.short}
          onChange={(e) => setMACDS_t({ ...MACDS_t, short: e.target.value })}
          width={70}
          type="number"
        />
        장기
        <Input
          value={MACDS_t.long}
          onChange={(e) => setMACDS_t({ ...MACDS_t, long: e.target.value })}
          width={70}
          type="number"
        />
      </div>
      <div className="flex gap-2">
        MACD
        <Input
          value={MACDS_t.trend_term}
          onChange={(e) =>
            setMACDS_t({ ...MACDS_t, trend_term: e.target.value })
          }
          width={70}
          type="number"
        />
        봉 연속 상승
        <TrendSelectBox
          value={MACDS_t.trend_type}
          event={(e) => setMACDS_t({ ...MACDS_t, trend_type: e.target.value })}
          width={70}
        />
      </div>
      <ConditionUseButton state={MACDS_t} setState={setMACDS_t} />
    </div>
  );
};

export default MACDS_trend;
