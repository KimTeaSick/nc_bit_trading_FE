import { Dispatch, FC, useReducer } from "react";
import { Input } from "../common/input";
import { useP_rangeType } from "./condition";
import ConditionUseButton from "./ConditionUseButton";

interface Props {
  P_ran: useP_rangeType;
  setP_ran: Dispatch<useP_rangeType>;
}

const P_range: FC<Props> = ({ P_ran, setP_ran }) => {
  return (
    <div className="flex flex-col gap-2">
      <div>주가 범위</div>
      <div className="flex gap-2">
        <Input
          width={50}
          value={P_ran.term}
          onChange={(e) => setP_ran({ ...P_ran, term: e.target.value })}
        />
        <p>일전기준</p>
        <Input
          width={80}
          value={P_ran.first_value}
          onChange={(e) => setP_ran({ ...P_ran, first_value: e.target.value })}
        />
        <p>
          {`<=`} 종가 {`<=`}
        </p>
        <Input
          width={80}
          value={P_ran.second_value}
          onChange={(e) => setP_ran({ ...P_ran, second_value: e.target.value })}
        />
      </div>
      <ConditionUseButton state={P_ran} setState={setP_ran} />
    </div>
  );
};
export default P_range;
