import { Dispatch, FC } from "react";
import { Input } from "../common/input";
import { TermSelectBox, TrendSelectBox } from "../common/select/SelectBox";
import { useD_trendType } from "./condition";
import ConditionUseButton from "./ConditionUseButton";

interface Props {
  D_trend: useD_trendType;
  setD_trend: Dispatch<useD_trendType>;
}

const D_trend: FC<Props> = ({ D_trend, setD_trend }) => {
  return (
    <div className="flex flex-col gap-2">
      <div>이격도 추세</div>
      <div className="flex gap-2">
        <TermSelectBox
          event={(e) => setD_trend({ ...D_trend, term: e.target.value })}
          value={D_trend.term}
          width={70}
        />{" "}
        주기
        <Input
          onChange={(e) => setD_trend({ ...D_trend, timing: e.target.value })}
          value={D_trend.timing}
          width={70}
          type="number"
        />{" "}
        봉전 기준
      </div>
      <div className="flex gap-2">
        기간
        <Input
          onChange={(e) => setD_trend({ ...D_trend, range: e.target.value })}
          value={D_trend.range}
          width={70}
          type="number"
        />
        이격도
        <Input
          onChange={(e) =>
            setD_trend({ ...D_trend, trend_term: e.target.value })
          }
          value={D_trend.trend_term}
          width={70}
          type="number"
        />
        봉 연속
        <TrendSelectBox
          event={(e) => setD_trend({ ...D_trend, trend_type: e.target.value })}
          value={D_trend.trend_type}
          width={70}
        />
      </div>
      <ConditionUseButton state={D_trend} setState={setD_trend} />
    </div>
  );
};

export default D_trend;
