export type PossessionCoinType = {
  coin: string;
  info: PossessionCoinInfoType;
};

export type PossessionCoinInfoType = {
  unit: string;
  buy_total_price: string;
  buy_price: string;
  evaluate_price: number;
  now_price: number;
  profit: number;
  rate: number;
};
