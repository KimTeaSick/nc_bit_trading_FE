import { Dispatch, FC, SetStateAction } from "react";
import SelectBox, { CALL_PRICE } from "../SelectBox";
import { UseSellConditionType } from "../../type/autoTrading";

interface Props {
  value: UseSellConditionType;
  setValue: Dispatch<SetStateAction<UseSellConditionType>>;
}

const PriceCriteria: FC<Props> = ({ value, setValue }) => {
  return (
    <div className="flex gap-1 items-center font-semibold pl-2">
      <p>현재가 대비</p>
      <SelectBox
        width={"w-20"}
        itemList={CALL_PRICE}
        value={value.call_money_to_sell_method}
        event={(e) =>
          setValue({ ...value, call_money_to_sell_method: e.target.value })
        }
      />
      <p>로 주문</p>
    </div>
  );
};

export default PriceCriteria;
