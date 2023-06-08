import { Dispatch, SetStateAction, useState } from "react";
import { UseSellConditionType } from "../type/autoTrading";

export const useSellCondition = (): [
  UseSellConditionType,
  Dispatch<SetStateAction<UseSellConditionType>>
] => {
  const [sellCondition, setSellCondition] = useState({
    upper_percent_to_price_condition: "5",
    down_percent_to_price_condition: "3",
    disparity_for_upper_case: "15",
    upper_percent_to_disparity_condition: "5",
    disparity_for_down_case: "15",
    down_percent_to_disparity_condition: "1",
    call_money_to_sell_method: "+1",
    percent_to_split_sell: "25",
  });
  return [sellCondition, setSellCondition];
};
