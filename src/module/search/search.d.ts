export type SearchInitialStateType = {
  priceSearchCoin: null | ReturnCoinType[];
  transactionAmountSearchCoin: null | ReturnCoinType[];
  disparitySearchCoin: null | ReturnCoinType[];
  MASPSearchCoin: null | ReturnCoinType[];
  trendSearchCoin: null | ReturnCoinType[];
  MACDSearchCoin: null | ReturnCoinType[];
  recommends: null | ReturnCoinType[];
  conditionList: null | any[];
  conditionDetail: any;
};

export type ReturnCoinType = {
  acc_trade_value: string;
  acc_trade_value_24H: string;
  closing_price: string;
  fluctate_24H: string;
  fluctate_rate_24H: string;
  max_price: string;
  min_price: string;
  opening_price: string;
  prev_closing_price: string;
  units_traded: string;
  units_traded_24H: string;
  tenRow: TenRowType[];
};

type TenRowType = {
  Close: any;
  TransactioAmount: any;
  Volume: any;
  coin_name: any;
  time: any;
};
