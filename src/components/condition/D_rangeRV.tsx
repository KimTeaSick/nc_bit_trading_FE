import { Dispatch, FC } from "react";
import { Input } from "../common/input";
import { SelectBox, TermSelectBox } from "../common/select/SelectBox";
import { useD_rangeRVType } from "./condition";
import ConditionUseButton from "./ConditionUseButton";

interface Props {
  D_range: useD_rangeRVType;
  setD_range: Dispatch<useD_rangeRVType>;
}

const D_rangeRV: FC<Props> = ({ D_range, setD_range }) => {
  // const [D_range, setD_range] = useD_rangeRV();
  return (
    <div className="flex flex-col gap-2">
      <div>이격도 기준값 범위</div>
      <div className="flex gap-2">
        <TermSelectBox
          value={D_range.term}
          event={(e) => setD_range({ ...D_range, term: e.target.value })}
          width={70}
        />{" "}
        주기
        <Input
          onChange={(e) => setD_range({ ...D_range, timing: e.target.value })}
          value={D_range.timing}
          width={70}
          type="number"
        />{" "}
        봉전 기준
      </div>
      <div className="flex gap-2">
        기간
        <Input
          onChange={(e) => setD_range({ ...D_range, range: e.target.value })}
          value={D_range.range}
          width={70}
          type="number"
        />
        이격도
        <Input
          onChange={(e) =>
            setD_range({ ...D_range, firstRange_value: e.target.value })
          }
          value={D_range.firstRange_value}
          width={70}
          type="number"
        />{" "}
        -
        <Input
          onChange={(e) =>
            setD_range({ ...D_range, secondRange_value: e.target.value })
          }
          value={D_range.secondRange_value}
          width={70}
          type="number"
        />
      </div>
      <ConditionUseButton state={D_range} setState={setD_range} />
    </div>
  );
};

export default D_rangeRV;
