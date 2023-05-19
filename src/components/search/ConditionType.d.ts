export type PriceType = {
  flag: string;
  low_price: string;
  high_price: string;
};

export type TransactionAmount = {
  flag: string;
  low_transaction_amount: string;
  high_transaction_amount: string;
};

export type MASPType = {
  flag: string;
  chart_term: any;
  first_disparity: string;
  comparison: any;
  second_disparity: string;
};

export type DisparityType = {
  flag: string;
  chart_term: any;
  disparity_term: string;
  low_disparity: string;
  high_disparity: string;
};

export type TrendType = {
  flag: string;
  chart_term: any;
  trend_term: string;
  trend_type: string;
  trend_reverse: any;
};

export type MACDType = {
  flag: string;
  chart_term: any;
  short_disparity: string;
  long_disparity: string;
  up_down: any;
};

type TableDataType = {
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
