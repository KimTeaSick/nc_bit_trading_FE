import { Dispatch, FC } from "react";
import { Input } from "../common/input";
import { TermSelectBox } from "../common/select/SelectBox";
import { useMASP_comparisonType } from "./condition";
import ConditionUseButton from "./ConditionUseButton";

interface Props {
  MASP_com: useMASP_comparisonType;
  setMASP_com: Dispatch<useMASP_comparisonType>;
}

const MASP_comparison: FC<Props> = ({ MASP_com, setMASP_com }) => {
  return (
    <div className="flex flex-col gap-2">
      <div>주가 이동 평균 비교</div>
      <div className="flex gap-2">
        <TermSelectBox
          width={70}
          value={MASP_com.term}
          event={(e) => setMASP_com({ ...MASP_com, term: e.target.value })}
        />
        주기
        <Input
          value={MASP_com.timing}
          width={70}
          onChange={(e) => setMASP_com({ ...MASP_com, timing: e.target.value })}
        />
        봉전 기준
      </div>
      <div>
        종가
        <Input
          value={MASP_com.first}
          width={70}
          onChange={(e) => setMASP_com({ ...MASP_com, first: e.target.value })}
        />
        이평이 종가
        <Input
          value={MASP_com.second}
          width={70}
          onChange={(e) => setMASP_com({ ...MASP_com, second: e.target.value })}
        />
        이평을
        <Input
          value={MASP_com.range}
          width={70}
          onChange={(e) => setMASP_com({ ...MASP_com, range: e.target.value })}
        />
        이내에
      </div>
      <div>
        <Input
          value={MASP_com.percent}
          width={70}
          onChange={(e) =>
            setMASP_com({ ...MASP_com, percent: e.target.value })
          }
        />{" "}
        % 근접
      </div>
      <ConditionUseButton state={MASP_com} setState={setMASP_com} />
    </div>
  );
};

export default MASP_comparison;
