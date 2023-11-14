import { Dispatch, SetStateAction, useState } from "react";
import { UseBuyConditionType } from "../type/autoTrading";

export const useBuyCondition = (): [
  UseBuyConditionType,
  Dispatch<SetStateAction<UseBuyConditionType>>,
  () => void
] => {
  const initialValue = {
    // percent_to_buy_condition: "3",
    percent_to_buy_method: "5",
    price_to_buy_method: "10",
    callmoney_to_buy_method: 0,
    checkbox: 1,
  };
  const [buyCondition, setBuyCondition] = useState(initialValue);
  const resetBuy = () => setBuyCondition(initialValue);
  return [buyCondition, setBuyCondition, resetBuy];
};
