import { Dispatch, SetStateAction, useState } from "react";
import { UseSellConditionType } from "../components/type/autoTrading";

export const useSellCondition = (): [
  UseSellConditionType,
  Dispatch<SetStateAction<UseSellConditionType>>
] => {
  const [sellCondition, setSellCondition] = useState({
    upper_percent_to_price_condition: "1",
    down_percent_to_price_condition: "2",
    disparity_for_upper_case: "15",
    upper_percent_to_disparity_condition: "1",
    disparity_for_down_case: "16",
    down_percent_to_disparity_condition: "2",
    call_money_sell_method: "+1",
    percent_to_split_sell: "1",
  });
  return [sellCondition, setSellCondition];
};
