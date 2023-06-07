export type UseBuyConditionType = {
  percent_to_buy_condition: string;
  percent_to_buy_method: string;
  price_to_buy_method: string;
  callmoney_to_buy_method: string;
};

export type UseSellConditionType = {
  upper_percent_to_price_condition: string;
  down_percent_to_price_condition: string;
  disparity_for_upper_case: string;
  upper_percent_to_disparity_condition: string;
  disparity_for_down_case: string;
  down_percent_to_disparity_condition: string;
  call_money_sell_method: string;
  percent_to_split_sell: string;
};
