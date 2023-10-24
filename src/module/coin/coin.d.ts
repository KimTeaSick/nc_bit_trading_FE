import { DetailCoinType } from "@/@types/CoinList";
export type CoinInitialState = {
  detailCoin: string;
  chartTerm: "1m" | "3m" | "5m" | "10m" | "30m" | "1h" | "6h" | "12h" | "24h";
  chartData: any;
  chartDataStatus: string;
  coinList: any[];
  coinListStatus: string;
};
