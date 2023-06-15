export type AutoTradingInitialState = {
  searchList: any[];
  searchListStatus: string;
  searchCondition: SearchOptionType | null;
  tradingCondition: TradingOptionType | null;
  conditionListStatus: string;
  myCoinList: MyCoinType[];
  myCoinListStatus: string;
};

type MyCoinType = {
  coin: string;
  info: {
    unit: string;
    now_price: number;
    buy_price: string;
    buy_total_price: string;
    evaluate_price: number;
    profit: number;
    rate: number;
  };
};

export type SearchOptionType = {
  name: string;
  low_price: number | null;
  high_price: number | null;
  chart_term: string | null;
  low_transaction_amount: number | null;
  high_transaction_amount: number | null;
  first_disparity: number | null;
  comparison: string | null;
  second_disparity: number | null;
  MASP: number | null;
  trend_term: number | null;
  trend_type: number | null;
  trend_reverse: number | null;
  disparity_term: number | null;
  low_disparity: number | null;
  high_disparity: number | null;
  short_disparity: number | null;
  long_disparity: number | null;
  up_down: string | null;
};

export type TradingOptionType = {
  name: string;
  price_count: number;
  loss_cut_under_percent: number;
  loss_cut_under_call_price_sell_all: number;
  loss_cut_under_coin_specific_percent: number;
  loss_cut_under_call_price_specific_coin: number;
  loss_cut_over_percent: number;
  loss_cut_over_call_price_sell_all: number;
  loss_cut_over_coin_specific_percent: number;
  loss_cut_over_call_price_specific_coin: number;
  buy_cancle_time: number;
  sell_cancle_time: number;
  percent_to_buy_method: number;
  price_to_buy_method: number;
  callmoney_to_buy_method: number;
  upper_percent_to_price_condition: number;
  down_percent_to_price_condition: number;
  disparity_for_upper_case: number;
  upper_percent_to_disparity_condition: number;
  disparity_for_down_case: number;
  down_percent_to_disparity_condition: number;
  call_money_to_sell_method: number;
  percent_to_split_sell: number;
  shot_MACD_value: number;
  long_MACD_value: number;
  MACD_signal_value: number;
};
