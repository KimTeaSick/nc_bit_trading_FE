import { Dispatch, FC, SetStateAction } from "react";
import SelectBox, { CALL_PRICE } from "../SelectBox";
import { UseBuyConditionType } from "../../type/autoTrading";

interface Props {
  value: UseBuyConditionType;
  setValue: Dispatch<SetStateAction<UseBuyConditionType>>;
}

const PriceCriteria: FC<Props> = ({ value, setValue }) => {
  return (
    <div className="flex gap-1 items-center font-semibold pl-2">
      <p>가격 현재가 대비</p>
      <SelectBox
        itemList={CALL_PRICE}
        width={90}
        value={value.callmoney_to_buy_method}
        event={(e) =>
          setValue({ ...value, callmoney_to_buy_method: e.target.value })
        }
      />
    </div>
  );
};

export default PriceCriteria;
