import { Dispatch, FC } from "react";
import { Input } from "../common/input";
import {
  OverSelectBox,
  TermSelectBox,
  TrendSelectBox,
} from "../common/select/SelectBox";
import { useD_overRVType } from "./condition";
import ConditionUseButton from "./ConditionUseButton";

interface Props {
  D_over: useD_overRVType;
  setD_over: Dispatch<useD_overRVType>;
}

const D_overRV: FC<Props> = ({ D_over, setD_over }) => {
  return (
    <div className="flex flex-col gap-2">
      <div>이격도 기준값 돌파</div>
      <div className="flex gap-2">
        <TermSelectBox
          event={(e) => setD_over({ ...D_over, term: e.target.value })}
          value={D_over.term}
          width={70}
        />{" "}
        주기
        <Input
          value={D_over.timing}
          width={70}
          type="number"
          onChange={(e) => setD_over({ ...D_over, timing: e.target.value })}
        />{" "}
        봉전 기준
      </div>
      <div className="flex gap-2">
        기간
        <Input
          value={D_over.disparity_term}
          width={70}
          type="number"
          onChange={(e) =>
            setD_over({ ...D_over, disparity_term: e.target.value })
          }
        />
        이격도
        <Input
          value={D_over.disparity_value}
          width={70}
          type="number"
          onChange={(e) =>
            setD_over({ ...D_over, disparity_value: e.target.value })
          }
        />
        <TrendSelectBox
          value={D_over.trend_type}
          event={(e) => setD_over({ ...D_over, trend_type: e.target.value })}
          width={70}
        />{" "}
        돌파
      </div>
      <ConditionUseButton state={D_over} setState={setD_over} />
    </div>
  );
};

export default D_overRV;
