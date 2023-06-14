import { Dispatch, SetStateAction, useState } from "react";
import { UseBuyConditionType } from "../type/autoTrading";

export const useBuyCondition = (): [
  UseBuyConditionType,
  Dispatch<SetStateAction<UseBuyConditionType>>
] => {
  const [buyCondition, setBuyCondition] = useState({
    // percent_to_buy_condition: "3",
    percent_to_buy_method: "5",
    price_to_buy_method: "10",
    callmoney_to_buy_method: "0",
    checkbox: 1,
  });
  return [buyCondition, setBuyCondition];
};
