import { Input } from "@/components/common/input";
import { Dispatch, FC, SetStateAction } from "react";
import { UseSellConditionType } from "../../type/autoTrading";

interface Props {
  value: UseSellConditionType;
  setValue: Dispatch<SetStateAction<UseSellConditionType>>;
}

const PercentSellMethod: FC<Props> = ({ value, setValue }) => {
  return (
    <div className="flex gap-1 items-center font-semibold pl-2">
      <p>보유종목의</p>
      <Input
        width={70}
        value={value.percent_to_split_sell}
        onClick={() => setValue({ ...value, percent_to_split_sell: "" })}
        onChange={(e) =>
          setValue({ ...value, percent_to_split_sell: e.target.value })
        }
      />
      <p>%씩 분할 매도</p>
    </div>
  );
};

export default PercentSellMethod;
