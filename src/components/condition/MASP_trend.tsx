import { Dispatch, FC } from "react";
import { Input } from "../common/input";
import { TermSelectBox, TrendSelectBox } from "../common/select/SelectBox";
import { useMASP_trendType } from "./condition";
import ConditionUseButton from "./ConditionUseButton";

interface Props {
  MASP_t: useMASP_trendType;
  setMASP_t: Dispatch<useMASP_trendType>;
}

const MASP_trend: FC<Props> = ({ MASP_t, setMASP_t }) => {
  return (
    <div className="flex flex-col gap-2">
      <div>이동 평균 추세</div>
      <div className="flex gap-2 items-center">
        <TermSelectBox
          width={70}
          value={MASP_t.term}
          event={(e) => setMASP_t({ ...MASP_t, term: e.target.value })}
        />
        주기
        <Input
          value={MASP_t.timing}
          width={70}
          onChange={(e) => setMASP_t({ ...MASP_t, timing: e.target.value })}
        />
        봉전 기준
      </div>
      <div className="flex gap-2 items-center">
        종가
        <Input
          value={MASP_t.disparity_term}
          width={70}
          onChange={(e) =>
            setMASP_t({ ...MASP_t, disparity_term: e.target.value })
          }
        />
        이평
        <TrendSelectBox
          value={MASP_t.trend_type}
          width={70}
          event={(e) => setMASP_t({ ...MASP_t, trend_type: e.target.value })}
        />
        추세유지
        <Input
          value={MASP_t.trend_term}
          width={70}
          onChange={(e) => setMASP_t({ ...MASP_t, trend_term: e.target.value })}
          type="number"
        />{" "}
        이상
      </div>
      <ConditionUseButton state={MASP_t} setState={setMASP_t} />
    </div>
  );
};

export default MASP_trend;
