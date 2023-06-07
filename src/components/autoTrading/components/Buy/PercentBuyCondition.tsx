import { Input } from "@/components/common/input";
import { Dispatch, FC, SetStateAction } from "react";
import { UseBuyConditionType } from "../type/autoTrading";

interface Props {
  value: UseBuyConditionType;
  setValue: Dispatch<SetStateAction<UseBuyConditionType>>;
}

const PercentBuyCondition: FC<Props> = ({ value, setValue }) => {
  return (
    <div className="flex gap-1 items-center font-semibold pl-2">
      <p>포착가격 대비</p>
      <Input
        width={70}
        value={value.percent_to_buy_condition}
        onClick={() => setValue({ ...value, percent_to_buy_condition: "" })}
        onChange={(e) =>
          setValue({ ...value, percent_to_buy_condition: e.target.value })
        }
      />
      <p>% 이상 상승시 매수</p>
    </div>
  );
};

export default PercentBuyCondition;
