export type UseBuyConditionType = {
  // percent_to_buy_condition: string;
  percent_to_buy_method: string;
  price_to_buy_method: string;
  callmoney_to_buy_method: string;
  checkbox: number;
};

export type UseSellConditionType = {
  upper_percent_to_price_condition: string;
  down_percent_to_price_condition: string;
  disparity_for_upper_case: string;
  upper_percent_to_disparity_condition: string;
  disparity_for_down_case: string;
  down_percent_to_disparity_condition: string;
  call_money_to_sell_method: string;
  percent_to_split_sell: string;
  shot_MACD_value: string;
  long_MACD_value: string;
  MACD_signal_value: string;
};

export type useAccountType = {
  price_count: string;
  loss_cut_under_percent: string;
  loss_cut_under_call_price_sell_all: string;
  loss_cut_under_coin_specific_percent: string;
  loss_cut_under_call_price_specific_coin: string;
  loss_cut_over_percent: string;
  loss_cut_over_call_price_sell_all: string;
  loss_cut_over_coin_specific_percent: string;
  loss_cut_over_call_price_specific_coin: string;
  buy_cancle_time: string;
  sell_cancle_time: string;
};

export type TradingOptionType = {
  buy: UseBuyConditionType;
  sell: UseSellConditionType;
  account: useAccountType;
  name: string;
};
