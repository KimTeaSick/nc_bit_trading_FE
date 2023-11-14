import { Input } from "@/components/common/input";
import { Dispatch, FC, SetStateAction } from "react";
import { UseBuyConditionType } from "../../type/autoTrading";

interface Props {
  value: UseBuyConditionType;
  setValue: Dispatch<SetStateAction<UseBuyConditionType>>;
}

const PercentMoneyBuyMethod: FC<Props> = ({ value, setValue }) => {
  return (
    <div className="flex gap-1 items-center font-semibold pl-2">
      <p>1 종목 당 증거금은 매매 시작전 예수금의 </p>
      <Input
        width={"w-12"}
        value={value.percent_to_buy_method}
        onClick={() => setValue({ ...value, percent_to_buy_method: "" })}
        onChange={(e) =>
          setValue({ ...value, percent_to_buy_method: e.target.value })
        }
      />
      <p>%로 고정</p>
    </div>
  );
};

export default PercentMoneyBuyMethod;
