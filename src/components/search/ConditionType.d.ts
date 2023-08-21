export type PriceType = {
  flag: 1 | 0;
  low_price: string;
  high_price: string;
};

export type TransactionAmount = {
  flag: 1 | 0;
  chart_term: any;

  low_transaction_amount: string;
  high_transaction_amount: string;
};

export type MASPType = {
  flag: 1 | 0;
  chart_term: any;
  first_disparity: string;
  comparison: any;
  second_disparity: string;
};

export type DisparityType = {
  flag: 1 | 0;
  chart_term: any;
  disparity_term: string;
  low_disparity: string;
  high_disparity: string;
};

export type TrendType = {
  flag: 1 | 0;
  chart_term: any;
  MASP: string;
  trend_term: string;
  trend_type: string;
  trend_reverse: any;
};

export type MACDType = {
  flag: 1 | 0;
  chart_term: any;
  short_disparity: string;
  long_disparity: string;
  signal: string;
  up_down: any;
};

type TableDataType = {
  flag: 1 | 0;
  name: string;
  previousclosingprice: number;
  marketprice: number;
  closingprice: number;
  highprice: number;
  lowprice: number;
  tradingvolume24: number;
  floatingprice: number;
  ratechange: number;
};

export type OptionType = {
  idx: number;
  Name: string;
  Create_date: string;
  Update_date: string;
  Used: 0 | 1;
};
