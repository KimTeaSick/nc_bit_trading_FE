import { Input } from "@/components/common/input";
import { Dispatch, FC, SetStateAction } from "react";
import { UseSellConditionType } from "../../type/autoTrading";

interface Props {
  up_down: boolean;
  value: UseSellConditionType;
  setValue: Dispatch<SetStateAction<UseSellConditionType>>;
}

const PercentSellCondtion: FC<Props> = ({ up_down, value, setValue }) => {
  return (
    <div className="flex gap-1 items-center font-semibold pl-2">
      <p>보유 종목의 평균 매수 단가 기준 대비</p>
      <Input
        width={70}
        value={
          up_down
            ? value.upper_percent_to_price_condition
            : value.down_percent_to_price_condition
        }
        onClick={() =>
          up_down
            ? setValue({ ...value, upper_percent_to_price_condition: "" })
            : setValue({ ...value, down_percent_to_price_condition: "" })
        }
        onChange={(e) =>
          up_down
            ? setValue({
                ...value,
                upper_percent_to_price_condition: e.target.value,
              })
            : setValue({
                ...value,
                down_percent_to_price_condition: e.target.value,
              })
        }
      />
      <p>% 이상 {up_down ? "상승" : "하락"} 시</p>
    </div>
  );
};

export default PercentSellCondtion;
