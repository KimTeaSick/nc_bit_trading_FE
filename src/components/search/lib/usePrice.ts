import { Dispatch, SetStateAction, useState } from "react";
import { PriceConditionType } from "../type/condition";

export const usePrice = (
  initial: PriceConditionType
): [PriceConditionType, Dispatch<SetStateAction<PriceConditionType>>] => {
  console.log(initial);

  const [value, setValue] = useState<PriceConditionType>({
    flag: initial !== undefined ? initial.flag : 1,
    low_price: initial !== undefined ? initial.low_price : "0",
    high_price: initial !== undefined ? initial.high_price : "10000",
  });
  return [value, setValue];
};
