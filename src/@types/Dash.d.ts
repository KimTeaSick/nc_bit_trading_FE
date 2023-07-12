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

export type AccountType = {
  total: number | undefined;
  deposit: number | undefined;
  buy: number | undefined;
  sell: number | undefined;
};
export type RateType = {
  now_balance: number;
  rate: number;
};
