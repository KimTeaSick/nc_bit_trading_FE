import { Dispatch, SetStateAction, useState } from "react";
import { useAccountType } from "../type/autoTrading";

const useAccount = (): [
  useAccountType,
  Dispatch<SetStateAction<useAccountType>>
] => {
  const [value, setValue] = useState({
    price_count: "0",
    loss_cut_under_percent: "0",
    loss_cut_under_call_price_sell_all: "0",
    loss_cut_under_coin_specific_percent: "0",
    loss_cut_under_call_price_specific_coin: "0",
    loss_cut_over_percent: "0",
    loss_cut_over_call_price_sell_all: "0",
    loss_cut_over_coin_specific_percent: "0",
    loss_cut_over_call_price_specific_coin: "0",
    buy_cancle_time: "60",
    sell_cancle_time: "60",
  });
  return [value, setValue];
};

export { useAccount };
