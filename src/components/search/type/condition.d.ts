import { TrendSelectBox } from "./../../common/select/SelectBox";
export type PriceConditionType = {
  flag: 1 | 0;
  low_price: string;
  high_price: string;
};

export type TransactionAmountType = {
  flag: 1 | 0;
  chart_term: string;
  low_transaction_amount: string;
  high_transaction_amount: string;
};

export type MASPType = {
  flag: 1 | 0;
  chart_term: string;
  first_disparity: string;
  comparison: string;
  second_disparity: string;
};

export type TrendType = {
  flag: 1 | 0;
  chart_term: string;
  MASP: string;
  trend_term: string;
  trend_type: string;
  trend_reverse: string;
};

export type DisparityType = {
  flag: 1 | 0;
  chart_term: string;
  disparity_term: string;
  low_disparity: string;
  high_disparity: string;
};

export type MACDType = {
  flag: 1 | 0;
  chart_term: string;
  short_disparity: string;
  long_disparity: string;
  signal: string;
  up_down: string;
};

export type SearchCondition = {
  idx: number;
  Price: PriceType;
  TransactionAmount: TransactionAmountType;
  MASP: MASPType;
  Disparity: DisparityType;
  Trend: TrendType;
  MACD: MACDType;
};
