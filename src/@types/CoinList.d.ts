export type CoinType = {
  0: string;
  1: CoinArrayTwo;
};

type CoinArrayTwo = {
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
};

export type DetailCoinType = {
  status: string;
  data: CoinArrayTwo;
};

export type ChartBodyType = {
  id: string | string[] | undefined;
  term: "1m" | "3m" | "5m" | "10m" | "30m" | "1h" | "6h" | "12h" | "24h";
};

export type ChartDataType = {
  Close: number;
  Date: number;
  High: number;
  Low: number;
  Open: number;
  Volume: number;
};
