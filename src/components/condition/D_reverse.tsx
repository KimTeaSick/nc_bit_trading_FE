import { Dispatch, FC } from "react";
import { Input } from "../common/input";
import { TermSelectBox, TrendSelectBox } from "../common/select/SelectBox";
import { useD_reverseType } from "./condition";
import ConditionUseButton from "./ConditionUseButton";

interface Props {
  D_re: useD_reverseType;
  setD_re: Dispatch<useD_reverseType>;
}

const D_reverse: FC<Props> = ({ D_re, setD_re }) => {
  return (
    <div className="flex flex-col gap-2">
      <div>이격도 기준값 반전</div>
      <div className="flex gap-2">
        <TermSelectBox
          event={(e) => setD_re({ ...D_re, term: e.target.value })}
          value={D_re.term}
          width={70}
        />{" "}
        주기
        <Input
          onChange={(e) => setD_re({ ...D_re, timing: e.target.value })}
          value={D_re.timing}
          width={70}
          type="number"
        />{" "}
        봉전 기준
      </div>
      <div className="flex gap-2">
        기간
        <Input
          onChange={(e) => setD_re({ ...D_re, range: e.target.value })}
          value={D_re.range}
          width={70}
          type="number"
        />
        이격도
        <Input
          onChange={(e) => setD_re({ ...D_re, trend_term: e.target.value })}
          value={D_re.trend_term}
          width={70}
          type="number"
        />
        봉 연속 추세유지 후
        <TrendSelectBox
          event={(e) => setD_re({ ...D_re, trend_type: e.target.value })}
          value={D_re.trend_type}
          width={70}
        />
        반전
      </div>
      <ConditionUseButton state={D_re} setState={setD_re} />
    </div>
  );
};

export default D_reverse;
