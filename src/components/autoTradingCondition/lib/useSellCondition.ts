import { Dispatch, SetStateAction, useState } from "react";
import { UseSellConditionType } from "../type/autoTrading";

export const useSellCondition = (): [
  UseSellConditionType,
  Dispatch<SetStateAction<UseSellConditionType>>,
  () => void
] => {
  const initialValue = {
    upper_percent_to_price_condition: "5",
    down_percent_to_price_condition: "3",
    disparity_for_upper_case: "15",
    upper_percent_to_disparity_condition: "5",
    disparity_for_down_case: "15",
    down_percent_to_disparity_condition: "1",
    call_money_to_sell_method: 0,
    percent_to_split_sell: "25",
    shot_MACD_value: "15",
    long_MACD_value: "60",
    MACD_signal_value: "9",

    trailing_start_percent: "0",
    trailing_stop_percent: "0",
    trailing_order_percent: "0",
  };
  const [sellCondition, setSellCondition] = useState(initialValue);
  const resetSell = () => setSellCondition(initialValue);
  return [sellCondition, setSellCondition, resetSell];
};
