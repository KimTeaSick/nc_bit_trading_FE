import { Input } from "@/components/common/input";
import { Dispatch, FC, SetStateAction } from "react";
import { UseSellConditionType } from "../../type/autoTrading";

interface Props {
  up_down: boolean;
  value: UseSellConditionType;
  setValue: Dispatch<SetStateAction<UseSellConditionType>>;
}

const DisparitySellCondition: FC<Props> = ({ up_down, value, setValue }) => {
  return (
    <div className="flex gap-1 items-center font-semibold pl-2">
      <p>현재 가가</p>
      <Input
        width={"w-16"}
        value={
          up_down
            ? value.disparity_for_upper_case
            : value.disparity_for_down_case
        }
        onClick={() =>
          up_down
            ? setValue({ ...value, disparity_for_upper_case: "" })
            : setValue({ ...value, disparity_for_down_case: "" })
        }
        onChange={(e) =>
          up_down
            ? setValue({ ...value, disparity_for_upper_case: e.target.value })
            : setValue({ ...value, disparity_for_down_case: e.target.value })
        }
      />
      <p>이평선 대비</p>
      <Input
        width={"w-16"}
        value={
          up_down
            ? value.upper_percent_to_disparity_condition
            : value.down_percent_to_disparity_condition
        }
        onClick={() =>
          up_down
            ? setValue({ ...value, upper_percent_to_disparity_condition: "" })
            : setValue({ ...value, down_percent_to_disparity_condition: "" })
        }
        onChange={(e) =>
          up_down
            ? setValue({
                ...value,
                upper_percent_to_disparity_condition: e.target.value,
              })
            : setValue({
                ...value,
                down_percent_to_disparity_condition: e.target.value,
              })
        }
      />
      <p>% 이상 {up_down ? "상승" : "하락"} 시</p>
    </div>
  );
};
export default DisparitySellCondition;
