import { Dispatch, SetStateAction, useState } from "react";
import { UseBuyConditionType } from "../components/type/autoTrading";

export const useBuyCondition = (): [
  UseBuyConditionType,
  Dispatch<SetStateAction<UseBuyConditionType>>
] => {
  const [buyCondition, setBuyCondition] = useState({
    percent_to_buy_condition: "0",
    percent_to_buy_method: "0",
    price_to_buy_method: "0",
    callmoney_to_buy_method: "+1",
  });
  return [buyCondition, setBuyCondition];
};
