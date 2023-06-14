import { Input } from "@/components/common/input";
import { Dispatch, FC, SetStateAction } from "react";
import { UseBuyConditionType } from "../../type/autoTrading";

interface Props {
  value: UseBuyConditionType;
  setValue: Dispatch<SetStateAction<UseBuyConditionType>>;
}

const FixMoneyBuyMethod: FC<Props> = ({ value, setValue }) => {
  return (
    <div className="flex gap-1 items-center font-semibold pl-2">
      <p>1 종목 당 증거금</p>
      <Input
        width={70}
        value={value.price_to_buy_method}
        onClick={() => setValue({ ...value, price_to_buy_method: "" })}
        onChange={(e) =>
          setValue({ ...value, price_to_buy_method: e.target.value })
        }
      />
      <p>만원으로 고정</p>
    </div>
  );
};

export default FixMoneyBuyMethod;
