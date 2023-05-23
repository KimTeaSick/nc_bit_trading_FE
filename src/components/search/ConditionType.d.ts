export type PriceType = {
  low_price: string;
  high_price: string;
};

export type TransactionAmount = {
  low_transaction_amount: string;
  high_transaction_amount: string;
};

export type MASPType = {
  chart_term: any;
  first_disparity: string;
  comparison: any;
  second_disparity: string;
};

export type DisparityType = {
  chart_term: any;
  disparity_term: string;
  low_disparity: string;
  high_disparity: string;
};

export type TrendType = {
  chart_term: any;
  MASP: string;
  trend_term: string;
  trend_type: string;
  trend_reverse: any;
};

export type MACDType = {
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
