import { Dispatch, FC } from "react";
import { Input } from "../common/input";
import { TermSelectBox, UpDownSelectBox } from "../common/select/SelectBox";
import { useD_RV_up_downType } from "./condition";
import ConditionUseButton from "./ConditionUseButton";

interface Props {
  D_RV_up_down: useD_RV_up_downType;
  setD_RV_up_down: Dispatch<useD_RV_up_downType>;
}

const D_RV_up_down: FC<Props> = ({ D_RV_up_down, setD_RV_up_down }) => {
  return (
    <div className="flex flex-col gap-2">
      <div>이격도 기준값 이상 이하</div>
      <div className="flex gap-2 items-center">
        <TermSelectBox
          event={(e) =>
            setD_RV_up_down({ ...D_RV_up_down, term: e.target.value })
          }
          value={D_RV_up_down.term}
          width={70}
        />{" "}
        주기
        <Input
          onChange={(e) =>
            setD_RV_up_down({ ...D_RV_up_down, timing: e.target.value })
          }
          value={D_RV_up_down.timing}
          width={70}
          type="number"
        />{" "}
        봉전 기준
      </div>
      <div className="flex gap-2 items-center">
        기간
        <Input
          onChange={(e) =>
            setD_RV_up_down({ ...D_RV_up_down, range: e.target.value })
          }
          value={D_RV_up_down.range}
          width={70}
          type="number"
        />
        이격도
        <Input
          onChange={(e) =>
            setD_RV_up_down({
              ...D_RV_up_down,
              disparity_value: e.target.value,
            })
          }
          value={D_RV_up_down.disparity_value}
          width={70}
          type="number"
        />
        <UpDownSelectBox
          event={(e) =>
            setD_RV_up_down({
              ...D_RV_up_down,
              up_down: e.target.value,
            })
          }
          value={D_RV_up_down.up_down}
          width={70}
        />
      </div>
      <ConditionUseButton state={D_RV_up_down} setState={setD_RV_up_down} />
    </div>
  );
};

export default D_RV_up_down;
